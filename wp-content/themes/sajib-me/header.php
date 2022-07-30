<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php echo esc_url( get_bloginfo( 'pingback_url' ) ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head> 

<body <?php body_class(); ?> <?php echo ( 29 == get_the_ID() ) ? 'id="no-sidebar"' : ''; ?>>
<?php wp_body_open(); ?>
<div id="page" class="hfeed site">
	<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentyfifteen' ); ?></a>

<?php if( 29 != get_the_ID() ): ?>
	<div id="sidebar" class="sidebar">
<?php endif; ?>
		<header id="masthead" class="site-header <?php echo ( 29 != get_the_ID() ) ? '' : 'flat'; ?>" role="banner">
			<div class="site-branding">

				<?php
				if( 29 != get_the_ID() ):
					twentyfifteen_the_custom_logo();
					//if ( is_front_page() && is_home() ) :
					?>
						<img class="profile-pic" src="<?php echo get_template_directory_uri(); ?>/img/propic.jpg" alt="sajib talukder">
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php 

					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) :
						?>
						<p class="site-description"><?php echo $description; ?></p>
						<?php
					endif;
				else: 
				    wp_nav_menu( [
				        'theme_location'    => 'primary',
				        'depth'             => 3,
				        'container'         => false,
				        'menu_id'           => 'fexa-main-menu',
				        'menu_class'        => 'menu-list' 
				    ] );
				endif;

					?>
				<button class="secondary-toggle"><?php _e( 'Menu and widgets', 'twentyfifteen' ); ?></button>
			</div><!-- .site-branding -->
		</header><!-- .site-header -->

		<?php if( 29 != get_the_ID() ) get_sidebar(); ?>
<?php if( 29 != get_the_ID() ): ?>
	</div><!-- .sidebar --> 
<?php endif; ?>
	<div id="content" class="<?php echo ( 29 != get_the_ID() ) ? 'site-content' : ''; ?>">
