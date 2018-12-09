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
