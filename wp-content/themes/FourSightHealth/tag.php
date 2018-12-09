<?php get_header(); ?>
	<main class="archive-page" role="main">
		<section class="archive-section archiveTrigger">
			<div class="content">	
				<h2><?php _e( 'Posts Tagged: ', 'html5blank' ); echo single_tag_title('', false); ?></h2>

				<!-- <div class="hr-container"><hr></div> -->
				<div class="archive-group">
					<?php while ( have_posts() ) : the_post(); ?>			
						<?php get_template_part('loop'); ?>
					<?php endwhile; ?><!-- END LOOP -->
				</div>
				<div class="archive-sidebar archiveSidebar">
					<?php get_sidebar(); ?>
				</div>
			</div>
		</section>
	</main>
<?php get_footer(); ?>