<?php /* Template Name: Home */ get_header(); ?>
	<?php while (have_posts()) : the_post(); ?>
		<main class="home-page" role="main">
		<!-- The ACFs -->

		<section class="hero-section">
			<!-- <img class="finger-print2 fingerPrint" src="<?php echo get_template_directory_uri(); ?>/img/home/fingerprint-2.svg" > -->
			<!-- <img class="finger-print fingerPrint" src="<?php echo get_template_directory_uri(); ?>/img/home/fingerprint-3.svg" > -->
			<?php get_template_part('partials/_fingerprint'); ?>
			<div class="content">
				<img class="hero-headline heroHeadline" src="<?php echo get_template_directory_uri(); ?>/img/home/hero-headline.svg" >
				<div class="hero-helmet heroHelmet">
					<img src="<?php echo get_template_directory_uri(); ?>/img/home/hero-550x603.png" >
				</div>
				<div class="button-frame">
					<div class="button heroButton">
						<?php the_field('home_button_text'); ?>
					</div>
				</div>
<?php if (get_field('display_app_icon')): ?>
			<a href="<?php the_field('app_store_url'); ?>"><img class="apple-app appleApp" src="<?php echo get_template_directory_uri(); ?>/img/home/appleapp.png" ></a><?php endif; ?>
			</div>
		</section>
		<section class="intro-section heroTrigger">
			<div class="content">
				<div class="vid-background vidBackground">
					<div class="vid-circle vidCircle"></div>
				</div>
				<h1 id="introTop" ><?php the_field('video_heading'); ?></h1>
				<p><?php the_field('vhome_ideo_summary'); ?></p>
				<?php get_template_part('partials/_home-intro-video'); ?>
			</div>
		</section>
		<section class="parallax-section parallaxTrigger">

			<div class="parallax-image"
				<?php if (get_field('parallax_image')) {
    ?>
					style='background-image: url("<?php the_field("parallax_image"); ?>");'
				<?php

} ?>
			></div>
			<div class="content">
				<h2><?php the_field('parallax_heading'); ?></h2>
				<a href="<?php the_field('parallax_button_link'); ?>" class="button">
					<?php the_field('parallax_button_text'); ?>
				</a>
			</div>
		</section>
	<?php get_template_part('partials/_home-featured-news'); ?>
	</main>
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
