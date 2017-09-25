<?php
/**
 * Plugin Name: WP Overnight Sidekick
 * Plugin URI: http://wpovernight.com/
 * Description: WP Overnight Sidekick is an administration plugin for all your WP Overnight Purchases. All WP Overnight themes and plugins will be managed via this plugin.
 * Version: 2.0.3
 * Author: Jeremiah Prummer, Ewout Fernhout, Michael Kluver
 * Author URI: http://wpovernight.com/
 * License: GPL2
 * Text Domain: wpo_wcpdf_templates
*/

class WPOvernight_Core {
	
	// Setup Variables
	public $main_menu_hook;
	public $get_new_hook;
	public $options_page_hook;
	public $settings;
	public $options;

	public function __construct() {
		$this->includes();
		$this->settings = new WPOCore_Settings();

		$this->options = get_option('wpocore-license');

		// Init updater data
		$item_name	= 'WP Overnight Sidekick';
		$file			= __FILE__;
		$license_slug	= 'wpo_core_license';
		$version		= '2.0.3';
		$author		= 'Jeremiah Prummer';

		new WPO_Updater( $item_name, $file, $license_slug, $version, $author );

		add_action( 'admin_menu', array( $this, 'wpo_core_menu' ), 0 );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_scripts_styles' ) ); // Load scripts

		if (!defined('WPO_SIDEKICK_VERSION')) {
			define('WPO_SIDEKICK_VERSION', $version);
		}
	}
	
	/**
	 * Load additional classes and functions
	 */
	public function includes() {
		require_once( 'includes/wpo-core-settings.php' );
		require_once( 'includes/wpo-core-updater.php' );
	}

	/** 
	* Add Menu Page 
	*/
	public function wpo_core_menu() {	
		$this->main_menu_hook = add_menu_page(
			'WP Overnight Core',
			'WP Overnight', 
			'manage_options', 
			'wpo-core-menu', 
			array( $this, 'wpo_core_page' ), 
			'', 
			65
		);
	}
	
	/** 
	* Main Page 
	*/
	public function wpo_core_page() {
		if ( !current_user_can( 'manage_options' ) )  {
			wp_die( __( 'You do not have sufficient permissions to access this page.', 'wpocore' ) );
		}

		?>
		<div class="wrap">
			<div class="wpocore-main-page">
				<h1>Say Hello to Your WP Overnight Sidekick!</h1>
				<p>With the WP Overnight Sidekick plugin you are always up to date with all our plugins. If you enter your license key in the <a href="?page=wpo-license-page">Manage Licenses</a> section, the plugin will regularly check for updates and notify you of new releases.</p>
				<p>In the <a href="?page=wpo-plugins-page">Get New Plugins</a> section you can find all other plugins and extensions we offer.</p>
				<p>Need help? <a href="https://docs.wpovernight.com" target="blank">Click here to see our FAQ's</a> or send us an email to <a href="mailto:support@wpovernight.com">support@wpovernight.com</a> and we will get back to you as soon as possible.</p>
			</div>

		<?php 

		// Include available plugins
		$rss = fetch_feed( apply_filters( 'wpovernight_store_url', 'https://wpovernight.com' ) . '/feed/?post_type=download' );
		if ( is_wp_error( $rss ) ) {
			return;
		}
		?>
			<div class="wpocore-plugin-page">
				<h1>Check out our other plugins!</h1>
				<ul class="wpo-plugin-shop">
					<?php
					// Loop through each feed item and display each item as a hyperlink.
					foreach ( $rss->get_items() as $item ) :
					$classname = $item->get_item_tags('', 'ClassName');
					$class = $classname[0]['data'];
					// echo $class;
					if(class_exists($class)){
						$item_class = 'installed';
					} else {
						$item_class = 'not-installed';
					}
					?>
					<li class="<?php echo $item_class; ?>">	
						<a href="<?php echo $item->get_permalink(); ?>?utm_source=sidekick&utm_medium=sidekick&utm_campaign=<?php echo urlencode($item->get_title()); ?>" title="<?php echo 'Posted '.$item->get_date('j F Y | g:i a'); ?>" class="wpo-feed-header">
						<?php echo $item->get_title(); ?></a>
						<?php echo $item->get_description(); ?>
						<a href="<?php echo $item->get_link(); ?>?utm_source=sidekick&utm_medium=sidekick&utm_campaign=<?php echo urlencode($item->get_title()); ?>" class="wpo-read-more">Read more&rarr;</a>
					</li>
					<?php endforeach; ?>
				</ul>
		
			</div>
		</div>

	<?php } 
	
	/**
	 * Load CSS (and/or scripts)
	 */
	public function load_scripts_styles ( $hook ) {
		global $wp_version;
		
		if( $hook != $this->settings->options_page_hook && $hook != $this->main_menu_hook && $hook != $this->get_new_hook ) {
			return;
		}
		wp_register_style( 'wpovernight-core', plugins_url( '/css/wpovernight-core.css', __FILE__ ), array(), '', 'all' );
		wp_enqueue_style( 'wpovernight-core' );
	}

	/** 
	* Get Plugins Page 
	*/
	public function wpo_plugins_page() {
		if ( !current_user_can( 'manage_options' ) )  {
			wp_die( __( 'You do not have sufficient permissions to access this page.', 'wpocore' ) );
		}
		echo '<div class="wrap">';
		?>
		<?php include_once(ABSPATH.WPINC.'/feed.php');
			
			$rss = fetch_feed( apply_filters( 'wpovernight_store_url', 'https://wpovernight.com' ) . '/feed/?post_type=download' );
		?>
			<ul class="wpo-plugin-shop">
		<?php
		
			// Loop through each feed item and display each item as a hyperlink.
			foreach ( $rss->get_items() as $item ) :
			$classname = $item->get_item_tags('', 'ClassName');
			$class = $classname[0]['data'];
			echo $class;
			if(class_exists($class)){
				$item_class = 'installed';
			} else {
				$item_class = 'not-installed';
			}
		?>
			<li class="<?php echo $item_class; ?>">	
			<a href="<?php echo $item->get_permalink(); ?>?utm_source=sidekick&utm_medium=sidekick&utm_campaign=<?php echo urlencode($item->get_title()); ?>" title="<?php echo 'Posted '.$item->get_date('j F Y | g:i a'); ?>" class="wpo-feed-header">
			<?php echo $item->get_title(); ?></a>
			<?php echo $item->get_description(); ?>
			<a href="<?php echo $item->get_link(); ?>?utm_source=sidekick&utm_medium=sidekick&utm_campaign=<?php echo urlencode($item->get_title()); ?>" class="wpo-read-more">Read more&rarr;</a>
			</li>
			<?php endforeach; ?>
			</ul>
		<?php
		echo '</div>';
	}
}
$WPO_Core = new WPOvernight_Core();
