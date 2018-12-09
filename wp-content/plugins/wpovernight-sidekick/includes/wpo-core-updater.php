<?php

class WPO_Updater {
	
	private $wpo_store_url;
	private $plugin_item_name;
	private $plugin_file;
	private $plugin_license_slug;
	private $plugin_version;
	private $plugin_author;
	
	public function __construct( $_item_name, $_file, $_license_slug, $_version, $_author ) {
		$this->wpo_store_url		= apply_filters( 'wpovernight_store_url', 'https://wpovernight.com' );
		$this->plugin_item_name		= $_item_name;
		$this->plugin_file			= $_file;
		$this->plugin_license_slug	= $_license_slug;
		$this->plugin_version		= $_version;
		$this->plugin_author		= $_author;
		
		if( !class_exists( 'EDD_SL_Plugin_Updater' ) ) {
			// load the EDD updater class
			include( dirname( __FILE__ ) . '/EDD_SL_Plugin_Updater.php' );
		}

		$this->call_edd_updater();

		add_filter( 'wpocore_licenses_general', array( $this, 'add_license' ));
		add_filter( 'wpocore_license_check_'.$this->plugin_license_slug, array( $this, 'check_license' ), 10, 1 );
		add_action( 'wp_ajax_wpo_sidekick_licence_key_action_'.$this->plugin_license_slug, array($this, 'remote_license_actions' ));
		add_filter( 'http_response', array( $this, 'unauthorized_response'), 10, 3 );
	}

	/**
	 * Register License settings
	 */
	public function add_license( $settings ) {
		$plugin_settings = array(
			$this->plugin_license_slug => array(
				'id' => $this->plugin_license_slug,
				'name' => $this->plugin_item_name, // currently not translated, this would require passing an additional paramter because the item_name has to correspond to the updater item name
				'desc' => __( '', 'wpocore' ),
				'type' => 'text',
				'size' => 'regular',
				'std'  => ''
			)
		);

		return array_merge( $settings, $plugin_settings );
	}
	
	/**
	 * Send API data to the EDD Updater class
	 */
	public function call_edd_updater() {
		$wpocore_settings = get_option('wpocore_settings');

		// get license key
		if ($this->plugin_item_name == 'WP Overnight Sidekick' ) {
			// sidekick license key hardcoded!
			$license_key = 'b945b2e6a0ef88d5cb4b57e38ae97add';
		} else {
			// get license key from settings db if entered
			$license_key = isset($wpocore_settings[$this->plugin_license_slug])?trim( $wpocore_settings[$this->plugin_license_slug] ):'';
		}

		// setup the updater
		if (!empty($license_key)) {
			$edd_updater = new EDD_SL_Plugin_Updater( $this->wpo_store_url, $this->plugin_file, array( 
					'version' 	=> $this->plugin_version,	// current version number
					'license' 	=> $license_key, 			// license key (used get_option above to retrieve from DB)
					'item_name' => $this->plugin_item_name, // name of this plugin
					'author' 	=> $this->plugin_author  	// author of this plugin
				)
			);
		}
	}

	public function check_license() {
		$wpocore_settings = get_option('wpocore_settings');
		if (!empty( $wpocore_settings[ $this->plugin_license_slug ] )) {
			$license = trim( $wpocore_settings[ $this->plugin_license_slug ] );

			// data to send in our API request
			$api_params = array( 
				'edd_action'=> 'check_license', 
				'license' 	=> $license, 
				'item_name' => urlencode( $this->plugin_item_name ), // the name of our product in EDD
			);
			$response = $this->edd_api_action( $api_params );
			return $response;
		};
	}

	/************************************
	* Activate/deactivate license key
	*************************************/

