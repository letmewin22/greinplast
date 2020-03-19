<?php
/*
Template Name: About
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="about">
<div class="overlay"></div>
<header class="about-header">
  <div class="container header-container">
    <h1>Компания</h1>
    <div class="about-header-text">
      <p>Мы — представительство компании Greinplast в Киеве. Производим и <span class="hyper-link"><a href="<?php echo get_site_url();?>/produkcija">продаём материалы для внутренней и наружной отделки</a></span>: фасадные системы, строительную химию и материалы для интерьера.</p>
      <p>Ещё одно направление — утепление фасадов и ремонтные работы в частных домах, коттеджах, квартирах и коммерческой недвижимости.</p>
      <p class="bold">К нам обращаются люди, которые хотят сделать современный дизайн фасада, сэкономить на отоплении и утеплить его эко-материалами</p>
    </div>
  </div>
  <div class="about-header-img">
    <img src="<?php echo get_field('картинка-1');?>" alt="header-img">
  </div>
</header>
<main>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Как создаются товары Greinplast?</h2>
          <p class="default-text">Мы общаемся со строителями, которые рассказывают нам о сложностях в отделке и утеплении домов. Эти рабочие детали становятся базой для создания новых материалов, которые помогают строителям качественнее и удобнее выполнять свою работу. <br><br>Не копируем продукцию других производителей, а создаём её в собственной лаборатории в Польше.</p>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-2');?>" alt="greinplast">
        </div>
      </div>
    </div>
  </section>
    <div class="info-block">
    <div class="container section-container">
      <div class="info-block-content about-content">
            <h3>Превращаем потребности людей в строительные материалы</h3>
            <p>Сначала создаём и тестируем образцы. Прежде чем попасть на потоковое производство, новый материал проходит несколько этапов улучшения состава.</p>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container section-container last">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Развиваем экосистему для строителей, дизайнеров, архитекторов</h2>
          <p class="default-text">Мы не просто продаём краску, штукатурку или пенопласт. Мы помогаем достичь результата — построить утеплённый и красивый дом.</p>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-3');?>" alt="ecosystem">
        </div>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>
