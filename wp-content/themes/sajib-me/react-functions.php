<?php


function get_user_profile($id = 1) {
    $user_id = $id;
    $user    = get_user_by( 'id', $user_id );
    if ( ! $user ) {
        return new WP_Error( 'mpp_no_user', __( 'User not found.', 'metronet-profile-picture' ), array( 'status' => 404 ) );
    }

    // Get attachment ID.
    $profile_post_id   = absint( get_user_option( 'metronet_post_id', $user_id ) );
    $post_thumbnail_id = get_post_thumbnail_id( $profile_post_id );
    if ( ! $post_thumbnail_id ) {
        return new WP_Error( 'mpp_no_profile_picture', __( 'Profile picture not found.', 'metronet-profile-picture' ), array( 'status' => 404 ) );
    }

    // Get attachment URL.
    $attachment_url = wp_get_attachment_url( $post_thumbnail_id );

    return array(
        'attachment_id'  => $post_thumbnail_id,
        'attachment_url' => $attachment_url,
    );
}


function get_site_info() {
    return [
		'name'      => get_bloginfo('name'),
		'tag_title' => get_bloginfo('description')
	];
}


function get_menu_list() {

	// Get nav locations set in theme, usually functions.php) // returns an array of menu locations ([LOCATION_NAME] = MENU_ID);
	$menuLocations = get_nav_menu_locations();
    $menuID = $menuLocations['primary']; // Get the *primary* menu added in register_nav_menus()
    $primaryNav = wp_get_nav_menu_items($menuID); // Get the array of wp objects, the nav items for our queried location.
	$tempMenu = [];
	foreach( $primaryNav as $menu ){
		$new_menu = ['id' => $menu->ID, 'title' => $menu->title, 'url' => $menu->url];
		array_push($tempMenu,$new_menu);
	}

    return $tempMenu;
}

function get_site_data() {
	
	/**
	 * Menu List
	 */
    return [
		'site_info'         => get_site_info(),
		'menu'              => get_menu_list(),
		'user_profile'      => get_user_profile()
	];
}


add_action( 'rest_api_init', function () {
    register_rest_route( 'sajib/me/v1', 'data', array(
        'methods'             => 'GET',
        'callback'            => 'get_site_data',
		'permission_callback' => '__return_true'
    ) );
} );