<?php /* Template Name: Hire Me */ get_header(); ?>
	<main class="hire-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
			
		<section class="video-section">
			<div class="video-frame">
			  <iframe src="https://www.youtube.com/embed/<?php the_field('video_link'); ?>?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=<?php the_field('hero_video_link'); ?>" frameborder="0" allowfullscreen></iframe>
			</div>
		</section>

		<section class="hire-cta-section hireTrigger">	
			<div class="hire-cta-top hireTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<a href="<?php the_field('link'); ?>">
					<h2><?php the_field('title'); ?></h2>
				</a>
				<div class="hr-container"><hr></div>
				<p><?php the_field('content'); ?></p>
				<div class="button">
					<a href="<?php the_field('link'); ?>"></a>
					<?php the_field('button_text'); ?>
				</div>
			</div>
		</section>
		
		
		
		

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





