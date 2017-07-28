<?php /* Template Name: Home */ get_header(); ?>
	<main class="home-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="video-section">
			<div class="video-frame">
				<?php the_field('hero_video_link'); ?>
			</div>
			<div class="content">	
			</div>
		</section>

		<section class="mission-section">	
			<div class="content">
				<h2><?php the_field('mission_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('mission_body'); ?>	
				<?php get_template_part( 'partials/_mission-icons' ); ?>			
			</div>
		</section>
		
		<section class="versus-section">	
			<div class="versus-top">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<h2><?php the_field('versus_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('versus_body'); ?>
				<div class="button">
					<a href=""></a>
					<?php the_field('versus_button_text'); ?>
				</div>
			</div>
		</section>
		<div class="book-image">
			<img src="<?php echo get_template_directory_uri(); ?>/img/book-small.jpg" alt="Market Vs Medicine Book">
		</div>	

		<?php get_template_part( 'partials/_global-locations' ); ?>
		
		<section class="blog-section">
			<div class="content">	

				<h2><?php the_field('blog_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('blog_section_body'); ?>
				<div class="button">
					<a href="/blog"></a>
					See All
				</div>
				<div class="blog-grid">
					<?php $args = array( 'post_type' => 'post', 'posts_per_page' => 3 );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post(); ?>
				  	<div class="single-blog-preview">
				  		<?php the_title();?>
							
							<?php $image = get_field('featured_image'); if( !empty($image) ): ?>
							<img class="propertyImage" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif;?>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
			</div>
		</section>

		<section class="testimonial-section">
			<div class="content">	
				<h2><?php the_field('testimonials_title'); ?></h2>
				<div class="testimonial-container">
					<?php $args = array( 'post_type' => 'testimonial', 'posts_per_page' => -1 );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post(); ?>
				  	<?php the_title();?>
						<?php $image = get_field('featured_image'); if( !empty($image) ): ?>
							<img class="propertyImage" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
						<?php endif;?>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
			</div>
		</section>

		
		

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





