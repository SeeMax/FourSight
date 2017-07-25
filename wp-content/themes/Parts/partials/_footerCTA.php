<?php if (get_field('unique_footer_tag') == true):?>
  <h2>
    <?php the_field('footer_heading'); ?>
  </h2>
  <?php if (get_field('button_link_or_form_popup') == "form"): ?>
    <div class="button">
      <?php echo do_shortcode('[caldera_form_modal id="'.get_field('form_id').'" width="1000"]' .get_field('footer_button_text'). '[/caldera_form_modal]'); ?>
    </div>
  <?php else: ?>
    <a href="<?php the_field('footer_button_link'); ?>" class="button">
      <?php the_field('footer_button_text'); ?>
    </a>
  <?php endif; ?>
<?php else: ?>
  <?php if (get_field('create_default_footer_cta', 'option')): ?>
    <h2>
      <?php the_field('footer_heading', 'option'); ?>
    </h2>
    <?php if (get_field('button_link_or_form_popup', 'option') == "form"): ?>
      <div class="button">
        <?php echo do_shortcode('[caldera_form_modal id="'.get_field('form_id', 'option').'" width="1000"]' .get_field('footer_button_text', 'option'). '[/caldera_form_modal]'); ?>
      </div>
    <?php else: ?>
      <a href="<?php the_field('footer_button_link', 'option'); ?>" class="button">
        <?php the_field('footer_button_text', 'option'); ?>
      </a>
    <?php endif; ?>
  <?php else: ?>
  <?php endif ;?>
<?php endif; ?>
