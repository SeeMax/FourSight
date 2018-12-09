<?php
/**
 * Register Settings
 *
 * @package     wpocore
 * @subpackage  Admin/Settings
 * @copyright   Copyright (c) 2013, Jeremiah Prummer
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.0
*/

// Exit if accessed directly
//if ( !defined( 'ABSPATH' ) ) exit;

class WPOCore_Settings {
	public $options_page_hook;

	public function __construct() {
		add_filter( 'wpocore_settings_sanitize_text', array($this, 'wpocore_sanitize_text_field' ));
		add_action('admin_menu', array($this, 'wpmenucart_add_page'));

		$this->wpocore_options = $this->wpocore_get_settings();

		add_action( 'admin_enqueue_scripts', array($this, 'enqueue_scripts') );

		// AJAX license key activate / deactivate
		
	}

	public function enqueue_scripts( $hook_suffix ) {

		if ( $hook_suffix == $this->options_page_hook ) {

			wp_enqueue_script(
				'wpo-sidekick',
				plugin_dir_url( dirname(__FILE__) ) . 'js/activate-script.js',
				array( 'jquery' ),
				WPO_SIDEKICK_VERSION
			);

			wp_localize_script(
				'wpo-sidekick',
				'wpo_sidekick_ajax',
				array(
					'ajaxurl'		=> admin_url( 'admin-ajax.php' ), // URL to WordPress ajax handling page  
					'nonce'			=> wp_create_nonce('generate_wpo_sidekick'),
				)
			);
		}
	}

	/**
	 * Get Settings
	 *
	 * Retrieves all plugin settings
	 *
	 * @since 1.0
	 * @return array wpocore settings
	 */

	public function wpocore_get_settings() {

		$settings = get_option( 'wpocore_settings' );
		if( empty( $settings ) ) {
			// Update old settings with new single option
			$general_settings = is_array( get_option( 'wpocore_settings_general' ) ) ? get_option( 'wpocore_settings_general' ) : array();

			// add default licenses to the settings
			$defaults = array (
				'wpo_core_license'	=> 'b945b2e6a0ef88d5cb4b57e38ae97add',
			);

			$settings = array_merge( $general_settings, $defaults );
			update_option( 'wpocore_settings', $settings );
		}
		return apply_filters( 'wpocore_get_settings', $settings );
	}

	/**
	 * Add all settings sections and fields
	 *
	 * @since 1.0
	 * @return void
	*/


	public function wpocore_get_registered_settings() {
		$wpocore_licenses = apply_filters( 'wpocore_licenses_general', array() );
		return $wpocore_licenses;
		$wpocore_licenses = array(
			/** General Settings */
			'general' => apply_filters( 'wpocore_licenses_general',
				array(
					'wpo_licenses' => array(
						'id' => 'wpo_licenses',
						'name' => '<strong>' . __( 'Plugin Licenses', 'wpocore' ) . '</strong>',
						'desc' => __( 'Enter Your License Keys Below', 'wpocore' ),
						'type' => 'header',
						'std'  => ''
					),
				)
			)
		);
		
		return $wpocore_licenses;
	}

	/**
	 * Add menu page
	 */
	public function wpmenucart_add_page() {
		$this->options_page_hook = add_submenu_page(
			'wpo-core-menu',
			'Manage Licenses',
			'Manage Licenses',
			'manage_options',
			'wpo-license-page',
			array($this,'wpo_license_page')
		);
	}

	public function wpo_license_page() {
		?>
		<div class="wrap">
			<div class="icon32" id="icon-options-general"><br /></div>
			<h2><?php _e('License Key Admin', 'wpocore') ?></h2>
		<?php
		//use for debugging
		//$option = get_option( 'wpocore_settings' );
		//print_r($option);
		?>
			<form method="post" action="options.php">
			<?php
			$this->output_license_input_fields();
			?>
			</form>
		</div>
		<?php
	}


	public function output_license_input_fields() {
		$settings = $this->wpocore_get_registered_settings();

		$sidekick_plugin = $settings['wpo_core_license']['id'];

		if (count($settings) <= 1) {
			_e( sprintf("It looks like you haven't activated any WP Overnight plugins yet! Check your email for download links and our %sdocumentation%s for instructions on how to install the plugin.", '<a href="https://docs.wpovernight.com/general/installing-wp-overnight-plugins/">','</a>'), 'wpo_core' );
		}

		echo '<ul>';
		foreach ($settings as $plugin_license_slug => $setting) {

			if ( $setting['id'] == $sidekick_plugin ) {
				// skip sidekick in settings
				continue;
			}

			if ( isset( $this->wpocore_options[ $setting['id'] ] ) ) {
				$value = $this->wpocore_options[ $setting['id'] ];
			} else {
				$value = isset( $setting['std'] ) ? $setting['std'] : '';
			}

			$size = ( isset( $setting['size'] ) && ! is_null( $setting['size'] ) ) ? $setting['size'] : 'regular';

			$status = get_option($setting['id'], '');

			if (is_object($status) && isset($status->license)) {
				$activation_status = $status->license;
			} elseif (is_string($status)) {
				$activation_status = $status;
			} else {
				$activation_status = '';
			}

			$name = 'wpocore_settings_' . '[' . $setting['id'] . ']';
			echo '<li class="license-fields"><h3>' . $setting['name'] . '</h3>';

			printf('<span class="state-indicator %5$s"><input type="text" class="%1$s-text license-key" id="wpocore_settings_%2$s" name="wpocore_settings_%2$s" value="%3$s" data-plugin_license_slug="%4$s"/><span class="license-state"></span></span>', $size, $name, esc_attr( stripslashes( $value ) ), $setting['id'], $activation_status );

			// echo $activation_status;
			wp_nonce_field( 'eddlic_sample_nonce', 'eddlic_sample_nonce' );
			echo '<span class="button secondary status-' . $activation_status . ' activate" data-edd_action="activate_license">' . __( 'Activate', 'wpocore' ) .'</span>';
			echo '<span class="button secondary status-' . $activation_status . ' deactivate" data-edd_action="deactivate_license">' . __( 'Deactivate', 'wpocore' ) .'</span>';
			if ($activation_status === 'expired') { echo '<a href="my-account" target="_blank"><span class="button secondary activate">Renew your license</span></a>'; }
			echo '<div class="activation-toggle-message"></div>';
			echo '<p class="license-info status-' . $activation_status . '">' . __( 'One moment please', 'wpocore' ) . '</p><hr>';
			echo '<label for="wpocore_settings_' . '[' . $setting['id'] . ']"> '  . ! empty( $setting['desc'] ) ? $setting['desc'] : '' . '</label></li>';
		}
		echo '</ul>';

	}
}
