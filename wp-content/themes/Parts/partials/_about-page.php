<section class="about-page aboutPage">	
	<?php get_template_part( 'partials/_fingerprint-about' ); ?>
	<div class="content">

		<?php $your_query = new WP_Query( 'pagename=about' ); ?>
		<?php if( $your_query->have_posts() ): ?>						    
		  <?php while ( $your_query->have_posts() ) : $your_query->the_post(); ?>
		    <div class="about-close aboutClose">
		    	<span></span>
		    	<span></span>
		    </div>
		    <!-- <h2 class="about-headline aboutHeadline">
		    	Players are safest when their helmets fit.
		    </h2> -->
		    <img  class="about-headline aboutHeadline" src="<?php echo get_template_directory_uri(); ?>/img/about-headline-gradient.svg" >
		    <?php the_content(); ?>
		    <img class="about-sig aboutSig" src="<?php echo get_template_directory_uri(); ?>/img/signature-fake.png" >
		    <div class="aboutName">
		    	Mike Weatherby<br>
		    	Founder
		    </div>
		   	<?php wp_reset_postdata(); ?>
		  <?php endwhile; else : ?>
				<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
		<?php endif; ?>
	
	</div>
</section>