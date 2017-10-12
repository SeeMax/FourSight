<?php /* Template Name: Team */ get_header(); ?>
	<main class="team-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>		

		<section class="meet-david-section meetDavidTrigger">	
			<div class="meet-top meetTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">			
				<h2><?php the_field('meet_dave_header'); ?></h2>
				<div class="hr-container"><hr></div>
				<div class="meet-parts">
					<div class="meet-details">
						<div class="meet-name">
							<?php the_field('meet_dave_name'); ?>
						</div>
						<div class="meet-title">
							<?php the_field('meet_dave_title'); ?>
						</div>
						<div class="meet-image">
							<?php $image = get_field('meet_dave_image'); if( !empty($image) ): ?>
								<img src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
							<?php endif; ?>
						</div>
					</div>
					<div class="meet-paragraphs">
						<?php the_field('meet_dave_content'); ?>
					</div>
				</div>
			</div>
		</section>

		<section class="meet-team-section meetTeamTrigger">	
			<div class="content">
				<h2><?php the_field('meet_the_team_header'); ?></h2>
				<div class="hr-container"><hr></div>

				<div class="meet-members-container">
					<?php $args = array( 'post_type' => 'bio', 'posts_per_page' => -1 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					  <div class="meet-single-member">
							<div class="meet-details">
								<div class="meet-name">
									<?php the_title(); ?>
								</div>
								<div class="meet-title">
									<?php the_field('title'); ?>
								</div>
								<div class="meet-image-container">
									<div class="meet-image">
								  	<?php $image = get_field('image'); if( !empty($image) ): ?>
											<img src="<?php echo $image; ?>" alt="<?php echo $image['alt']; ?>" />
										<?php endif; ?>
									</div>
									<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
										<circle class="meet-circle-cover" cx="90" cy="90" r="90"/>
									  <circle class="meet-circle meetCircle" cx="90" cy="90" r="90"/>
									</svg>
								</div>
							</div>
							<div class="meet-writeup">
								<?php the_field('description'); ?>
								<div class="gradient"></div>
								<div class="more-link">Read More</div>
							</div>
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>

			</div>
		</section>	

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





