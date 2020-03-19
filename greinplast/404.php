<?php

get_header();
?>
<div class="overlay"></div>
<header class="main-header">
  <div class="header-bg" style="background-image: url(<?php echo get_template_directory_uri()?>/img/404.jpg); opacity: 1"></div>
  <div class="container header-container">
    <div class="services-text-container">
      <h1 class="error-h1">404</h1>
      <span class="error-descriptor">Такой страницы не существует. Попробуйте <br><span class="hyper-link"><a href="<?php echo home_url( '/' );?>">вернуться на главную</a></span></span>
    </div>
  </div>
  <div class="header-social">
    <?php include get_theme_file_path( '/components/social.php' ); ?>
  </div>
</header>
<?php get_footer(); ?>
