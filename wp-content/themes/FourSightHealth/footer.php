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
									<i class="fa fa-facebook">
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
							<!-- Begin MailChimp Signup Form -->
							<div id="mc_embed_signup">
								<form action="//seemaxwork.us6.list-manage.com/subscribe/post?u=9a03b165093c486f193475db0&amp;id=170d254fe5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
								    <div id="mc_embed_signup_scroll">
									
								<div class="mc-field-group">
									<input type="email" onfocus="if(this.value == 'Email Address') { this.value = ''; }" value="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
								</div>
									<div id="mce-responses" class="clear">
										<div class="response" id="mce-error-response" style="display:none"></div>
										<div class="response" id="mce-success-response" style="display:none"></div>
									</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								    <div style="position: absolute; left: -5000px;" aria-hidden="true">
								    	<input type="text" name="b_9a03b165093c486f193475db0_170d254fe5" tabindex="-1" value="">
								    </div>
								   		<div class="">
								    		<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
								    	</div>
								    </div>
								</form>
							</div>
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
							<a href="tel:<?php the_field('phone', 'option'); ?>"><?php the_field('phone', 'option'); ?><span class="seperator"> | </span></a>
							<a href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
							<br>
							&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>
						</div>
						<div class="admin-links">
							<a href="">Terms of Service</a><span class="seperator"> | </span>
							<a href="">Privacy Policy</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
		<?php wp_footer(); ?>

		<script>
		(function(f,i,r,e,s,h,l){i['GoogleAnalyticsObject']=s;f[s]=f[s]||function(){
		(f[s].q=f[s].q||[]).push(arguments)},f[s].l=1*new Date();h=i.createElement(r),
		l=i.getElementsByTagName(r)[0];h.async=1;h.src=e;l.parentNode.insertBefore(h,l)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		ga('create', 'UA-XXXXXXXX-XX', 'yourdomain.com');
		ga('send', 'pageview');
		</script>

	</body>
</html>
