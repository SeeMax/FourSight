<?php get_header(); ?>
	<main class="archive-page" role="main">
		<section class="archive-hero articlesTrigger">
			<div class="content">						
				<h2><?php single_cat_title(); ?></h2>
				<?php if( has_category( $category = 'podcast') ): ?>
   				<div class="button">
						<a href='https://itunes.apple.com/us/podcast/4sighthealth-market-corner-conversations/id1302461771?mt=2' target="_blank"></a>
						View on iTunes
					</div>
				<?php endif; ?>
			</div>
		</section>
		<section class="archive-section archiveTrigger">
			<div class="content">	
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