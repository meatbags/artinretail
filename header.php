<!DOCTYPE html>
<!-- by xavierburrow.com -->
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
	<title><?php wp_title(); ?></title>
	<meta charset="utf-8">
  <meta property="og:title" content="Artinretail" />
  <meta property="og:type" content="" />
  <meta property="og:url" content="<?php echo get_site_url(); ?>" />
  <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/img/ogim.jpg" />
	<meta name="description" content="<?php get_bloginfo('description'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/dist/app.min.js'></script>
  <link rel='stylesheet' href='<?php echo get_template_directory_uri(); ?>/dist/style.min.css'>
  <link rel='stylesheet' href='<?php echo get_template_directory_uri(); ?>/fonts/fonts.css'>
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
</head>
<body <?php body_class(); ?>>
