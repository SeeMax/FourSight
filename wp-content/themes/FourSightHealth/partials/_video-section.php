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
