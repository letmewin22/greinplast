<?php
/*
Template Name: blogArticle
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="blogArticle">
<div class="overlay"></div>
<header class="blog-header">
  <div class="blog-header-bg" style="background-image: url(<?php echo get_template_directory_uri()?>/img/blog-header.jpg);"></div>
  <div class="container header-container blog-header-container">
    <h1>Новости</h1>
  </div>
</header>
<main>
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <!-- Цикл WordPress -->
  <article class="section">
    <div class="container section-container last">
      <div class="article-wrapper">
        <div class="article-left">

          <img src="<?php echo get_field('картинка_для_поста')[sizes][large];?>" alt="article-img">
          <div class="after-img-text"><?php echo get_field('текст_под_картинкой'); ?></div>
        </div>
        <div class="article-right">
          <h2><?php the_title(); ?></h2>
          <div>
          <?php the_content(); ?>
        </div>
        </div>
      </div>
    </div>
  </article>
<?php endwhile; else : ?>
  <p>Записей нет.</p>
<?php endif; ?>
  
</main>
<?php get_footer(); ?>