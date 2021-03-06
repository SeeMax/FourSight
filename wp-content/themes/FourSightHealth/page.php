<?php get_header(); ?>

	<main class="standard-page" role="main">
		<!-- section -->
		<section class="<?php the_title(); ?>-page">
			<div class="content">

				<h1><?php the_title(); ?></h1>
				<div class="hr-container"><hr></div>

			<?php if (have_posts()): while (have_posts()) : the_post(); ?>

				<!-- article -->
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<?php the_content(); ?>

					<?php comments_template( '', true ); // Remove if you don't want comments ?>

					<br class="clear">

					<?php edit_post_link(); ?>

				</article>
				<!-- /article -->

			<?php endwhile; ?>

			<?php else: ?>

				<!-- article -->
				<article>

					<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

				</article>
				<!-- /article -->

			<?php endif; ?>
			</div>
		</section>
		<!-- /section -->
	</main>



<?php get_footer(); ?>
