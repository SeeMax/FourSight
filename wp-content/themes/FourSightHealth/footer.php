			<footer class="footer footerTrigger" role="contentinfo">
				<div class="footer-social">
					<div class="content">
						<div class="social-left">
							<h2>Find Us On</h2>
							<div class="social-icons">
								<?php if( get_field('tw_link', 'option') ): ?>
									<i class="fa fa-twitter">
										<a href="<?php the_field('tw_link', 'option'); ?>" target="_blank"></a>
									</i>
								<?php endif; ?>
								<?php if( get_field('fb_link', 'option') ): ?>
									<i class="fa fa-linkedin">
										<a href="<?php the_field('fb_link', 'option'); ?>" target="_blank"></a>
									</i>
								<?php endif; ?>
								<?php if( get_field('ig_link', 'option') ): ?>
									<i class="fa fa-instagram">
										<a href="<?php the_field('ig_link', 'option'); ?>" target="_blank"></a>
									</i>
								<?php endif; ?>
								<?php if( get_field('yt_link', 'option') ): ?>
									<i class="fa fa-youtube">
										<a href="<?php the_field('yt_link', 'option'); ?>" target="_blank"></a>
									</i>
								<?php endif; ?>
							</div>
						</div>
						<div class="social-right">
							<h4><?php the_field('subscription_headline', 'option'); ?></h4>
							<?php the_field('subscription_body', 'option'); ?>
							<div id="mc_embed_signup">
								<form action="https://4sighthealth.us10.list-manage.com/subscribe/post?u=8a4bf5d1617f86a90e5a909f0&amp;id=62073b449e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							    <div id="mc_embed_signup">
								<form action="https://4sighthealth.us10.list-manage.com/subscribe/post?u=8a4bf5d1617f86a90e5a909f0&amp;id=62073b449e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							    <div id="mc_embed_signup_scroll">
										<div class="mc-field-group">
											<input type="email" onfocus="if(this.value == 'Email Address') { this.value = ''; }" value="Email Address" value="" name="EMAIL" class="required email" id="mce-EMAIL">
										</div>
										<div id="mce-responses" class="clear">
											<div class="response" id="mce-error-response" style="display:none"></div>
											<div class="response" id="mce-success-response" style="display:none"></div>
										</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
									  <div style="position: absolute; left: -5000px;" aria-hidden="true">
									  	<input type="text" name="b_8a4bf5d1617f86a90e5a909f0_62073b449e" tabindex="-1" value="">
									  </div>
									  <div class="">
									  	<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
									  </div>
									</div>
								</form>
							</div>
							<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
						</div>
					</div>
				</div>

				<div class="footer-links">
					<div class="footer-links-top">
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660.0009766 80.0660934" preserveAspectRatio="none">
							<polygon class="footer-top-polygon" points="1660.0009766,80.0660934 0,80.0660934 0,0 1182.7850342,68.9989929 1660.0009766,0 "/>
						</svg>
					</div>
					<div class="content">
						<div class="contact-links">
							<?php bloginfo('name'); ?><span class="seperator"> | </span>
							<?php the_field('address', 'option'); ?><span class="seperator"> | </span>
							<a href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
							<br>
							&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>
						</div>
						<div class="admin-links">
							<a href="/terms-of-service">Terms of Service</a><span class="seperator"> | </span>
							<a href="/privacy-policy">Privacy Policy</a>
						</div>
					</div>
				</div>
				<div class="legal-required-copy">
					<div class="content">
						All securities offered through Bradley Woods & Co. Ltd., member <a href="http://www.finra.org/" target="_blank">FINRA</a> and <a href="https://www.sipc.org/" target="_blank">SIPC</a>. 4sight Health and Bradley Woods & Co. Ltd. are independent entities. Officers of 4sight Health are licensed registered representatives of Bradley Woods & Co. Ltd.
					</div>
				</div>
			</footer>
			<?php wp_footer(); ?>
		</div><!-- WRAPPER -->
	</body>
</html>
