<!-- JARED WAS HERE -->
<div class="postSliderWrapper">
  <div class="postSlider">
  <?php if (have_rows('slider')) : ?>
    <?php while (have_rows('slider')) : the_row(); ?>
      <div>
      <img class="postSlideImage" src="<?php the_sub_field('slide_image'); ?>" >
      <div class="theSliderCaption" >
             <i><?php the_sub_field('caption'); ?></i>
           </div>

      </div>
    <?php endwhile; ?>
  <?php endif; ?>
  </div>
</div>
<!-- END JARED WAS HERE -->
