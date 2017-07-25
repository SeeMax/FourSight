
	<!-- FOOTER TEMPLATE OPENS HERE -->
	<footer class="footer" role="contentinfo">
	<div class="content">
		<!-- FOOTER CTA -->
		<div class="footer-hero">
			<?php get_template_part('partials/_footerCTA'); ?>
		</div>
		<!-- END FOOTER CTA -->
			<div class="footer-links">
				<div class="footer-logo">
					<img src="<?php echo get_template_directory_uri(); ?>/img/footer/footer-logo.svg" >
				</div>
				<div>
					<?php the_field('address_1', 'option'); ?>
					<br>
					<?php the_field('address_2', 'option'); ?>
					<br>
					<!-- <a href="<?php // the_field('phone', 'option');?>">
						<?php // the_field('phone', 'option');?>
					</a>
					<br> -->
					U.S. Patent # 9,661,890
				</div>
				<!-- <div>
					<a href="mailto:<?php the_field('email', 'option'); ?>">
						<?php the_field('email', 'option'); ?>
					</a>
				</div> -->
			<div class="copyright">
					© 2017 HelmetFit All rights reserved
				</div>
				<div>
					<a href="<?php echo esc_url(home_url('/disclaimer')); ?>">Disclaimer</a>
					 <br><!--
					 <a href="<?php // echo esc_url(home_url('/liability'));?>">Liability</a>
					<br> -->
					<a href="<?php echo esc_url(home_url('/warranty')); ?>">Warranty</a>
					<br>
				</div>
				<div class="social-icons">
					<?php if (get_field('facebook_page')): ?><a href="<?php the_field('facebook_page', 'option'); ?>">
						<i class="fa fa-facebook"></i>
					</a><?php endif; ?>
					<?php if (get_field('twitter_page')): ?><a href="<?php the_field('twitter_page', 'option'); ?>">
						<i class="fa fa-twitter"></i>
					</a><?php endif; ?>
					<?php if (get_field('instagram_page')): ?><a href="<?php the_field('instagram_page', 'option'); ?>">
						<i class="fa fa-instagram"></i><?php endif; ?>
					</a>
				</div>
			</div>
		</div>
	</footer>
<?php wp_footer(); ?>

<script>
	// conditionizr.com // configure environment tests
	conditionizr.config( {
		assets: '<?php echo get_template_directory_uri(); ?>',
		tests: {}
	} );
</script>
</body>
</html>
