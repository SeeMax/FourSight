<section class="testimonial-carousel">	
	<div class="content">
		
		<div class="carosuel-frame">
			<div class="testimonial-container testimonialCarousel">
				<?php $args = array( 'post_type' => 'testimonials', 'orderby'=>'title', 'order'=>'random', 'posts_per_page' => 3 );
				$loop = new WP_Query( $args );
				while ( $loop->have_posts() ) : $loop->the_post(); ?>

					<?php if ( has_term($term = 'Teams', $taxonomy = 'testimonial-type' ) ): ?>
						<div class="single-testimonial">
							<div class="single-testimonial-content">
								<div class="testimonial-image">
									<?php $image = get_field('image'); if( !empty($image) ): ?>
										<img class="logo-img" src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
									<?php endif;?>
								</div>
								<div class="testimonial-content">
									<div class="testimonial-quote">
										<?php if (get_field('testimonial')) : ?>
											<?php the_field('testimonial'); ?>
										<?php endif; ?>
									</div>
									<div class="testimonial-credentials">
										<span class="testimonial-title">
											<?php if (get_field('title')) : ?>
												<?php the_field('title'); ?>
											<?php endif; ?>
										</span>
										|
										<span class="testimonial-company">
											<?php if (get_field('company')) : ?>
												<?php the_field('company'); ?>
											<?php endif; ?>
										</span>
									</div>
								</div>	
							</div>
						</div>
					<?php endif; ?>
					<? wp_reset_postdata(); ?>
				<?php endwhile;?>
			</div>
			<div class="testimonial-dots testimonialDots">
		</div>
		
	</div>
</section>

