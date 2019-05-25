<?php
function artinretail_setup() {
	add_theme_support('title-tag');
	add_theme_support('automatic-feed-links');
	add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'artinretail_setup');

function remove_admin_post_types() {
	remove_menu_page('edit.php');
	remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'remove_admin_post_types');

function init_remove_support(){
    $post_type = 'page';
    remove_post_type_support( $post_type, 'editor');
}
add_action('init', 'init_remove_support', 100);

add_action('wp_enqueue_scripts', 'artinretail_load_scripts');
function artinretail_load_scripts() {
	$dir = get_template_directory_uri();
	wp_enqueue_script('artinretail_app', $dir . '/dist/app.min.js');
	wp_register_style('artinretail_style', get_template_directory_uri() . '/dist/style.min.css' );
	wp_register_style('artinretail_fonts', get_template_directory_uri() . '/fonts/fonts.css' );
	wp_enqueue_style('artinretail_style' );
	wp_enqueue_style('artinretail_fonts' );
}

function load_artinretail_wp_admin_style() {
  wp_register_style('artinretail_wp_admin_css', get_template_directory_uri() . '/dist/admin-style.css', false, '1.0.0');
  wp_enqueue_style('artinretail_wp_admin_css');
}
add_action( 'admin_enqueue_scripts', 'load_artinretail_wp_admin_style' );
?>
