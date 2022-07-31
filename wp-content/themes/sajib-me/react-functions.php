<?php
// add order support to default post
add_action( 'admin_init', 'your_custom_post_order_fn' );
function your_custom_post_order_fn() {
    add_post_type_support( 'post', 'page-attributes' );
}


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

function raw_to_html_output($content){
    $content = apply_filters( 'the_content', $content );
    $content = str_replace( ']]>', ']]&gt;', $content );
    return $content;
}

function get_posts_list() {
    $temp_posts = [];
    $posts = get_posts([
        'post_type' => 'post',
        'posts_per_page' => -1,
        'order' => 'ASC',
        'orderby' => 'menu_order'
    ]);
    foreach( $posts as $post ){
        $new_post = [
            'id'      => $post->ID,
            'title'   => $post->post_title,
            'slug'    => $post->post_name,
            'date'    => get_the_date('',$post->ID),
            'content' => raw_to_html_output($post->post_content)
        ];
        array_push($temp_posts,$new_post);
    }

    return $temp_posts;
}

function get_portfolio_list() {
    global $wpdb;

    $temp_posts = [];
    $portfolios = $wpdb->get_results ( "
    SELECT * 
    FROM  $wpdb->posts
        WHERE post_type = 'portfolios'
        AND post_status = 'publish'
    " );

    foreach( $portfolios as $portfolio ){
        $thumbnail_url       = get_the_post_thumbnail_url($portfolio->ID,'full');
        $demopreview_link    = get_post_meta($portfolio->ID,'demopreview_link',true);
        $screenshot_external = get_post_meta($portfolio->ID,'screenshot_external',true);


        $taxonomy = 'project_type';
        $trm = $wpdb->get_results (  "
        SELECT tt.term_id, tt.description
        FROM {$wpdb->prefix}term_relationships AS tr
        INNER JOIN {$wpdb->prefix}term_taxonomy AS tt
            ON tr.term_taxonomy_id=tt.term_id
            AND tt.taxonomy = '{$taxonomy}'
            WHERE tr.object_id = {$portfolio->ID}
        " );
pretty_log('$trm',$trm);

        $terms = $wpdb->get_results ( "
        SELECT term_taxonomy_id 
        FROM  $wpdb->term_relationships
            WHERE object_id = $portfolio->ID
        " );
        // get term ids
        $term_ids = [];
        if( is_array($terms) ){
            foreach( $terms as $term ){
                $term_ids[] = $term->term_taxonomy_id;
            }
        }else{
            $term_ids[] = $terms[0]->term_taxonomy_id;
        }

        $project_type = [];
        $marketplace = [];
        // get term taxonomies
        foreach ( $term_ids as $term_id ){
            $taxonomy = $wpdb->get_results ( "
            SELECT term_id, taxonomy, description 
            FROM  $wpdb->term_taxonomy
                WHERE term_id = $term_id
            " );
            if( $taxonomy[0]->taxonomy == 'project_type' ){
                
                $term_name_slug = $wpdb->get_results ( "
                SELECT name, slug 
                FROM  $wpdb->terms
                    WHERE term_id = $term_id
                " );

                $schedule = $wpdb->get_results ( "
                SELECT meta_value 
                FROM  $wpdb->termmeta
                    WHERE meta_key = '_job_duration'
                    AND term_id = $term_id
                " );
                $project_type = [
                    'slug'         => $term_name_slug[0]->slug,
                    'name'         => $term_name_slug[0]->name,
                    'description'  => $taxonomy[0]->description,
                    'schedule'     => $schedule[0]->meta_value
                ];
            }
            if( $taxonomy[0]->taxonomy == 'marketplace' ){
                $term_name_slug = $wpdb->get_results ( "
                SELECT name, slug 
                FROM  $wpdb->terms
                    WHERE term_id = $term_id
                " );
                $marketplace = [
                    'slug'         => $term_name_slug[0]->slug,
                    'name'         => $term_name_slug[0]->name,
                ];
            }
        }
        
        $new_post = [
            'id'                 => $portfolio->ID,
            'title'              => $portfolio->post_title,
            'demopreview_link'   => $demopreview_link,
            'thumbnail_url'      => $thumbnail_url ? $thumbnail_url : $screenshot_external,
            'project_type'       => $project_type,
            'marketplace'        => $marketplace
        ];
        array_push($temp_posts,$new_post);

    }
    // pretty_log('temp_posts',$temp_posts);
    
    return $temp_posts;
}
// get_portfolio_list();

function get_site_data() {
	
	/**
	 * Menu List
	 */
    return [
		'site_info'         => get_site_info(),
		'menu'              => get_menu_list(),
		'user_profile'      => get_user_profile(),
		'posts_list'        => get_posts_list(),
		'portfolio_list'    => get_portfolio_list()
	];
}


add_action( 'rest_api_init', function () {
    register_rest_route( 'sajib/me/v1', 'data', array(
        'methods'             => 'GET',
        'callback'            => 'get_site_data',
		'permission_callback' => '__return_true'
    ) );
} );