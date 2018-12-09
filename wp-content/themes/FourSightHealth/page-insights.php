<?php /* Template Name: Insights */ get_header(); ?>
	<main class="insights-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="insight-category-buttons">
			<div class="content">
				category_highlights
				single_category_highlight
				<!-- <?php
					$term1 = get_field('button_one_dest');
					$term2 = get_field('button_two_dest');
					$term3 = get_field('button_three_dest');
					$term4 = get_field('button_four_dest');
					$term1Link = preg_replace('/\s+/', '-', $term1->name);
					$term2Link = preg_replace('/\s+/', '-', $term2->name);
					$term3Link = preg_replace('/\s+/', '-', $term3->name);
					$term4Link = preg_replace('/\s+/', '-', $term4->name);
				;?> -->
				<!-- <div class="article-button-group">
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
					<div class="article-button button">
						<a href="../category/<?php echo strtolower($term4Link); ?>"></a>
						<?php echo $term4->name; ?>
					</div>
				</div> -->

				<div class="article-button-group">
					<div class="article-button button">
						<a href="../category/commentaries"></a>
						Market Corner Commentaries
					</div>
					<div class="article-button button">
						<a href="../category/podcast-2"></a>
						Podcasts
					</div>
					<div class="article-button button">
						<a href="../store"></a>
						Market vs. Medicine
					</div>
				</div>
			</div>
		</section>
		<section class="articles-section">
			<div class="content">
				<div class="articles-group">
					<h3><?php the_field('insights_title'); ?></h3>
					<?php echo do_shortcode('[ajax_load_more id="ajax-loader-01" container_type="div" css_classes="blog-grid" post_type="post" scroll_distance="0" posts_per_page="9" transition_container="false" images_loaded="true" button_label="Load More"]'); ?>
				</div>
				<div class="articles-sidebar articlesSidebar">
					<div class="search-bar-box">
						<h3>Search Insights</h3>
						<form class="search" method="get" action="<?php echo home_url(); ?>" role="search">
							<input class="search-input" type="search" name="s" placeholder="<?php _e( 'Search Terms', 'html5blank' ); ?>">
							<button class="search-submit" type="submit" role="button"><?php _e( 'Search', 'html5blank' ); ?></button>
						</form>
					</div>
					<?php get_sidebar(); ?>
				</div>
			</div>
		</section>
	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>
