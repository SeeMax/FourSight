<?php
/*
 *  Author: Todd Motto | @toddmotto
 *  URL: html5blank.com | @html5blank
 *  Custom functions, support, custom post types and more.
 */

/*------------------------------------*\
	External Modules/Files
\*------------------------------------*/

// Load any external files you have here

/*------------------------------------*\
	Theme Support
\*------------------------------------*/

if (!isset($content_width))
{
    $content_width = 900;
}

if (function_exists('add_theme_support'))
{
    // Add Menu Support
    add_theme_support('menus');

    // Add Thumbnail Theme Support
    add_theme_support('post-thumbnails');
    add_image_size('large', 1024, '', true); // Large Thumbnail
    add_image_size('medium', 250, '', true); // Medium Thumbnail
    add_image_size('small', 120, '', true); // Small Thumbnail
    add_image_size('custom-size', 700, 200, true); // Custom Thumbnail Size call using the_post_thumbnail('custom-size');

    // Add Support for Custom Backgrounds - Uncomment below if you're going to use
    /*add_theme_support('custom-background', array(
	'default-color' => 'FFF',
	'default-image' => get_template_directory_uri() . '/img/bg.jpg'
    ));*/

    // Add Support for Custom Header - Uncomment below if you're going to use
    /*add_theme_support('custom-header', array(
	'default-image'			=> get_template_directory_uri() . '/img/headers/default.jpg',
	'header-text'			=> false,
	'default-text-color'		=> '000',
	'width'				=> 1000,
	'height'			=> 198,
	'random-default'		=> false,
	'wp-head-callback'		=> $wphead_cb,
	'admin-head-callback'		=> $adminhead_cb,
	'admin-preview-callback'	=> $adminpreview_cb
    ));*/

    // Enables post and comment RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Localisation Support
    load_theme_textdomain('html5blank', get_template_directory() . '/languages');
}

/*------------------------------------*\
	Functions
\*------------------------------------*/

// HTML5 Blank navigation
function main_theme_nav()
{
	wp_nav_menu(
	array(
		'theme_location'  => 'header-menu',
		'menu'            => '',
		'container'       => 'div',
		'container_class' => 'menu-{menu slug}-container',
		'container_id'    => '',
		'menu_class'      => 'menu',
		'menu_id'         => '',
		'echo'            => true,
		'fallback_cb'     => 'wp_page_menu',
		'before'          => '',
		'after'           => '',
		'link_before'     => '',
		'link_after'      => '',
		'items_wrap'      => '<ul>%3$s</ul>',
		'depth'           => 0,
		'walker'          => ''
		)
	);
}

// Load Scripts (header.php)
function theme_scripts()
{
    if ($GLOBALS['pagenow'] != 'wp-login.php' && !is_admin()) {

    	wp_register_script('conditionizr', get_template_directory_uri() . '/js/lib/conditionizr-4.3.0.min.js', array(), '4.3.0'); // Conditionizr
        wp_enqueue_script('conditionizr'); // Enqueue it!

        wp_register_script('modernizr', get_template_directory_uri() . '/js/lib/modernizr-2.7.1.min.js', array(), '2.7.1', true); // Modernizr
        wp_enqueue_script('modernizr'); // Enqueue it!

        wp_register_script('slickslider', get_template_directory_uri() . '/js/lib/slick.js', array('jquery'), '1.6.0', true); // slickslider
        wp_enqueue_script('slickslider'); // Enqueue it!

        wp_register_script('tweenmax', get_template_directory_uri() . '/js/lib/TweenMax.min.js', array(), '1.19.1', true); // tweenmax
        wp_enqueue_script('tweenmax'); // Enqueue it!

        wp_register_script('timelinemax', get_template_directory_uri() . '/js/lib/TimelineMax.min.js', array(), '1.18.6', true); // timelinemax
        wp_enqueue_script('timelinemax'); // Enqueue it!

        wp_register_script('DrawSVGPlugin', get_template_directory_uri() . '/js/lib/DrawSVGPlugin.min.js', array(), '0.1.3', true); // DrawSVGPlugin
        wp_enqueue_script('DrawSVGPlugin'); // Enqueue it!

        wp_register_script('ScrollMagic', get_template_directory_uri() . '/js/lib/ScrollMagic.min.js', array(), '1.8.1', true); // ScrollMagic
        wp_enqueue_script('ScrollMagic'); // Enqueue it!

        wp_register_script('ScrollMagicGSAP', get_template_directory_uri() . '/js/lib/animation.gsap.min.js', array(), '1.8.1', true); // ScrollMagic
        wp_enqueue_script('ScrollMagicGSAP'); // Enqueue it!

        wp_register_script('ScrollToPlugin', get_template_directory_uri() . '/js/lib/ScrollToPlugin.min.js', array(), '1.8.1', true); // ScrollToPlugin
        wp_enqueue_script('ScrollToPlugin'); // Enqueue it!

        wp_register_script('imagesLoaded', get_template_directory_uri() . '/js/lib/imagesLoaded.js', array(), '4.1.1', true); // imagesLoaded
        wp_enqueue_script('imagesLoaded'); // Enqueue it!

        wp_register_script('attrGSAP', get_template_directory_uri() . '/js/lib/AttrPlugin.min.js', array(), '0.6.0', true); // attrGSAP
        wp_enqueue_script('attrGSAP'); // Enqueue it!

        wp_register_script('splitText', get_template_directory_uri() . '/js/lib/SplitText.min.js', array(), '0.6.0', true); // attrGSAP
        wp_enqueue_script('splitText'); // Enqueue it!

        wp_register_script('theme-script', get_template_directory_uri() . '/scripts.js', array('jquery'), '1.0.0', true); // Custom scripts
        wp_enqueue_script('theme-script'); // Enqueue it!
    }
}

