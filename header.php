<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width" />
    <title>New はっちゃん</title>

    <!-- ▼adobe fonts▼ -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>https://use.typekit.net/bwk3qrt.css">
    <!-- ▼fontawesome▼ -->
    <link href="<?php echo get_template_directory_uri(); ?>https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
    
    <!-- ▼favicon▼ -->
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon_8chan.ico">
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="slick/slick.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  
  <body>
    <!-- ▼ローディングアニメーション▼ -->

    <div id="splash">
      <div id="splash-logo">
        <img class="loading-img" src="<?php echo get_template_directory_uri(); ?>/img/favicon_8chan.ico">
    </div>
  </div>

    <!-- cursor -->
    <div id="cursor">
      <img src="<?php echo get_template_directory_uri(); ?>/img/favicon_8chan.ico" alt="">
    </div>
    <!-- /cursor -->

    <!-- back-to-top -->
    <div class="btt" id="btt"></div>
    <!-- /back-to-top -->

    <!-- header -->
    <header class="header mv-fadeout" id="header">

        <nav class="header__nav" id="header__nav">
          <ul class="header__list">
            <li class="header__item"><a href="#about">About</a></li>
            <li class="header__item"><a href="#skill">Skills</a></li>
            <li class="header__item"><a href="#service">Service</a></li>
            <li class="header__item"><a href="#works">Works</a></li>
            <li class="header__item"><a href="#contact">Contact</a></li>
            <li class="header__item"><a href="https://twitter.com/8chan_web">Twitter</a></li>
          </ul>
        </nav>

        <div class="hamburger" id="hamburger">
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
          <span class="hamburger-bar"></span>
        </div>

        <?php wp_head(); ?>
    </header>