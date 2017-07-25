<?php /* Template Name: Contact */ get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
	<main class="playbook-page" role="main">


		<section class="theContent">
			<div class="content">




	<?php the_content(); ?>
</section>

</div>

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
