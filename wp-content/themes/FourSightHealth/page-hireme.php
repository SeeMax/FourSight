<?php /* Template Name: Hire Me */ get_header(); ?>
	<main class="hire-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
<!-- 			
		<section class="video-section">
			<div class="video-frame">
			  <iframe src="https://www.youtube.com/embed/<?php the_field('video_link'); ?>?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=<?php the_field('hero_video_link'); ?>" frameborder="0" allowfullscreen></iframe>
			</div>
		</section> -->

		<section class="hire-cta-section hireTrigger">	
			<div class="content">
				<h2><?php the_field('title'); ?></h2>
				<div class="hr-container"><hr></div>
				<p><?php the_field('content'); ?></p>
				<div class="button">
					<a href=mailto:"<?php the_field('link'); ?>?subject=<?php the_field('subject'); ?>"></a>
					<?php the_field('button_text'); ?>
				</div>
			</div>
		</section>

		<section class="engagement-section engagementTrigger">	
			<div class="engagement-top engagementTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<h2><?php the_field('engagements_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<p><?php the_field('engagements_copy'); ?></p>
				<div class="engagement-list">
					<?php if( have_rows('engagements_events') ): while( have_rows('engagements_events') ) : the_row();?>
						<div class="single-engagement">
							<div class="engagement-date">
								<?php the_sub_field('date'); ?>
							</div>
							<div class="engagement-location">
								<?php the_sub_field('location'); ?>
							</div>
						</div>
					<?php endwhile; endif;?>
				</div>
			</div>
		</section>
		

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





