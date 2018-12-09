			<footer class="footer footerTrigger" role="contentinfo">
				<div class="content">

					<div class="footer-column footer-logo c-width-25">
						<img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo" class="logo-img">
					</div>

					<div class="footer-column footer-contact c-width-25">
						<?php the_field('address', 'option'); ?>
						<a href="mailto:<?php the_field('email', 'option'); ?>">
							<?php the_field('email', 'option'); ?>
						</a>
					</div>

					<div class="footer-column footer-links c-width-25">
						<a href="/terms-of-service">Terms of Service</a>
						<a href="/privacy-policy">Privacy Policy</a>
					</div>

					<div class="footer-column footer-social c-width-25">
						<?php if( get_field('tw_link', 'option') ): ?>
							<i class="fa fa-twitter">
								<a class="c-block-fill" href="<?php the_field('tw_link', 'option'); ?>" target="_blank"></a>
							</i>
						<?php endif; ?>
						<?php if( get_field('linkedin_link', 'option') ): ?>
							<i class="fa fa-linkedin">
								<a class="c-block-fill" href="<?php the_field('linkedin_link', 'option'); ?>" target="_blank"></a>
							</i>
						<?php endif; ?>
						<?php if( get_field('fb_link', 'option') ): ?>
							<i class="fa fa-facebook">
								<a class="c-block-fill" href="<?php the_field('fb_link', 'option'); ?>" target="_blank"></a>
							</i>
						<?php endif; ?>
					</div>

					<div class="copyright-column">
						&copy; <?php echo date('Y'); ?> Copyright <?php bloginfo('name'); ?>
					</div>
			</footer>
			<div class="sub-footer">
				All securities offered through Bradley Woods & Co. Ltd., member <a href="http://www.finra.org/" target="_blank">FINRA</a> and <a href="https://www.sipc.org/" target="_blank">SIPC</a>. 4sight Health and Bradley Woods & Co. Ltd. are independent entities. Officers of 4sight Health are licensed registered representatives of Bradley Woods & Co. Ltd.
			</div>
			<?php wp_footer(); ?>
		</div><!-- WRAPPER -->
	</body>
</html>
