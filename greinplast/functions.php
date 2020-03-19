<?php

function upload_allow_types( $mimes ) {
	// разрешаем новые типы
	$mimes['svg']  = 'text/plain'; // image/svg+xml
	$mimes['svg'] = 'image/svg+xml';
	$mimes['doc']  = 'application/msword'; 
	$mimes['woff'] = 'font/woff';
	$mimes['psd']  = 'image/vnd.adobe.photoshop'; 
	$mimes['djv']  = 'image/vnd.djvu';
	$mimes['djvu'] = 'image/vnd.djvu';

	return $mimes;
}
add_filter( 'upload_mimes', 'upload_allow_types' );

function mytheme_customize_register( $wp_customize ) {
	/*
	Добавляем секцию в настройки темы
	*/
	$wp_customize->add_section(
		'data_site_section',
		array(
			'title' => 'Даные о компании',
			'capability' => 'edit_theme_options',
			'description' => "Здесь можно указать данные о компании"
		)
	);
	/*
	Добавляем поле контактных данных
	*/
	$wp_customize->add_setting(
		'theme_contact_tel1',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'theme_contact_tel1_control',
		array(
			'type' => 'text',
			'label' => "Телефон",
			'section' => 'data_site_section',
			'settings' => 'theme_contact_tel1'
		)
	);
	/*
	Добавляем поле email
	*/
	$wp_customize->add_setting(
		'site_email',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_email_control',
		array(
			'type' => 'text',
			'label' => "Email",
			'section' => 'data_site_section',
			'settings' => 'site_email'
		)
  );
  		/*
	Добавляем поле фейсбук
	*/
	$wp_customize->add_setting(
		'site_fb',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_fb_control',
		array(
			'type' => 'text',
			'label' => "Ссылка на фейсбук",
			'section' => 'data_site_section',
			'settings' => 'site_fb'
		)
	);
		$wp_customize->add_setting(
		'site_insta',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_insta_control',
		array(
			'type' => 'text',
			'label' => "Ссылка на инстаграм",
			'section' => 'data_site_section',
			'settings' => 'site_insta'
		)
	);

		/*
	Добавляем поле твиттер
	*/
	$wp_customize->add_setting(
		'site_twitter',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_twitter_control',
		array(
			'type' => 'text',
			'label' => "Ссылка на твиттер",
			'section' => 'data_site_section',
			'settings' => 'site_twitter'
		)
	);

			/*
	Добавляем поле адрес
	*/
	$wp_customize->add_setting(
		'site_adress',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_adress_control',
		array(
			'type' => 'text',
			'label' => "Адрес компании",
			'section' => 'data_site_section',
			'settings' => 'site_adress'
		)
	);

				/*
	Добавляем поле ссылка на гугл карту
	*/
	$wp_customize->add_setting(
		'site_map_url',
		array(
			'default' => '',
			'type' => 'option'
		)
	);
	$wp_customize->add_control(
		'site_map_control',
		array(
			'type' => 'text',
			'label' => "Ссылка на гугл карту",
			'section' => 'data_site_section',
			'settings' => 'site_map_url'
		)
	);

	}
	add_action( 'customize_register', 'mytheme_customize_register' );



function onwp_disable_content_editor() {
	$post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
	if( !isset( $post_id ) ) return;
	$template_file = get_post_meta($post_id, '_wp_page_template', true);
			if ( $template_file == 'about.php' ) {
			remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'main.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'contacts.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'review.php' ){
				remove_post_type_support( 'page', 'editor' );
			} elseif ( $template_file == 'tour.php' ){
				remove_post_type_support( 'page', 'editor' );
			}
	}
add_action( 'admin_init', 'onwp_disable_content_editor' );


add_action('admin_menu', 'remove_admin_menu');
function remove_admin_menu() {
	remove_menu_page('edit.php'); // Посты блога
	remove_menu_page('edit-comments.php'); // Комментарии	

}

add_filter( 'excerpt_length', function(){
	return 9;
} );

add_filter( 'excerpt_more', 'new_excerpt_more' );
function new_excerpt_more( $more ){
	global $post;
	return '<span>...</span>';
}

add_image_size( 'blog_thumbnails', 391, 248 );

?>