// Load conditional scripts
// function template_conditional_scripts()
// {
//     if (is_page('pagenamehere')) {
//         wp_register_script('scriptname', get_template_directory_uri() . '/js/scriptname.js', array('jquery'), '1.0.0'); // Conditional script(s)
//         wp_enqueue_script('scriptname'); // Enqueue it!
//     }
// }

// Load Styles
function theme_styles()
{
    wp_register_style('normalize', get_template_directory_uri() . '/css/normalize.min.css', array(), '1.0', 'all');
    wp_enqueue_style('normalize'); // Enqueue it!

    // FONTS CSS
    wp_register_style('theme_fonts', get_template_directory_uri() . '/fonts/fonts.css', array(), '1.0', 'all');
    wp_enqueue_style('theme_fonts'); // Enqueue it!

    // FONTS AWESOME ICONS
    wp_register_style('fontawesome', get_template_directory_uri() . '/css/font-awesome.min.css', array(), '1.0', 'all');
    wp_enqueue_style('fontawesome'); // Enqueue it!

    // SLICK SLIDER CSS-1
    wp_register_style('SlickSlider', get_template_directory_uri() . '/css/slick.css', array(), '1.0', 'all');
    wp_enqueue_style('SlickSlider'); // Enqueue it!

    // SLICK SLIDER CSS-2
    wp_register_style('SlickTheme', get_template_directory_uri() . '/css/slick-theme.css', array(), '1.0', 'all');
    wp_enqueue_style('SlickTheme'); // Enqueue it!

    wp_register_style('theme_css', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('theme_css'); // Enqueue it!
}

// Register HTML5 Blank Navigation
function register_theme_menu()
{
    register_nav_menus(array( // Using array to specify more menus if needed
        'header-menu' => __('Header Menu', 'html5blank'), // Main Navigation
        'sidebar-menu' => __('Sidebar Menu', 'html5blank'), // Sidebar Navigation
        'extra-menu' => __('Extra Menu', 'html5blank') // Extra Navigation if needed (duplicate as many as you need!)
    ));
}

// Remove the <div> surrounding the dynamic navigation to cleanup markup
function my_wp_nav_menu_args($args = '')
{
    $args['container'] = false;
    return $args;
}

// Remove Injected classes, ID's and Page ID's from Navigation <li> items
function my_css_attributes_filter($var)
{
    return is_array($var) ? array() : '';
}

// Remove invalid rel attribute values in the categorylist
function remove_category_rel_from_category_list($thelist)
{
    return str_replace('rel="category tag"', 'rel="tag"', $thelist);
}

// Add page slug to body class, love this - Credit: Starkers Wordpress Theme
function add_slug_to_body_class($classes)
{
    global $post;
    if (is_home()) {
        $key = array_search('blog', $classes);
        if ($key > -1) {
            unset($classes[$key]);
        }
    } elseif (is_page()) {
        $classes[] = sanitize_html_class($post->post_name);
    } elseif (is_singular()) {
        $classes[] = sanitize_html_class($post->post_name);
    }

    return $classes;
}

// If Dynamic Sidebar Exists
if (function_exists('register_sidebar'))
{
    // Define Sidebar Widget Area 1
    register_sidebar(array(
        'name' => __('Widget Area 1', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-1',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    // Define Sidebar Widget Area 2
    register_sidebar(array(
        'name' => __('Widget Area 2', 'html5blank'),
        'description' => __('Description for this widget-area...', 'html5blank'),
        'id' => 'widget-area-2',
        'before_widget' => '<div id="%1$s" class="%2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}

// Remove wp_head() injected Recent Comment styles
function my_remove_recent_comments_style()
{
    global $wp_widget_factory;
    remove_action('wp_head', array(
        $wp_widget_factory->widgets['WP_Widget_Recent_Comments'],
        'recent_comments_style'
    ));
}

// Pagination for paged posts, Page 1, Page 2, Page 3, with Next and Previous Links, No plugin
function html5wp_pagination()
{
    global $wp_query;
    $big = 999999999;
    echo paginate_links(array(
        'base' => str_replace($big, '%#%', get_pagenum_link($big)),
        'format' => '?paged=%#%',
        'current' => max(1, get_query_var('paged')),
        'total' => $wp_query->max_num_pages
    ));
}

// Custom Excerpts
function html5wp_index($length) // Create 20 Word Callback for Index page Excerpts, call using html5wp_excerpt('html5wp_index');
{
    return 20;
}

// Create 40 Word Callback for Custom Post Excerpts, call using html5wp_excerpt('html5wp_custom_post');
function theme_custom_post($length)
{
    return 30;
}

// Create the Custom Excerpts callback
function html5wp_excerpt($length_callback = '', $more_callback = '')
{
    global $post;
    if (function_exists($length_callback)) {
        add_filter('excerpt_length', $length_callback);
    }
    if (function_exists($more_callback)) {
        add_filter('excerpt_more', $more_callback);
    }
    $output = get_the_excerpt();
    $output = apply_filters('wptexturize', $output);
    $output = apply_filters('convert_chars', $output);
    $output = '<p>' . $output . '</p>';
    echo $output;
}

// Custom View Article link to Post
function html5_blank_view_article($more)
{
    global $post;
    // return '... <a class="view-article" href="' . get_permalink($post->ID) . '">' . __('View Article', 'html5blank') . '</a>';
    return ' [...]';
}

// Remove Admin bar
function remove_admin_bar()
{
    return false;
}

// Remove 'text/css' from our enqueued stylesheet
function html5_style_remove($tag)
{
    return preg_replace('~\s+type=["\'][^"\']++["\']~', '', $tag);
}

// Remove thumbnail width and height dimensions that prevent fluid images in the_thumbnail
function remove_thumbnail_dimensions( $html )
{
    $html = preg_replace('/(width|height)=\"\d*\"\s/', "", $html);
    return $html;
}

// Custom Gravatar in Settings > Discussion
function html5blankgravatar ($avatar_defaults)
{
    $myavatar = get_template_directory_uri() . '/img/gravatar.jpg';
    $avatar_defaults[$myavatar] = "Custom Gravatar";
    return $avatar_defaults;
}

// Add to existing function.php file
// Disable support for comments and trackbacks in post types
function df_disable_comments_post_types_support() {
    $post_types = get_post_types();
    foreach ($post_types as $post_type) {
        if(post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
}
add_action('admin_init', 'df_disable_comments_post_types_support');
// Close comments on the front-end
function df_disable_comments_status() {
    return false;
}
add_filter('comments_open', 'df_disable_comments_status', 20, 2);
add_filter('pings_open', 'df_disable_comments_status', 20, 2);
// Hide existing comments
function df_disable_comments_hide_existing_comments($comments) {
    $comments = array();
    return $comments;
}
add_filter('comments_array', 'df_disable_comments_hide_existing_comments', 10, 2);
// Remove comments page in menu
function df_disable_comments_admin_menu() {
    remove_menu_page('edit-comments.php');


}
add_action('admin_menu', 'df_disable_comments_admin_menu');
// Redirect any user trying to access comments page
function df_disable_comments_admin_menu_redirect() {
    global $pagenow;
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url()); exit;
    }
}
add_action('admin_init', 'df_disable_comments_admin_menu_redirect');
// Remove comments metabox from dashboard
function df_disable_comments_dashboard() {
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}
add_action('admin_init', 'df_disable_comments_dashboard');
// Remove comments links from admin bar
function df_disable_comments_admin_bar() {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
}
add_action('init', 'df_disable_comments_admin_bar');



// Threaded Comments
function enable_threaded_comments()
{
    if (!is_admin()) {
        if (is_singular() AND comments_open() AND (get_option('thread_comments') == 1)) {
            wp_enqueue_script('comment-reply');
        }
    }
}

// Custom Comments Callback
function html5blankcomments($comment, $args, $depth)
{
	$GLOBALS['comment'] = $comment;
	extract($args, EXTR_SKIP);

	if ( 'div' == $args['style'] ) {
		$tag = 'div';
		$add_below = 'comment';
	} else {
		$tag = 'li';
		$add_below = 'div-comment';
	}
?>
    <!-- heads up: starting < for the html tag (li or div) in the next line: -->
    <<?php echo $tag ?> <?php comment_class(empty( $args['has_children'] ) ? '' : 'parent') ?> id="comment-<?php comment_ID() ?>">
	<?php if ( 'div' != $args['style'] ) : ?>
	<div id="div-comment-<?php comment_ID() ?>" class="comment-body">
	<?php endif; ?>
	<div class="comment-author vcard">
	<?php if ($args['avatar_size'] != 0) echo get_avatar( $comment, $args['180'] ); ?>
	<?php printf(__('<cite class="fn">%s</cite> <span class="says">says:</span>'), get_comment_author_link()) ?>
	</div>
<?php if ($comment->comment_approved == '0') : ?>
	<em class="comment-awaiting-moderation"><?php _e('Your comment is awaiting moderation.') ?></em>
	<br />
<?php endif; ?>

	<div class="comment-meta commentmetadata"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>">
		<?php
			printf( __('%1$s at %2$s'), get_comment_date(),  get_comment_time()) ?></a><?php edit_comment_link(__('(Edit)'),'  ','' );
		?>
	</div>

	<?php comment_text() ?>

	<div class="reply">
	<?php comment_reply_link(array_merge( $args, array('add_below' => $add_below, 'depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</div>
	<?php if ( 'div' != $args['style'] ) : ?>
	</div>
	<?php endif; ?>
<?php }






/*------------------------------------*\
	Actions + Filters + ShortCodes
\*------------------------------------*/

// Add Actions
add_action('init', 'theme_scripts'); // Add Custom Scripts to wp_head
// add_action('wp_print_scripts', 'html5blank_conditional_scripts'); // Add Conditional Page Scripts
add_action('get_header', 'enable_threaded_comments'); // Enable Threaded Comments
add_action('wp_enqueue_scripts', 'theme_styles'); // Add Theme Stylesheet
add_action('init', 'register_theme_menu'); // Add HTML5 Blank Menu
add_action('init', 'create_post_type_testiominial');
add_action('init', 'create_post_type_bio');
add_action('init', 'create_post_type_client');
add_action('init', 'create_post_type_affiliations');
add_action('init', 'create_post_type_advisors');
add_action('widgets_init', 'my_remove_recent_comments_style'); // Remove inline Recent Comment Styles from wp_head()
add_action('init', 'html5wp_pagination'); // Add our HTML5 Pagination

// Remove Actions
remove_action('wp_head', 'feed_links_extra', 3); // Display the links to the extra feeds such as category feeds
remove_action('wp_head', 'feed_links', 2); // Display the links to the general feeds: Post and Comment Feed
remove_action('wp_head', 'rsd_link'); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action('wp_head', 'wlwmanifest_link'); // Display the link to the Windows Live Writer manifest file.
remove_action('wp_head', 'index_rel_link'); // Index link
remove_action('wp_head', 'parent_post_rel_link', 10, 0); // Prev link
remove_action('wp_head', 'start_post_rel_link', 10, 0); // Start link
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0); // Display relational links for the posts adjacent to the current post.
remove_action('wp_head', 'wp_generator'); // Display the XHTML generator that is generated on the wp_head hook, WP version
remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
remove_action('wp_head', 'rel_canonical');
remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);

// Add Filters
add_filter('avatar_defaults', 'html5blankgravatar'); // Custom Gravatar in Settings > Discussion
add_filter('body_class', 'add_slug_to_body_class'); // Add slug to body class (Starkers build)
add_filter('widget_text', 'do_shortcode'); // Allow shortcodes in Dynamic Sidebar
add_filter('widget_text', 'shortcode_unautop'); // Remove <p> tags in Dynamic Sidebars (better!)
add_filter('wp_nav_menu_args', 'my_wp_nav_menu_args'); // Remove surrounding <div> from WP Navigation
// add_filter('nav_menu_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected classes (Commented out by default)
// add_filter('nav_menu_item_id', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> injected ID (Commented out by default)
// add_filter('page_css_class', 'my_css_attributes_filter', 100, 1); // Remove Navigation <li> Page ID's (Commented out by default)
add_filter('the_category', 'remove_category_rel_from_category_list'); // Remove invalid rel attribute
add_filter('the_excerpt', 'shortcode_unautop'); // Remove auto <p> tags in Excerpt (Manual Excerpts only)
add_filter('the_excerpt', 'do_shortcode'); // Allows Shortcodes to be executed in Excerpt (Manual Excerpts only)
add_filter('excerpt_more', 'html5_blank_view_article'); // Add 'View Article' button instead of [...] for Excerpts
add_filter( 'excerpt_length', 'theme_custom_post', 999 );
add_filter('show_admin_bar', 'remove_admin_bar'); // Remove Admin bar
add_filter('style_loader_tag', 'html5_style_remove'); // Remove 'text/css' from enqueued stylesheet
add_filter('post_thumbnail_html', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to thumbnails
add_filter('image_send_to_editor', 'remove_thumbnail_dimensions', 10); // Remove width and height dynamic attributes to post images

// Remove Filters
remove_filter('the_excerpt', 'wpautop'); // Remove <p> tags from Excerpt altogether

// Shortcodes
add_shortcode('html5_shortcode_demo', 'html5_shortcode_demo'); // You can place [html5_shortcode_demo] in Pages, Posts now.
add_shortcode('html5_shortcode_demo_2', 'html5_shortcode_demo_2'); // Place [html5_shortcode_demo_2] in Pages, Posts now.

// Shortcodes above would be nested like this -
// [html5_shortcode_demo] [html5_shortcode_demo_2] Here's the page title! [/html5_shortcode_demo_2] [/html5_shortcode_demo]

/*------------------------------------*\
	Custom Post Types
\*------------------------------------*/

function create_post_type_testiominial()
{
  register_taxonomy_for_object_type('category', 'theme_template'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'theme_template');
    register_post_type( 'testimonial',
        array(
            'labels' => array(
                'name' => ('Testimonials'),
                'singular_name' => ('Testimonial')
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'testimonial'),
        'supports' => array('title','editor'),
        'menu_icon'   => 'dashicons-media-text'
        )
    );
}

function create_post_type_bio()
{
  register_taxonomy_for_object_type('category', 'theme_template'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'theme_template');
    register_post_type( 'bio',
        array(
            'labels' => array(
                'name' => ('Bios'),
                'singular_name' => ('Bio')
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'Bio'),
        'supports' => array('title','editor'),
        'menu_icon'   => 'dashicons-universal-access-alt'
        )
    );
}

function create_post_type_client()
{
  register_taxonomy_for_object_type('category', 'theme_template'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'theme_template');
    register_post_type( 'clients',
        array(
            'labels' => array(
                'name' => ('Clients'),
                'singular_name' => ('Client')
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'Client'),
        'supports' => array('title','editor'),
        'menu_icon'   => 'dashicons-groups'
        )
    );
}

function create_post_type_affiliations()
{
  register_taxonomy_for_object_type('category', 'theme_template'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'theme_template');
    register_post_type( 'affiliations',
        array(
            'labels' => array(
                'name' => ('Affiliations'),
                'singular_name' => ('Affiliation')
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'Affiliation'),
        'supports' => array('title','editor'),
        'menu_icon'   => 'dashicons-shield-alt'
        )
    );
}

function create_post_type_advisors()
{
  register_taxonomy_for_object_type('category', 'theme_template'); // Register Taxonomies for Category
  register_taxonomy_for_object_type('post_tag', 'theme_template');
    register_post_type( 'advisors',
        array(
            'labels' => array(
                'name' => ('Advisors'),
                'singular_name' => ('Advisor')
            ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'Advisors'),
        'supports' => array('title','editor'),
        'menu_icon'   => 'dashicons-shield'
        )
    );
}

// CREATE A GLOBAL OPTIONS PAGE
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title'    => 'Global Options',
        'menu_title'    => 'Global Options',
        'menu_slug'    => 'global_options',
        'capability'    => 'edit_posts',
        'redirect'    => false,
                'icon_url' => 'dashicons-media-spreadsheet',
        'position' => 6
    ));
}



function wpb_change_title_text( $title ){
     $screen = get_current_screen();
  
     if  ( 'bio' == $screen->post_type ) {
          $title = 'Their Name';
     } 

     if ( 'advisors' == $screen->post_type ) {
          $title = 'Advisory Name';
     }

    if ( 'affiliations' == $screen->post_type ) {
        $title = 'Affiliation Name';
    }

    if ( 'clients' == $screen->post_type ) {
        $title = 'Client Name';
    }
  
     return $title;
}
  
add_filter( 'enter_title_here', 'wpb_change_title_text' );


/*------------------------------------*\
    Woo Commerce Setup
\*------------------------------------*/

remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);

function my_theme_wrapper_start() {
  echo '<section class="woo-wrapper">';
}

function my_theme_wrapper_end() {
  echo '</section>';
}


/*----------------------------------------*\
    Get First Post if no featured image
\*----------------------------------------*/

function catch_that_image() {
  global $post, $posts;
  $first_img = '';
  ob_start();
  ob_end_clean();
  $output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
  $first_img = $matches[1][0];

  if(empty($first_img)) {

    if ( is_category() || is_tag() ) {
        $first_img = "../../wp-content/themes/FourSightHealth/img/default-post-image.jpg";
    } else {
        $first_img = "../wp-content/themes/FourSightHealth/img/default-post-image.jpg";
    }
  }
  return $first_img;
}


/*-----------------------------------------------*\
    Add Active Class to Parent and Child Items
\*-----------------------------------------------*/

add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);

function special_nav_class ($classes, $item) {
    if (in_array('current-menu-ancestor', $classes) || in_array('current-menu-item', $classes) ){
        $classes[] = 'active ';
    }
    return $classes;
}


/*-----------------------------------------------*\
    Show more posts on archive page
\*-----------------------------------------------*/

function wpse63424_filter_pre_get_posts( $query ) {
    if ( ! is_main_query() ) {
        return $query;
    } else {
        if ( is_category() || is_tag() ) {
            $query->set( 'posts_per_page',-1 );
        }
        return $query;
    }
}
add_filter( 'pre_get_posts', 'wpse63424_filter_pre_get_posts' );

/*------------------------------------*\
	ShortCode Functions
\*------------------------------------*/

// Shortcode Demo with Nested Capability
function html5_shortcode_demo($atts, $content = null)
{
    return '<div class="shortcode-demo">' . do_shortcode($content) . '</div>'; // do_shortcode allows for nested Shortcodes
}

// Shortcode Demo with simple <h2> tag
function html5_shortcode_demo_2($atts, $content = null) // Demo Heading H2 shortcode, allows for nesting within above element. Fully expandable.
{
    return '<h2>' . $content . '</h2>';
}

function remove_menus(){
  
  remove_menu_page( 'index.php' );                  //Dashboard
  remove_menu_page( 'jetpack' );                    //Jetpack* 
  remove_menu_page( 'edit-comments.php' );          //Comments
  remove_menu_page( 'themes.php' );                 //Appearance
  remove_menu_page( 'plugins.php' );                //Plugins
  // remove_menu_page( 'users.php' );                  //Users
  remove_menu_page( 'tools.php' );                  //Tools
  remove_menu_page( 'options-general.php' );        //Settings
  remove_menu_page( 'ajax-load-more' );             //Ajax Load More Plugin
}
add_action( 'admin_menu', 'remove_menus', 9999);
// Hide ACF
// add_filter('acf/settings/show_admin', '__return_false');



?>
