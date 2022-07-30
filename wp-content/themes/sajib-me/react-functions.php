<?php


function get_site_data() {
	
	// Site Info
	$site_info = [
		'name'      => get_bloginfo('name'),
		'tag_title' => get_bloginfo('description')
	];


	/**
	 * Menu List
	 */
	// Get nav locations set in theme, usually functions.php) // returns an array of menu locations ([LOCATION_NAME] = MENU_ID);
	$menuLocations = get_nav_menu_locations();
    $menuID = $menuLocations['primary']; // Get the *primary* menu added in register_nav_menus()
    $primaryNav = wp_get_nav_menu_items($menuID); // Get the array of wp objects, the nav items for our queried location.
	$tempMenu = [];
	foreach( $primaryNav as $menu ){
		$new_menu = ['id' => $menu->ID, 'title' => $menu->title, 'url' => $menu->url];
		array_push($tempMenu,$new_menu);
	}
    return [
		'site_info' => $site_info,
		'menu'      => $tempMenu
	];
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'sajib/me/v1', 'data', array(
        'methods'             => 'GET',
        'callback'            => 'get_site_data',
		'permission_callback' => '__return_true'
    ) );
} );