	public function remote_license_actions() {

		check_ajax_referer( "generate_wpo_sidekick", 'security' );

		if (empty($_POST['edd_action']) || empty($_POST['license_key'])) {
			return;
		}

		// retrieve the license from the database
		$wpocore_settings = get_option('wpocore_settings');
		$wpocore_settings[$this->plugin_license_slug] = $license = $_POST['license_key'];
		update_option( 'wpocore_settings', $wpocore_settings );
 
		// data to send in our API request
		$api_params = array( 
			'edd_action'=> $_POST['edd_action'], 
			'license' 	=> $_POST['license_key'], 
			'item_name' => urlencode( $this->plugin_item_name ), // the name of our product in EDD
			// 'url' => get_site_url(null, '', 'http'), // Already is send through user agent
		);

		$response = $this->edd_api_action( $api_params );
		
		// activate or deactivate
		if (in_array($_POST['edd_action'], array('activate_license','deactivate_license'))) {
			update_option( $this->plugin_license_slug, $response );
		}

		if (isset($response->expires)) {
			if ( $response->expires == 'lifetime') {
				$exp_date = __( 'Forever', 'wpocore' );
			} else {
				$exp_date = date_i18n( get_option( 'date_format' ), strtotime($response->expires));
			}
		}

		switch ( $response->license ) {
			case 'valid':
				$response->action_message = __( 'Activated your plugin.', 'wpocore' );
				$response->license_state = 'valid';
				$response->license_state_message = __( 'valid', 'wpocore' );
				$response->license_info = sprintf( __( 'This license is valid until: %s (Active sites: %s / %s)', 'wpocore' ), $exp_date, $response->site_count, $response->license_limit);
				break;
			case 'deactivated':
				$response->action_message = __( 'Deactivated your plugin.', 'wpocore' );
				$response->license_state = 'invalid';
				$response->license_state_message = __( 'valid', 'wpocore' );
				// get activation count & limit
				$api_params = array( 
					'edd_action'=> 'check_license', 
					'license' 	=> $_POST['license_key'], 
					'item_name' => urlencode( $this->plugin_item_name ), // the name of our product in EDD
				);
				$check_response = $this->edd_api_action( $api_params );
				$exp_date = date_i18n( get_option( 'date_format' ), strtotime($check_response->expires));
				$license_limit = $check_response->license_limit;
				$site_count = $check_response->site_count;
				$response->license_info = sprintf( __( 'This license is valid until: %s (Active sites: %s / %s)', 'wpocore' ), $exp_date, $site_count, $license_limit);
				break;
			case 'expired':
				$response->license_state = 'invalid';
				$response->license_state_message = __( 'expired', 'wpocore' );	
				$response->license_info = __( 'This license was valid until: ' . $exp_date, 'wpocore' );
				break;
			case 'site_inactive':
				$response->license_state = 'valid';
				$response->license_state_message = __( 'valid', 'wpocore' );
				$response->license_info = sprintf( __( 'This license is valid until: %s (Active sites: %s / %s)', 'wpocore' ), $exp_date,  $response->site_count, $response->license_limit);
				break;
			case 'failed':
				$response->action_message = __( 'Deactivated your plugin.', 'wpocore' );
				$response->license_state = 'invalid';
				$response->license_state_message = __( 'invalid', 'wpocore' );
				$response->license_info = '';
				break;
			case 'invalid':
				if ($response->error == 'missing') {
					$response->action_message = __( 'Your license key was incorrect.', 'wpocore' );
					$response->license_state = 'incomplete';
					$response->license_state_message = __( 'invalid', 'wpocore' );
					$response->license_info = 	__( 'Please enter the correct license key.', 'wpocore' );
				} elseif ($response->error == 'expired') {
					$response->action_message = __( 'Your license key is expired.', 'wpocore' );
					$response->license_state = 'incomplete';
					$response->license_state_message = __( 'expired', 'wpocore' );
					$response->license_info = sprintf( __( 'This license was valid until: %s', 'wpocore' ), $exp_date );
				} elseif ($response->error == 'no_activations_left') {
					$response->action_message = sprintf( __( '<strong>No Activations Left</strong> &mdash; Please visit %sMy Account%s to upgrade your license or deactivate a previous activation.', 'wpocore' ), '<a href="https://wpovernight.com/my-account/" target="_blank">', '</a>' );
					$response->license_state = 'incomplete';
					$response->license_state_message = __( 'invalid', 'wpocore' );
					$response->license_info = '';
				} else {
					$response->action_message = __( 'Please enter the correct license key.', 'wpocore' );
					$response->license_info = '';
					$response->license_state = 'incomplete';
					$response->license_state_message = __( 'invalid', 'wpocore' );
				}
				break;
			default:
				break;
		}

		echo json_encode($response);
		die();
	}

	public function edd_api_action( $api_params ) {
	 
		// Call the custom API.
		$response = wp_remote_get( add_query_arg( $api_params, $this->wpo_store_url ), array( 'timeout' => 15, 'sslverify' => false ) );

 		// file_put_contents( dirname(dirname(__FILE__)) .'/request.txt', add_query_arg( $api_params, $this->wpo_store_url ) ); // API debugging
 		// file_put_contents( dirname(dirname(__FILE__)) .'/response.txt', print_r($response,true)); // API debugging

		// make sure the response came back okay
		if ( is_wp_error( $response ) ) {
			return false;
		}
 
		// decode the license data
		$response = json_decode( wp_remote_retrieve_body( $response ) );

		return $response;
	}


	public function unauthorized_response($response, $args, $url) {
		if (isset($response['response']) && is_array($response['response'])) {
			if (isset($response['response']['code']) && $response['response']['code'] == 401 ) {
				// we have a 401 response, check if it's ours
				$license_server = 'https://wpovernight.com';
				if (strpos($url, $license_server) !== false && strpos($url, 'package_download') !== false) {
					// this is our request

					// extract values from token
					$url_parts = parse_url( $url );
					$paths     = array_values( explode( '/', $url_parts['path'] ) );
					$token  = end( $paths );
					$values = explode( ':', base64_decode( $token ) );
					if ( count( $values ) !== 6 ) {
						$response['response']['message'] = __( 'Invalid token supplied', 'wpocore' );
						return $response;
					}
					$expires        = $values[0];
					$license_key    = $values[1];
					$download_id    = (int) $values[2];
					$url            = str_replace( '@', ':', $values[4] );
					$download_beta  = (bool) $values[5];

					// Check_license response with the above vars
					// data to send in our API request
					$api_params = array(
						'edd_action' => 'check_license',
						'url'		=> $url,
						'license' 	=> $license_key, 
						'item_id'	=> $download_id,
					);

					if ( $check_response = $this->edd_api_action( $api_params ) ) {
						switch( $check_response->license ) {
							case 'expired':
								$message = __( 'Your license has expired, please renew it to install this update.', 'wpocore' );
								break;
							case 'inactive':
							case 'site_inactive':
								$message = sprintf( __( 'Your license has not been activated for this site (%s), please activate it first.', 'wpocore' ), str_replace( array('http://','https://'), '', get_bloginfo( 'url' ) ) );
								break;
							case 'disabled':
								$message = __( 'Your license has been disabled.', 'wpocore' );
								break;
							case 'valid':
								break;
							default:
								$message = __( 'Your license could not be validated.', 'wpocore' );
								break;
						}
					} else {
						$message = __( 'License key expired or not activated for URL', 'wpocore' );
					}

					$response['response']['message'] = $message;

					return $response;

				}
			}
		}
		return $response;
	}

}