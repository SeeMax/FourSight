<?php /* Template Name: Contact */ get_header(); ?>
	<main class="contact-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		
		<section class="contact-link-section contactTrigger">	
			<div class="contact-top contactTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<h2><?php the_title(); ?></h2>
				<div class="hr-container"><hr></div>
				<?php echo do_shortcode('[contact-form-7 id="2080" title="Main Contact Form"]'); ?>
			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





