<?php /* Template Name: Articles */ get_header(); ?>
	<main class="articles-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="articles-hero articlesTrigger">
			<div class="content">						
				<h1><?php the_title(); ?></h1>
				<?php 
					$term1 = get_field('button_one_dest');
					$term2 = get_field('button_two_dest');
					$term3 = get_field('button_three_dest');
					$term1Link = preg_replace('/\s+/', '-', $term1->name);
					$term2Link = preg_replace('/\s+/', '-', $term2->name);
					$term3Link = preg_replace('/\s+/', '-', $term3->name);
				;?>
				<div class="article-button-group">
					<div class="article-button button">
						<a href="../category/<?php echo strtolower($term1Link); ?>"></a>
						<?php echo $term1->name; ?>
					</div>
					<div class="article-button button">
						<a href="../category/<?php echo strtolower($term2Link); ?>"></a>
						<?php echo $term2->name; ?>
					</div>
					<div class="article-button button">
						<a href="../category/<?php echo strtolower($term3Link); ?>"></a>
						<?php echo $term3->name; ?>
					</div>
				</div>
			</div>
		</section>
		<section class="articles-section">
			<div class="content">		
				<div class="articles-group">
					<!-- <h3>Recent News</h3> -->
					<?php echo do_shortcode('[ajax_load_more id="ajax-loader-01" container_type="div" css_classes="blog-grid" post_type="post" scroll_distance="0" posts_per_page="9" transition_container="false" images_loaded="true" button_label="Load More"]'); ?>
				</div>
				<div class="articles-sidebar articlesSidebar">
					<?php get_sidebar(); ?>
				</div>
			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>