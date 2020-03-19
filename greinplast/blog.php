<?php
/*
Template Name: Blog
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="blog">
<div class="overlay"></div>
<header class="blog-header">
  <div class="blog-header-bg" style="background-image: url(<?php echo get_template_directory_uri()?>/img/blog-header.jpg);"></div>
  <div class="container header-container blog-header-container">
    <h1>Новости</h1>
  </div>
</header>
<main>
  <section class="section">
    <div class="container last">
      <div class="blog-wrapper">
      <?php   
              $args = array(
                  'post_type' => 'blog_posts',
                  'posts_per_page' => 40
              );    
              $my_query = new WP_Query( $args ); 
              if ( $my_query->have_posts() ) {
                  while ( $my_query->have_posts() ) {
                      $my_query->the_post();
                      ?>
              <a href="<?php the_permalink();?>" class="blog-article">

                <div class="blog-article__img" style="background-image: url(<?php echo get_field('картинка_для_поста')[sizes][blog_thumbnails];?>);"></div>
                <div class="blog-article__text">
                  <h3 class="blog-article__header"><?php the_title(); ?></h3>
                  <p class="blog-article__description"><?php the_excerpt(); ?></p>
                </div>
              </a>
                      <?php             
                  }            
              }       
              wp_reset_postdata();             
          ?> 
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

