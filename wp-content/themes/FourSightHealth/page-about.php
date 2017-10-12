<?php /* Template Name: About */ get_header(); ?>
	<main class="about-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="hero-section heroTrigger">	
			<div class="content">
				<?php get_template_part( 'partials/_clock-icon' ); ?>	
				<h1><?php the_field('hero_header'); ?></h1>
				<div class="hr-container"><hr></div>
				<div class="hero-wheel heroWheel">
					<?php $image = get_field('hero_wheel'); if( !empty($image) ): ?>
						<img class="advisor-image" src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
					<?php endif; ?>
				</div>
				<div class="hero-paragraphs">
					<?php the_field('hero_content'); ?>
				</div>
			</div>
		</section>

		<section class="what-we-do-section whatWeDoTrigger">	
			<div class="content">
				<h2><?php the_field('what_we_do_header'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('what_we_do_content'); ?>
				<div class="things-we-do-group">
					<?php if( have_rows('what_we_do_list') ): while( have_rows('what_we_do_list') ) : the_row();?>
					  <div class="single-thing-we-do">
					  	<!-- <div class="thing-icon">
					  		<?php the_sub_field('item_icon'); ?>
					  	</div> -->
					  	<div class="thing-words">
						  	<div class="thing-title">
						  		<span><?php the_sub_field('item_title'); ?></span>
						  	</div>
						  	<div class="thing-description">
									<?php the_sub_field('item_description'); ?>
								</div>
							</div>
						</div>
					<?php endwhile; endif;?>
				</div>
			</div>
		</section>

		<section class="clients-section clientTrigger">	
			<div class="client-top clientTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<h2><?php the_field('clients_header'); ?></h2>
				<div class="hr-container"><hr></div>
		
				<div class="client-carousel clientCarousel">
					<?php $args = array( 'post_type' => 'clients', 'posts_per_page' => -1 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					  <div class="single-client">
					  <a href="<?php the_field('link'); ?>" target="_blank">
						  <?php $image = get_field('logo'); if( !empty($image) ): ?>
								<img class="client-image" src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif; ?>
							<div class="hr-container"><hr></div>
							<div class="client-title"> 
								<?php the_title(); ?>
							</div>
							<div class="client-description"> 
								<?php the_field('description'); ?>
							</div>
							</a>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
				<div class="client-dots clientDots"></div>
			
			</div>
		</section>

		<section class="affiliation-section affiliationTrigger">	
			<div class="content">
				<h2><?php the_field('professional_affiliations_header'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('professional_affiliations_content'); ?>

				<div class="affil-items-container">
					<?php $args = array( 'post_type' => 'affiliations', 'posts_per_page' => -1 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					  <div class="single-affil-item">
					  	<div class="affil-logo-container">
								<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
								  <circle class="afill-circle-white afillCircleWhite" cx="90" cy="90" r="88"/>
								  <circle class="afill-circle-teal afillCircleTeal" cx="90" cy="90" r="88"/>
								</svg>
					  		<?php $image = get_field('logo'); if( !empty($image) ): ?>
									<img class="affil-logo affilLogo" src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
								<?php endif; ?>
							</div>
							<div class="hr-container"><hr></div>
							<div class="affil-title">
								<?php the_title(); ?>
							</div>
							<div class="affil-position">
								<?php the_field('position'); ?>
							</div>
							<a href="<?php the_field('link'); ?>" target="_blank"></a>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>	
			</div>
		</section>

		<section class="advisor-section advisorTrigger">	
			<div class="content">
				<h2><?php the_field('advisor_header'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('advisor_content'); ?>


				<div class="advisor-carousel advisorCarousel">
					<?php $args = array( 'post_type' => 'advisors', 'posts_per_page' => -1 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					  <div class="single-advisor">
						  <a href="<?php the_field('link'); ?>" target="_blank"></a>
						  <?php $image = get_field('logo'); if( !empty($image) ): ?>
								<img class="advisor-image" src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif; ?>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
				<div class="advisor-dots advisorDots"></div>
			</div>
		</section>

		<section class="rebel-section rebelTrigger">
			<div class="rebel-top rebelTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>	
			<div class="content">
				<h2><?php the_field('rebel_with_a_cause_header'); ?></h2>
				<!-- <div class="hr-container"><hr></div> -->
				<?php if( have_rows('rebel_with_a_cause_slides') ): while( have_rows('rebel_with_a_cause_slides') ) : the_row();?>
					<div class="single-rebel-slide rebelSlide">
						<div class="slide-content slideContent">
							<?php the_sub_field('slide_content'); ?>
						</div>
						<div class="slide-callout slideCallout"<?php $image = get_sub_field('image'); if (!empty($image)): ?> style='background-image: url("<?php echo $image; ?>");'<?php endif;?>>
							<div class="slide-callout-overlay"></div>
							<div class="slide-callout-words">
								<?php the_sub_field('slide_callout'); ?>
							</div>
						</div>
					</div>
				<?php endwhile; endif;?>
			</div>
		</section>

		<section class="testimonials-section testimonialsTrigger">	
			<div class="content">
				<h2><?php the_field('testimonials_header'); ?></h2>
				<div class="hr-container"><hr></div>


				<div class="about-testimonial-carousel aboutTestimonialCarousel">
					<?php $args = array( 'post_type' => 'testimonial', 'posts_per_page' => -1 );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post(); ?>
						<div class="single-testimonial">
					  	<!-- <?php the_title();?> -->
					  	<img src="<?php echo get_template_directory_uri(); ?>/img/home/testimonial-quote.svg">
					  	<div class="testimonial-content">
					  		<?php the_field('testimonial_content'); ?>
					  	</div>
					  	<div class="testimonial-author">
					  		<div class="author_credentials">
									<div class="author_name">
										<?php the_field('author_name'); ?>
									</div>
									<div class="author_title">
										<?php the_field('author_title'); ?>
										<span class="author_company"><?php the_field('author_company'); ?></span>
									</div>
								</div>
								<div class="author_image"
								<?php $image = get_field('author_image'); if (!empty($image)): ?>
		              style='background-image: url("<?php echo $image; ?>");'
		            <?php endif;?>
		            >
		            </div>
								
							</div>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
				<div class="testimonial-dots testimonialDots"></div>
			</div>
		</section>



		
				

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





