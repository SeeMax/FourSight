<?php get_header(); ?>

	<main class="search-results-page" role="main">
		<section class="articles-hero">
			<div class="content">						
				<h1>
					<?php echo sprintf( __( 'Searching for ', 'html5blank' ), $wp_query->found_posts )?>
					<br>
					<?php echo get_search_query(); ?>
				</h1>
			</div>
		</section>
		<section class="articles-section">
			<div class="content">		
				<div class="articles-group">
					<h3><?php echo sprintf( __( '%s Total Results', 'html5blank' ), $wp_query->found_posts ); ?></h3>
					<?php while ( have_posts() ) : the_post(); ?>	
					<div class="single-article-preview">
					<div class="article-line"></div>
						<h4>
							<?php the_title();?>
						</h4>
						<div class="article-author">
							<?php the_date(); ?>
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
					</div>
					<?php endwhile; ?><!-- END LOOP -->
				</div>
			</div>
		</section>
	</main>
<?php get_footer(); ?>