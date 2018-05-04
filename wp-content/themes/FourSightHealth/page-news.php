<?php /* Template Name: In The News */ get_header(); ?>
	<main class="news-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="news-hero articlesTrigger">
			<div class="content">						
				<h1><?php the_field('in_the_news_title'); ?></h1>
			</div>
		</section>
		<section class="articles-section">
			<div class="content">		
				<div class="articles-group">
					<?php echo do_shortcode('[ajax_load_more id="ajax-loader-01" container_type="div" css_classes="blog-grid" post_type="news" scroll_distance="0" posts_per_page="9" transition_container="false" images_loaded="true" button_label="Load More"]'); ?>
				</div>
			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>