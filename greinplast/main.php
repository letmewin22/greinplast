<?php
/*
Template Name: Main
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="main">
<div class="overlay"></div>
<header class="main-header">
  <div class="header-bg" style="background-image: url(<?php echo get_field('картинка-1');?>); opacity: 0"></div>
  <div class="header-bg" style="background-image: url(<?php echo get_field('картинка-2');?>); opacity: 1"></div>
  <div class="header-bg" style="background-image: url(<?php echo get_field('картинка-3');?>); opacity: 0"></div>
  <div class="container header-container">
    <span class="main-descriptor">Greinplast — эстетика жизненного пространства</span>
    <h1 class="main-h1"><span data-bg="0" class="h1-links">
    	<a href="<?php echo get_site_url();?>/uteplenie-fasadov">Утепляем фасады</a>
    	<span class="line"></span>
    </span>,проводим <span data-bg="1" class="h1-links">
      	<a href="<?php echo get_site_url();?>/remont-kvartir">ремонтные работы</a>
      	<span class="line"></span></span> и
      продаем <span data-bg="2" class="h1-links"><a href="<?php echo get_site_url();?>/produkcija">отделочные материалы</a><span class="line"></span></span></h1>
  </div>
  <div class="header-social">
    <?php include get_theme_file_path( '/components/social.php' ); ?>

  </div>
  <div class="scroll-down"></div>
</header>
<main>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Ремонтные и отделочные работы</h2>
          <p class="default-text">Выполняем ремонт «под ключ» жилой и коммерческой недвижимости: квартиры, коттеджи, офисы, рестораны и других объектов. <br><br>Создаём дизайн-проекты и осуществляем подбор материалов. Имеем необходимый опыт и высококвалифицированных специалистов.</p>
          <a class="button" href="<?php echo get_site_url();?>/remont-kvartir"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Больше о ремонте помещений</span></a>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-4');?>" alt="remont">
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Создание интерьеров</h2>
          <p class="default-text">Создаём дизайн-проекты «под ключ»: от планирования и визуализации будущего помещения до выбора материалов. Помогаем выбрать необходимый стиль для вашего жилья или коммерческой недвижимости.</p>
          <a class="button" href="<?php echo get_site_url();?>/dizajn-interera"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Больше о интерьерах</span></a>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-5');?>" alt="interiors">
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Утепление и реставрация<br>фасадов</h2>
          <p class="default-text">Утепляем фасады частных домов, квартир и коммерческой недвижимости. Благодаря энергоэффективности, вы будете меньше тратить на оплату отопления и комфортно чувствовать себя в собственном жилье в любое время года. <br><br>Создаем дизайн фасада и воплощаем его в реальность используя материалы ТМ Greinplast. Предоставляем гарантию на работу и материалы</p>
          <a class="button" href="<?php echo get_site_url();?>/uteplenie-fasadov"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Больше об утеплении фасадов</span></a>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-6');?>" alt="restavration">
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section-container last">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Продукция Greinplast</h2>
          <p class="default-text">Мы — эксклюзивный импортер строительных и отделочных материалов для фасадов, а также интерьеров польского производителя ТМ Greinplast.</p>
          <a class="button" href="<?php echo get_site_url();?>/produkcija"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Больше о продукции</span></a>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-7');?>" alt="product">
        </div>
      </div>
    </div>
  </section>
  <section class="section with-bg" style="background-image: url(<?php echo get_field('картинка_для_блока_с_плашкой');?>);">
    <div class="container">
      <div class="with-bg-block">
        <h2>О компании</h2>
        <p>Мы — польская группа компаний, производим, продаём и используем собственные строительные материалы для внутренней и внешней отделки в течение 20 лет в Европе и Украине.</p>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section-container last">
      <h2>Почему стоит заказать<br> эти услуги у нас?</h2>
      <div class="icons-items">
        <div class="icon-item">
          <?php include get_theme_file_path( '/components/materials-icon.php' ); ?>

          <div class="icon-item-text">
            <h3>Работаем с качественными материалами Greinplast</h3>
            <p class="default-text">Знаем, как сочетать между собой материалы, работать с ними и какие инструменты для этого нужны. Каждый наш специалист имеет сертификат, подтверждающий его теоретические знания и практические навыки.</p>
          </div>
        </div>
        <div class="icon-item">
          <?php include get_theme_file_path( '/components/garanties.php' ); ?>
          <div class="icon-item-text">
            <h3>Гарантия на работу и материалы 7 лет</h3>
            <p class="default-text">Мы уверены в качестве своих товаров, поэтому даем гарантию 7 лет на материалы и работу. Если у вас возникнут вопросы относительно качества выполненных работ — вы можете получить бесплатную компенсацию, если ошибка возникла по нашей вине.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>


