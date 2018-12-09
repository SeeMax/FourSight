<?php /* Template Name: Home */ get_header(); ?>
	<main class="home-page" role="main">
	<?php while ( have_posts() ) : the_post(); ?>
		<section class="featured-section">
			<div class="content">
				<div class="featured-arrow featuredPrevArrow"></div>
				<div class="featured-arrow featured-next-arrow featuredNextArrow"></div>
				<div class="featured-slider featuredSlider">
					<div class="single-featured-slide">
						<div class="single-featured-slide-image c-width-40">
							<img src="<?php echo get_template_directory_uri(); ?>/img/book-small.jpg" alt="Market Vs Medicine Book">
						</div>
						<div class="single-featured-slide-content c-width-60">
							<h5>Featured Contributor</h5>
							<h2>Keith Hollihan</h2>
							<p>
								Contributor description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
								esse cillum dolore eu fugiat nulla pariatur.
							</p>
							<div class="button">
								<a href="/home"></a>
								Read Now
							</div>
						</div>
					</div>
					<div class="single-featured-slide">
						<div class="single-featured-slide-image c-width-40">
							<img src="<?php echo get_template_directory_uri(); ?>/img/book-small.jpg" alt="Market Vs Medicine Book">
						</div>
						<div class="single-featured-slide-content c-width-60">
							<h5>Featured Contributor</h5>
							<h2>Keith Hollihan</h2>
							<p>
								Contributor description Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
								minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
								esse cillum dolore eu fugiat nulla pariatur.
							</p>
							<div class="button">
								<a href="/home"></a>
								Read Now
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="believe-section">
			<div class="content">
				<h2 class="c-width-27">What We Believe</h2>
				<p class="c-width-70">
					We believe a new American healthcare system will develop through
					bottom-up, market-driven transformation as reimbursement and care
					delivery prioritize wellness over treatment.
				</p>
			</div>
		</section>

		<section class="article-section">
			<div class="content">
				<?php $args = array( 'post_type' => 'post', 'posts_per_page' => 3 );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post(); ?>
					<div class="single-article-preview c-width-33">
						<a class="c-block-fill" href="<?php the_permalink();?>"></a>
						<h3><?php the_title();?></h3>
						<h6 class="preview-author-date">
							<?php the_author();?> <span>| <?php echo get_the_date('M j, Y'); ?></span>
						</h6>
						<?php $thumb = get_the_post_thumbnail(get_the_ID());?>
						<?php if (!empty($thumb)) {
							echo the_post_thumbnail('large', ['class' => 'post-image', 'title' => 'Feature image']);
						} else if ( has_post_thumbnail ) {
							echo '<img src="';
							echo catch_that_image();
							echo '" alt="Four Sight Health" />';
						}	;?>
					</div>
					<? wp_reset_postdata(); ?>
				<?php endwhile;?>
				<div class="article-preview-buttons">
					<div class="button">
						<a href="/home"></a>
						Read More Articles
					</div>
					<div class="button text-button">
						<a href="/home"></a>
						Subscribe to Insights
					</div>
				</div>
			</div>
		</section>

		<section class="ask-section">
			<div class="content">
				<div class="ask-image c-width-20">
					<img src="<?php echo get_template_directory_uri(); ?>/img/book-small.jpg" alt="Market Vs Medicine Book">
				</div>
				<div class="ask-content c-width-80">
					<h2>Ask Dave A Question</h2>
					<p>
						This is Dave Johnson, CEO of 4SightHealth. If you have a question
						or want to reach out please do so. Click below and ask the man himself.
					</p>
					<div class="button white-button">
						<a href="/home"></a>
						Ask Dave
					</div>
				</div>
			</div>
		</section>

		<section class="sidebar-section">
			<div class="content">
				<div class="custom-sidebar c-width-25">
					<a class="twitter-timeline" data-height="500" data-link-color="#3E8B94" href="https://twitter.com/4SightHealth?ref_src=twsrc%5Etfw">Tweets by 4SightHealth</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
				<div class="fullbar c-width-75">
					<div class="fullbar-content">
						<h5>What We Do</h5>
						<h2>Clients Rely On Us To</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<ul>
							<li>
								Item 1
							</li>
							<li>
								Item 2
							</li>
							<li>
								Item 3
							</li>
						</ul>
						<ol>
							<li>
								Item 1
							</li>
							<li>
								Item 2
							</li>
							<li>
								Item 3
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>

	<?php endwhile; ?><!-- END LOOP -->
	</main>
<?php get_footer(); ?>
