<?php /* Template Name: Hire Me */ get_header(); ?>
	<main class="hire-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>			
		<section class="video-section">
			<div class="video-frame">
				<div id="muteYouTubeVideoPlayer"></div>

				<script async src="https://www.youtube.com/iframe_api"></script>
				<script>
				 function onYouTubeIframeAPIReady() {
				  var player;
				  player = new YT.Player('muteYouTubeVideoPlayer', {
				    videoId: '<?php the_field('video_link'); ?>', // YouTube Video ID
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
		<!-- <section class="video-section">
			<div class="video-frame">
			  <iframe src="https://www.youtube.com/embed/<?php the_field('video_link'); ?>?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=<?php the_field('hero_video_link'); ?>" frameborder="0" allowfullscreen></iframe>
			</div>
		</section> -->

		<section class="hire-cta-section hireTrigger">	
			<div class="content">
				<div class="hire-tile">
					<h2><?php the_field('title'); ?></h2>
					<div class="hr-container"><hr></div>
					<p><?php the_field('content'); ?></p>
					<div class="button">
						<a href="mailto:<?php the_field('link'); ?>?subject=<?php the_field('subject'); ?>"></a>
						<?php the_field('button_text'); ?>
					</div>
				</div>
				<div class="hire-tile">
					<h2><?php the_field('title_consult'); ?></h2>
					<div class="hr-container"><hr></div>
					<p><?php the_field('content_consult'); ?></p>
					<div class="button">
						<a href="mailto:<?php the_field('link_consult'); ?>?subject=<?php the_field('subject_consult'); ?>"></a>
						<?php the_field('button_text_consult'); ?>
					</div>
				</div>
			</div>
		</section>

		<section class="engagement-section engagementTrigger">	
			<div class="engagement-top engagementTop">
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1660 97.0999756" preserveAspectRatio="none">
					<polygon class="section-topper-polygon" points="1660,0 1660,97.0999756 825.5479736,27.0999756 0,97.0999756 0,0 "/>
				</svg>				
			</div>
			<div class="content">
				<h2><?php the_field('engagements_title'); ?></h2>
				<div class="hr-container"><hr></div>
				<p><?php the_field('engagements_copy'); ?></p>
				<div class="engagement-list">
					<?php if( have_rows('engagements_events') ): while( have_rows('engagements_events') ) : the_row();?>
						<div class="single-engagement">
							<div class="engagement-date">
								<?php the_sub_field('date'); ?>
							</div>
							<div class="engagement-location">
								<?php the_sub_field('location'); ?>
							</div>
						</div>
					<?php endwhile; endif;?>
				</div>
			</div>
		</section>
		

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>





