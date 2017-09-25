<div class="single-article-preview">
<div class="article-line"></div>
	<h4>
		<?php the_title();?>
	</h4>
	<div class="article-author">
		By <?php the_author();?> on <?php the_date(); ?>
	</div>
	<div class="article-preview-image">
		<?php if ( get_the_post_thumbnail($post_id) != '' ) {
			echo '<a href="'; the_permalink(); echo '" class="thumbnail-wrapper">';
				the_post_thumbnail('large', ['class' => 'post-image', 'title' => 'Feature image']);
			echo '</a>';
		} else {
			echo '<img src="';
			echo catch_that_image();
			echo '" alt="" />';
		}	;?>
	</div>
	<div class="article-preview-content">
		<div class="article-excerpt">
			<?php the_excerpt();?>
		</div>
		<div class="button">
			<a href="<?php the_permalink();?>"></a>
			Read More	
		</div>
	</div>
	
</div>