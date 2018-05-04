
	


<?php get_header(); ?>

<main class="single-news-article-page" role="main">
	<?php if (have_posts()): while (have_posts()) : the_post(); ?>
		<section class="articles-section articlesTrigger">
			<div id="post-<?php the_ID(); ?>" <?php post_class('content'); ?>>	
				<div class="article-line"></div>

				<div class="single-article-header">	
					<?php if( get_field('article_date') ): ?>
						<div class="article-date">
							<?php the_field('article_date'); ?>
						</div>
					<?php endif; ?>
					<h1><?php the_title(); ?></h1>
					<?php if ( get_field('article_authors')) :?>
						<div class="article-author">
							By <?php the_field('article_authors');?> 
							<?php if( get_field('article_publication') ): ?>
								in <a href="<?php the_field('article_link'); ?>" target="_blank"><?php the_field('article_publication');?></a>
							<?php endif; ?>
						</div>
					<?php endif; ?>
				</div>

				
				<div class="article-line"></div>
				<div class="single-article-content">

					<?php if ( has_post_thumbnail()) : // Check if Thumbnail exists ?>
						<?php $wrapCheck = get_field('featured_image_text_wrap');?>
						<?php if( $wrapCheck && in_array('wrap', $wrapCheck) ): ?>
							<p class="floated-hero">
								<?php the_post_thumbnail(); ?>
							</p>
						<?php else:?>
							<?php the_post_thumbnail(); // Fullsize image for the single post ?>
						<?php endif; ?>
					<?php endif; ?>
						
					
					<?php the_content();?>
					
						
					
				</div>
				<div class="article-line"></div>
			
			</div>
		<?php endwhile; ?>
		<?php endif; ?>
		</section>
	</main>

<?php get_footer(); ?>