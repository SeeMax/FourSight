<?php /* Template Name: Playbook */ get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
	<main class="playbook-page" role="main">
		<section class="hero-section heroSection">
			<div class="content">
				<div class="hero-left"
					<?php if (get_field('background_image')): ?>

            <?php $image = get_field('background_image');
            if (!empty($image)): ?>
              style='background-image: url("<?php echo $image; ?>");'
            <?php endif;?>
            >
					<?php else: ?>
						<?php $image = get_field('background_image');
            if (!empty($image)): ?>
              style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/playbook-hero.png");'
            <?php endif;?>
            >
					<?php endif; ?>
					<div class="hero-left-gradient"></div>
					<div class="hero-left-content">
						<?php if (get_field('custom_title')): ?>
							<h1><?php the_field('custom_title'); ?></h1>
						<?php else: ?>
							<h1><?php the_title() ?></h1>
						<?php endif; ?>
						<?php if (get_field('custom_subtitle')): ?>
							<p>
								<?php the_field('custom_subtitle'); ?>
							</p>
						<?php endif; ?>
						<!-- <h1>Helmet Safety</h1>
						<p>This is a very short description</p> -->
					</div>
				</div>
				<div class="hero-right">
					<div class="hero-right-content">
						<div class="section-title">
							In The News
						</div>
						<div class="playbook-news-container playbookCarousel">
							<?php if (have_rows('article_item')) : ?>
								<?php while (have_rows('article_item')) : the_row(); ?>
									<div class="single-playbook-news">
										<?php if (get_sub_field('link_or_file') == "link"): ?>
										<a href="<?php the_sub_field('article_link'); ?>"  alt="<?php the_sub_field('article_title'); ?>" target="_blank" >
											<?php the_sub_field('article_title'); ?>
										</a>
										<?php else: ?>
											<a href="<?php the_sub_field('file'); ?>"  alt="<?php the_sub_field('article_title'); ?>" target="_blank" >
												<?php the_sub_field('article_title'); ?>
											</a>
										<?php endif; ?>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
						<div class="playbook-dots playbookDots">
						</div>
					</div>
				</div>
			</section>
			<section class="featured-section featuredSection">
				<div class="content">
					<!-- <div class="section-title">
					Section Title
				</div> -->

				<!--  LOCATING FEATURED  STORY -->
				<?php
        $args = array(
                    'posts_per_page' => 1,
                    'post__in'  => get_option('sticky_posts'),

                    'orderby'    => 'date',
                    'sort' => 'DESC'


                );
        $the_query = new WP_Query($args);
        if ($the_query->have_posts()):
            while ($the_query->have_posts()):
                $the_query->the_post(); ?>
				  <div class="featured-story"
            <?php $image = get_field('post_image');
            if (!empty($image)): ?>
              style='background-image: url("<?php echo $image; ?>");'
            <?php endif;?>
            >
						<a href="<?php the_permalink(); ?>"></a>
						<div class="featured-story-gradient"></div>
						<div class="featured-story-content">
							<h2><?php the_title(); ?></h2>
						</div>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
			<?php wp_reset_postdata(); // Restore original Post?>
			<div class="spread-word"
      style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/spread-word-back.png" ); ?>");'
      >
        <div class="spread-word-content">
          <h2>Get Smart. Get Fit.</h2>
          <p>
            Let your coach or school administrators know you want HelmetFit!
          </p>


				  <a href="mailto:?to=&subject=<?php the_field('email_subject') ?>&body=<?php the_field('email_body') ?>" class="button">
            Spread The Word
          </a>






				</div>
			</div>
		</div>
	</section>
	<section class="news-grid-section newsGridSection">
		<div class="content">
			<!--	<div class="section-title">
			Section Title
		</div>
	-->
	<!-- check for stickies, otherwise skip first post -->
	<?php
    $sticky = get_option('sticky_posts');
    if ($sticky) {
        $article_args = array(
                    'ignore_sticky_posts' => 1,
     'post__not_in' => $sticky,
                'posts_per_page' => -1,
                'orderby' => 'date',
                'sort' => 'DESC'
        );
    } else {
        $article_args = array(
                'offset' => 1,
                'posts_per_page' => 1000,
                'orderby'    => 'date',
                'sort' => 'DESC'
        );
    }

    $the_query = new WP_Query($article_args);
    if ($the_query->have_posts()):
        while ($the_query->have_posts()):
            $the_query->the_post(); ?>
			<div class="news-grid-single">
				<a href="<?php the_permalink(); ?>"></a>
				<div class="image-wrap"
				<?php $image = get_field('post_image');
              if (!empty($image)): ?>
	        	style='background-image: url("<?php echo $image; ?>");'
	      	<?php endif;?>
	    	>
	   		</div>
			<div class="news-grid-content">
				<?php the_title(); ?>
			</div>
		</div>
	<?php endwhile; ?>
<?php endif; ?>
<?php wp_reset_postdata(); // Restore original Post?>
</div>
</section>
<?php get_template_part('partials/_playbook-testimonials'); ?>
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
