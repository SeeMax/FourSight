<?php /* Template Name: Pricing */ get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
	<main class="pricing-page pricingPage" role="main">
		<section class="hero-section heroSection">
			<div class="content">
				<h1><?php the_field('hero_title'); ?></h1>
			</div>
		</section>
		<section class="pricing-tiles-section includedTrigger">
			<div class="content">
				<?php if (have_rows('pricing_options')) : ?>
					<?php while (have_rows('pricing_options')) : the_row(); ?>
						<div class="single-pricing-tile pricingTile">
							<div class="school-type"><?php the_sub_field('pricing_title'); ?></div>
							<div class="price">
								<div class="sup">$</div>
								<?php the_sub_field('price'); ?>
							</div>
							<div class="per-player">per player</div>
							<div class="add-charge"><?php the_sub_field('description'); ?></div>
							<?php if (get_sub_field('button_link_or_form_popup') == "form"): ?>
								<div class="button">
									<?php echo do_shortcode('[caldera_form_modal id="'.get_sub_field('form_id').'" width="1000"]' .get_sub_field('button_text'). '[/caldera_form_modal]'); ?>
								</div>
							<?php else: ?>
								<div class="button">
									<a href="<?php the_sub_field('button_action'); ?>">
										<?php the_sub_field('button_text'); ?>
									</a>
								</div>
							<?php endif; ?>
						</div>
					<?php endwhile; ?>
				<?php endif; ?>
			</div>
		</section>
		<section class="whats-included-section">
			<div class="content">
				<h2>What's Included?</h2>
				<div class="whats-included-tile">
					<img src="<?php echo get_template_directory_uri(); ?>/img/green-rendering.png" >
				</div>
				<div class="whats-included-tile">
					<?php if (have_rows('whats_included')) : ?>
						<?php while (have_rows('whats_included')) : the_row(); ?>
							<div class="whats-included-item">
								<i class="fa fa-check" aria-hidden="true"></i>
								<?php the_sub_field('included_list_item'); ?>
							</div>
						<?php endwhile; ?>
					<?php endif; ?>
					<div class="whats-included-item whats-included-foot">
						<i class="fa fa-check" aria-hidden="true"></i>
						<?php if (get_field('footnote')) : ?>
							<?php the_field('footnote'); ?>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</section>
		<section class="pricing-news-section">
			<div class="content">
				<?php if (have_rows('link_tiles_left')) : ?>
					<?php while (have_rows('link_tiles_left')) : the_row(); ?>
						<div class="featured-story"
						<?php $image = get_sub_field('tile_image'); 
						if( !empty($image) ): ?>
							style='background-image: url("<?php echo $image; ?>");'
						<?php endif;?>
						>
						<div class="featured-story-gradient"></div>
						<div class="featured-story-content">
							<h2><?php the_sub_field("tile_headline"); ?></h2>
							<p><?php the_sub_field("tile_copy"); ?></p>
							<?php if (get_sub_field('button_link_or_form_popup') == "form"): ?>
								<div class="button">
									<?php echo do_shortcode('[caldera_form_modal id="'.get_sub_field('form_id').'" width="1000"]' .get_sub_field('tile_button_text'). '[/caldera_form_modal]'); ?>
									<?php the_sub_field("tile_button_text"); ?>
								</div>
							<?php else: ?>
								<div class="button">
									<a href="<?php the_sub_field('tile_button_link'); ?>">
										<?php the_sub_field('tile_button_text'); ?>
									</a>
								</div>
							<?php endif; ?>
						</div>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
			<?php if (have_rows('link_tiles_right')) : ?>
				<?php while (have_rows('link_tiles_right')) : the_row(); ?>
					<div class="featured-story"
						<?php $image = get_sub_field('tile_image'); 
						if( !empty($image) ): ?>
							style='background-image: url("<?php echo $image; ?>");'
						<?php endif;?>
					>
						<div class="featured-story-gradient"></div>
					<div class="featured-story-content">
						<h2><?php the_sub_field("tile_headline"); ?></h2>
						<p><?php the_sub_field("tile_copy"); ?></p>
						<?php if (get_sub_field('button_link_or_form_popup') == "form"): ?>
							<div class="button">
								<?php echo do_shortcode('[caldera_form_modal id="'.get_sub_field('form_id').'" width="1000"]' .get_sub_field('tile_button_text'). '[/caldera_form_modal]'); ?>
								<?php the_sub_field("tile_button_text"); ?>
							</div>
						<?php else: ?>
							<div class="button">
								<a href="<?php the_sub_field('tile_button_link'); ?>">
									<?php the_sub_field('tile_button_text'); ?>
								</a>
								<?php the_sub_field("tile_button_text"); ?>
							</div>
						<?php endif; ?>
					</div>
				</div>
			<?php endwhile; ?>
		<?php endif; ?>
	</div>
</section>
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
