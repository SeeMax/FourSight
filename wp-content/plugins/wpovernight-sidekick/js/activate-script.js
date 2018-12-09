// AJAX activate / deactivate license key

jQuery( function( $ ) {

	// Initial check
	$('input.license-key').each( function( index ) {
		var plugin_license_slug = $(this).data('plugin_license_slug');
		$form = $(this).closest('li');

		$form.addClass('ajax-waiting');
		var data = {
			security:            wpo_sidekick_ajax.nonce,
			action:              "wpo_sidekick_licence_key_action_"+plugin_license_slug,
			license_key:         $(this).val(),
			edd_action:          'check_license',
		};

		xhr = $.ajax({
			type:		'POST',
			url:		wpo_sidekick_ajax.ajaxurl,
			data:		data,
			context:    $form,
			dataType:   "json", 
			success:	function( response ) {
				$(this).removeClass('ajax-waiting');
				$(this).find('.license-state').html( response.license_state_message );

				if (response.license == 'expired') {
					$(this).find('.state-indicator').removeClass().addClass('state-indicator expired');
				} else if (response.license == 'site_inactive') {
					$(this).find('.state-indicator').removeClass().addClass('state-indicator');
					$(this).find('.license-info').html( response.license_info );
					$(this).find('.activate, .deactivate').removeClass('status-failed status-valid status-valid status-invalid').addClass('status-deactivated');
				}

				if ( response.success == true && response.license == 'valid' ) {
					$(this).find('.license-info').html( response.license_info );
					$(this).find('.state-indicator').removeClass().addClass('state-indicator valid');
				} else if ( response.success == true && response.license == 'expired' ) {
					$(this).find('.license-info').html( response.license_info );
				} 

				if (response.success == false) {
					$(this).find('.license-info').html( response.license_info );
				}
			},
			error:		function( jqXHR, textStatus, errorThrown ) {
				$(this).removeClass('ajax-waiting');
			}
		});

	});

	$('.activate, .deactivate').click( function( event ) {
		$form = $(this).closest('li');
		$input = $(this).parent().find( 'input.license-key' );

		var plugin_license_slug = $input.data('plugin_license_slug');
		$form.addClass('ajax-waiting');
		var data = {
			security:            wpo_sidekick_ajax.nonce,
			action:              "wpo_sidekick_licence_key_action_"+plugin_license_slug,
			license_key:         $input.val(),
			edd_action:          $(this).data('edd_action'),
		};

		xhr = $.ajax({
			type:		'POST',
			url:		wpo_sidekick_ajax.ajaxurl,
			data:		data,
			dataType:   "json", 
			success:	function( response ) {
				$form.removeClass('ajax-waiting');
				$form.find('.activation-toggle-message').html( response.action_message );
				$form.find('.activation-toggle-message').slideDown( "fast" );

				// Activation with wrong or incomplete license key
				if (response.license_state == 'incomplete') { 
					$form.find('.state-indicator').removeClass().addClass('state-indicator incomplete');
					$form.find('.license-state').html( response.license_state_message );
					$form.find('.license-info').html( response.license_info );
				// Activation with valid license key
				} else if (response.license_state == 'valid') {
					$form.find('.activate, .deactivate').removeClass('status-failed status-deactivated status-valid status-invalid').addClass('status-valid');
					$form.find('.state-indicator').removeClass().addClass('state-indicator valid');
					$form.find('.license-state').html( response.license_state_message );
					$form.find('.license-info').removeClass('status-').html( response.license_info );
				// Deactivation with invalid or expired license key
				} else if (response.license_state == 'invalid' && response.license == 'failed') {
					$form.find('.activate, .deactivate').removeClass('status-failed status-valid status-valid status-invalid').addClass('status-deactivated');
					$form.find('.state-indicator').removeClass().addClass('state-indicator');
					$form.find('.license-state').html( response.license_state_message );
					$form.find('.license-info').html( response.license_info );
				// Deactivation with valid license key
				} else if (response.license_state == 'invalid') {
					$form.find('.activate, .deactivate').removeClass('status-failed status-valid status-valid status-invalid').addClass('status-deactivated');
					$form.find('.state-indicator').removeClass().addClass('state-indicator');
					$form.find('.license-state').html( response.license_state_message );
					$form.find('.license-info').html( response.license_info );
				}  
				// Expired license key
				if (response.error == 'expired') {
					$form.find('.activate, .deactivate').removeClass('status-failed status-valid status-valid status-invalid').addClass('status-deactivated');
					$form.find('.state-indicator').removeClass().addClass('state-indicator expired');
					$form.find('.license-state').html( response.license_state_message );
					$form.find('.license-info').html( response.license_info );
				}
			}
		});
	});
});
