<?php /* Template Name: Articles */ get_header(); ?>
	<main class="articles-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="articles-section articlesTrigger">
			<div class="content">	
				<h2><?php the_title(); ?></h2>
				<!-- <div class="hr-container"><hr></div> -->
				<div class="articles-group">
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

<!-- TEMPLATE FILE OF AJAX LOAD MORE -->
<!-- <div class="single-article-preview">
<div class="article-line"></div>
	<h4>
		<?php the_title();?>
	</h4>
	<div class="article-author">
		By <?php the_author();?> on <?php the_date(); ?>
	</div>
	<div class="article-preview-image">
		<?php if ( get_the_post_thumbnail($post_id) != '' ) {
			echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
				the_post_thumbnail('large', ['class' => 'post-image', 'title' => 'Feature image']);
			echo '</a>';
		} else {
			echo '<img src="';
			echo catch_that_image();
			echo '" alt="" />';
		}	;?>
	</div>
	<div class="article-preview-content">
		<div class="article-excerpt">
			<?php the_excerpt();?>
		</div>
		<div class="button">
			<a href="<?php the_permalink();?>"></a>
			Read More	
		</div>
	</div>
	
</div> -->