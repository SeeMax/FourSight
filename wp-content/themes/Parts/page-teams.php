<?php /* Template Name: Teams */ get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
	<main class="team-page teamPage" role="main">
		<section class="hero-section parallax-section heroSection">
			<div class="parallax-image"
			<?php if (get_field('hero_image')) {
    ?>
				style='background-image: url("<?php the_field("hero_image"); ?>");'
				<?php

} ?>
				></div>
				<div class="content">
					<h1 class="hero-headline">
						<?php the_field("teams_hero_heading"); ?>
					</h1>
					<p>
						<?php the_field("teams_hero_summary"); ?>
					</p>
				</div>
			</section>
			<section class="callout-section">
				<div class="content">
					<?php if (have_rows('teams_call_outs')): ?>
						<?php while (have_rows('teams_call_outs')) : the_row(); ?>
							<div class="single-callout">
								<img src="<?php echo get_template_directory_uri(); ?>/img/teams/<?php the_sub_field('icon'); ?>-icon.svg" >
								<h3><?php the_sub_field('call_out_heading'); ?></h3>
								<p><?php the_sub_field('callout_item_summary'); ?></p>
							</div>
						<?php endwhile; ?>
					<?php endif; ?>
				</div>
			</section>
			<div class="showcaseTrigger"></div>
			<section class="showcase-section">
				<div class="content">
					<div class="showcase-tile showcase-one showcaseOne">
						<div class="showcase-tile-gradient showcasePin1"></div>
						<?php if (have_rows('showcase_scrolling_slides')): ?>
							<?php while (have_rows('showcase_scrolling_slides')) : the_row(); ?>
								<div class="showcase-tile-callout" id='showcase<?php echo $i; ?>' > 
									<div class="showcase-callout-content">
										<div>
											<h2 class="dotTrigger<?php echo $i; ?>"><?php the_sub_field('scrolling_slide_heading'); ?></h2>
										</div>
										<div>
											<p><?php the_sub_field('scrolling_slide_summary'); ?></p>
										</div>
									</div>
								</div>
								<!-- INCREMENT ID BY 1 -->
								<?php $i++;?>
							<?php endwhile; ?>
						<?php endif; ?>
						<div class="showcase-dot-frame showcasePin3">
							<div class="showcase-dot-section showcaseDots">
								<div class="showcase-dot showcase-dot1 showcaseDot1"></div>
								<div class="showcase-dot showcaseDot2"></div>
								<div class="showcase-dot showcaseDot3"></div>
							</div>
						</div>
					</div>
					<div class="showcase-tile showcase-two showcasePin2">
						<div class="showcase-tile-gray"></div>
						<div class="showcase-image-container">
							<?php if( have_rows('showcase_scrolling_image') ): ?>
								<?php while ( have_rows('showcase_scrolling_image') ) : the_row(); ?>
									<!-- showcase_scrolling_image -->
									<?php if ( get_sub_field( 'showcase_image') ) { ?>
									<img class="showcaseImage<?php echo $j; ?>" src="<?php the_sub_field( 'showcase_image' ); ?>"/>
									<?php } ?>
									<?php $j++;?>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
					</div>
				</section>


				<section class="mobile-showcase-section">
					<div class="content">

						<div class="mobile-showcase-one teamsCarouselOne">
							<?php if (have_rows('showcase_scrolling_slides')): ?>
								<?php while (have_rows('showcase_scrolling_slides')) : the_row(); ?>
									<div class="mobile-showcase-tile">
										<h2><?php the_sub_field('scrolling_slide_heading'); ?></h2>
										<p><?php the_sub_field('scrolling_slide_summary'); ?></p>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
						<div class="teams-dots teamsDots"></div>
						<div class="mobile-showcase-two teamsCarouselTwo">
							<?php if (have_rows('showcase_scrolling_slides')): ?>								
								<?php while ( have_rows('showcase_scrolling_image') ) : the_row(); ?>
									<div class="showcase-image-container">
										<?php if ( get_sub_field( 'showcase_image') ) { ?>
										<img src="<?php the_sub_field( 'showcase_image' ); ?>"/>
										<?php } ?>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
					
					</div>
				</section>


				<?php get_template_part('partials/_team-testimonials'); ?>
			</main>
			<!-- ABOUT PAGE POP UP PARTIAL -->
			<?php get_template_part('partials/_about-page'); ?>
			<!-- FOOTER TEMPLATE OPENS HERE -->
			<footer class="footer" role="contentinfo">
				<div class="content">
					<!-- FOOTER CTA -->
					<div class="footer-hero">
						<?php get_template_part('partials/_footerCTA'); ?>
					</div>
					<!-- END FOOTER CTA -->
				<?php endwhile; ?>
				<?php get_footer(); ?>
