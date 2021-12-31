<?php 

// タイトルタグの出力
add_theme_support('title-tag');

// アイキャッチ画像設定の有効化
add_theme_support('post-thumbnails');

function load_script() {
    if ( !is_admin() ) {
      // ここでファイルの読み込みを行う

        /* リセットcss */
        wp_enqueue_style(
            'reset-css',
            get_template_directory_uri() . '/css/reset.css'
        );
    
        /* style.css */
        wp_enqueue_style(
            'main-css',
            get_template_directory_uri() . '/css/style.css'
        );

        /* slick.css */
        wp_enqueue_style(
            'slick-css',
            get_template_directory_uri() . '/slick/slick.css'
        );

        /* adobe fonts */
        function kinsta_add_adobe_fonts() {
            wp_register_style( 'adobeFonts', 'https://use.typekit.net/bwk3qrt.css');
            wp_enqueue_style( 'adobeFonts');
           }
           add_action( 'wp_enqueue_scripts', 'kinsta_add_adobe_fonts' 
        );
    
        /* slick cdn */
        wp_enqueue_script( 'slick',
            'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
            array(),
            true 
        );

        /* slick.js */
        wp_enqueue_script(
            'slick-script',
            get_template_directory_uri() . '/slick/slick.js',
            array('jquery'),
            false,
            true
        );

        wp_enqueue_script(
            'jquery',
            'https://code.jquery.com/jquery-3.5.1.min.js',
            array(),
            false,
            true
          );
  
        /* main.js */
        wp_enqueue_script(
            'main-script',
            get_template_directory_uri() . '/js/main.js',
            array('jquery'),
            false,
            true
        );
  
    }
  }
  add_action('init', 'load_script');

?>