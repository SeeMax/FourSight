<?php get_header(); ?>

	<main class="single-article-page" role="main">
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
		<section class="articles-section articlesTrigger">
			<div id="post-<?php the_ID(); ?>" <?php post_class('content'); ?>>	
				<div class="article-line"></div>
				<div class="single-article-header">	
					<div class="article-date">
						<?php the_date(); ?>
					</div>
					<h1><?php the_title(); ?></h1>
					<div class="article-author">
						<?php _e( '', 'html5blank' ); the_category(' / '); // Separated by commas ?>
					</div>
				</div>
				<div class="article-line"></div>
				<?php if ( has_post_thumbnail()) : // Check if Thumbnail exists ?>
					<?php the_post_thumbnail(); // Fullsize image for the single post ?>
				<?php endif; ?>
				<div class="single-article-content">
					<?php the_content();?>
				</div>
				<div class="comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></div>
				<div class="single-article-tags">
					<?php the_tags( __( 'Tags: ', 'html5blank' ), ' / ', '<br>'); // Separated by commas with a line break at the end ?>
				</div>	
				<!-- <div class="single-article-edit-link">
					<?php edit_post_link(); // Always handy to have Edit Post Links available ?>
				</div> -->
				<div class="single-article-comment">
					<?php comments_template(); ?>
				</div>
				<div class="article-line"></div>
			<?php endwhile; ?>
			<?php else: ?>
				<article>
					<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>
				</article>
		</div>
	<?php endif; ?>
	</section>
	</main>

<?php get_footer(); ?>