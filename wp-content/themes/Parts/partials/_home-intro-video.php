


<?php if (get_field('enable_video')): ?>
<div class="video-frame">
	<img class="vid-preview vidPreview" src="<?php echo get_template_directory_uri(); ?>/img/home/home-video-screen.png" >

	<div id="play-button" class="play-video playVideo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.8 100.8">
			<circle class="play-video-circle" cx="50.4" cy="50.4" r="50.4"/>
			<path class="play-video-arrow" d="M66.3,53.1L40.8,65c-1.3,0.6-2.8-0.4-2.8-1.8V39.5c0-1.5,1.5-2.4,2.8-1.8l25.5,11.9
			C67.8,50.2,67.8,52.4,66.3,53.1z"/>
		</svg>
	</div>
	<div class="close-video closeVideo">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
		<circle class="close-video-circle" cx="50" cy="50" r="50"/>
		<line class="close-video-x" x1="35" y1="35" x2="65" y2="65"/>
		<line class="close-video-x" x1="35" y1="65" x2="65" y2="35"/>
		</svg>
	</div>
	<?php the_field('video_embed'); ?>
</div>
<?php else: ?>
	<div class="video-frame">
		<img class="vid-preview vidPreview" src="<?php the_field('video_fallback_image'); ?>" >
</div>
	<?php endif; ?>
