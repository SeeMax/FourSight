<section class="news-section">
	<div class="content">

		<h2><?php the_field('home_news_heading'); ?></h2>
		<p><?php the_field('home_news_summary'); ?></p>
		<div class="news-row">
			<?php if (have_rows('3_homepage_ctas')): ?>
			  <?php while (have_rows('3_homepage_ctas')) : the_row(); ?>
		       <div class="news-tile">
		        <?php $image = get_sub_field('image');
                            if (!empty($image)): ?>
							<img src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
						<?php endif;?>
						<div class="news-tile-gradient"></div>
						<div class="news-tile-content">
							<h3><?php the_sub_field('title'); ?></h3>
						</div>
						<?php if (get_sub_field('external_internal') == 'internal'): ?>
							<a href="<?php the_sub_field('internal_page_link'); ?>" target="blank"></a>
						<?php endif; ?>
						<?php if (get_sub_field('external_internal') == 'external'): ?>
							<a href="<?php the_sub_field('external_page_link'); ?>" target="_blank"></a>
						<?php endif; ?>
					</div>
			  <?php endwhile; ?>
			<?php endif; ?>
		</div>
	</div>
</section>
