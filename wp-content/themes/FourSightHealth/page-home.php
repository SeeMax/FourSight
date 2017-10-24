<?php /* Template Name: Home */ get_header(); ?>
	<main class="home-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="video-section">
			<div class="video-frame">
				<div id="muteYouTubeVideoPlayer"></div>

				<script async src="https://www.youtube.com/iframe_api"></script>
				<script>
				 function onYouTubeIframeAPIReady() {
				  var player;
				  player = new YT.Player('muteYouTubeVideoPlayer', {
				    videoId: '<?php the_field('hero_video_link'); ?>', // YouTube Video ID
				    width: 560,               // Player width (in px)
				    height: 316,              // Player height (in px)
				    playerVars: {
				      autoplay: 1,        // Auto-play the video on load
				      controls: 1,        // Show pause/play buttons in player
				      showinfo: 0,        // Hide the video title
				      modestbranding: 1,  // Hide the Youtube Logo
				      loop: 1,            // Run the video in a loop
				      fs: 0,              // Hide the full screen button
				      cc_load_policy: 0, // Hide closed captions
				      iv_load_policy: 3,  // Hide the Video Annotations
				      autohide: 0,        // Hide video controls when playing
				      rel: 0
				    },
				    events: {
				      onReady: function(e) {
				        e.target.mute();
				      }
				    }
				  });
				 }

				 // Written by @labnol 
				</script>
			  <!-- <iframe src="https://www.youtube.com/embed/<?php the_field('hero_video_link'); ?>?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=<?php the_field('hero_video_link'); ?>" frameborder="0" allowfullscreen></iframe> -->
			</div>
		</section>

		<section class="mission-section missionTrigger">	
			<div class="content">
				<h2><?php the_field('mission_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('mission_body'); ?>	
				<?php get_template_part( 'partials/_mission-icons' ); ?>			
			</div>
		</section>
		
		<section class="versus-section versusTrigger">	
			<div class="versus-top versusTop">
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

		<div class="book-image-section">
			<div class="book-image">
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<div class="book-page bookPage"></div>
				<img src="<?php echo get_template_directory_uri(); ?>/img/book-small.jpg" alt="Market Vs Medicine Book">
		
			</div>	
		</div>
		
		<section class="blog-section blogTrigger">
			<div class="content">	

				<h2><?php the_field('blog_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<?php the_field('blog_section_body'); ?>
				<div class="button blue-button">
					<a href="/newsroom"></a>
					See All
				</div>
				<div class="blog-grid">
					<?php $args = array( 'post_type' => 'post', 'posts_per_page' => 3 );
						$loop = new WP_Query( $args );
						while ( $loop->have_posts() ) : $loop->the_post(); ?>
				  	<div class="single-blog-preview">
				  		<div class="post-date">
				  			<?php the_date('M j, Y'); ?>
				  		</div>
							<?php the_post_thumbnail('large', ['class' => 'post-image', 'title' => 'Feature image']); ?>
							<h4>
								<?php the_title();?>
							</h4>
<!-- 							<div class="post-author">
								<?php the_author();?>
							</div> -->
							<div class="post-excerpt">
								<?php the_excerpt();?>
							</div>
							<div class="button blue-button">
								<a href="<?php the_permalink();?>"></a>
								Read More	
							</div>
							
						</div>
						<? wp_reset_postdata(); ?>
					<?php endwhile;?>
				</div>
			</div>
		</section>

		<section class="testimonials-section testimonialsTrigger">
			<div class="content">	
				<h2><?php the_field('testimonials_title'); ?></h2>
				<div class="testimonial-carousel testimonialCarousel">
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
										–
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





