<?php /* Template Name: Home */ get_header(); ?>
	<?php while (have_posts()) : the_post(); ?>
		<main class="home-page" role="main">
		<!-- The ACFs -->
		<section class="hero-section">
		</section>
		<?php get_template_part('partials/_home-featured-news'); ?>
		</main>
		<?php get_template_part('partials/_about-page'); ?>
	<?php endwhile; ?>
<?php get_footer(); ?>
