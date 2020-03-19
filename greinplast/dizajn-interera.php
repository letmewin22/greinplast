<?php
/*
Template Name: Interiors-design
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="services">
<div class="overlay"></div>
<header class="main-header">
  <div class="header-bg" style="background-image: url(<?php echo get_field('картинка-1');?>); opacity: 1"></div>
  <div class="container header-container">
    <div class="services-text-container">
      <h1 class="services-h1">Дизайн интерьера в&nbsp;Киеве</h1>
      <span class="descriptor">Дизайн интерьера — услуга, в ходе которой мы создаём дизайн-проект интерьера жилой или коммерческой недвижимости различной сложности. </span>
    </div>
  </div>
  <div class="header-social">
    <?php include get_theme_file_path( '/components/social.php' ); ?>
  </div>
  <div class="scroll-down"></div>
</header>
<main>
  <div class="info-block">
    <div class="container section-container">
      <div class="info-block-content">
        <h2>Как мы работаем?</h2>
        <div class="info-block-content__wrapper">
          <div class="info-block-content--left">
            <p><span class="romb">♦</span>разрабатываем план строительных работ;</p>
            <p><span class="romb">♦</span>составляем проектную документацию;</p>
            <p><span class="romb">♦</span>делаем расчет количества материалов;</p>
            <p><span class="romb">♦</span>предлагаем решения по стилю оформления, типам отделочных материалов;</p>
          </div>
          <div class="info-block-content--right">
            <p><span class="romb">♦</span>подбираем материалы и мебель;</p>
            <p><span class="romb">♦</span>создаём финальные визуализации;</p>
            <p><span class="romb">♦</span>предоставляем авторский надзор: от создания дизайн-проекта до его реализации.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Дизайн интерьера квартиры, частных домов, офиса</h2>
          <p class="default-text">Мы работаем комплексно: от выбора стиля и мебели до ремонта согласно дизайн-проекта. Сначала утверждаем планировку, а затем визуализируем ваши желания.<br><br>Если вы не знаете, чего хотите — помогаем определиться со стилем, показываем примеры разных интерьеров. Мы берём себя все сложности ремонта, ведём авторский и технический надзор: от создания дизайн-проекта до его реализации.</p>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-2');?>" alt="interior-design">
        </div>
      </div>
    </div>
  </section>
    <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Хотите заказать дизайн интерьера?</h2>
          <p class="default-text">Оставляйте заявку или приезжайте к нам в офис. Мы покажем примеры наших работ и обсудим ваши желания, а затем приступим к реализации. У нас в шоу-руме можно посмотреть и пощупать материалы, которые будут использоваться в вашем интерьере. </p>
          <button class="button form-handler">
            <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
            <span class="text">Оставить заявку</span></button>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-3');?>" alt="design-order">
        </div>
      </div>
    </div>
  </section>
  <section class="section big-section">
    <div class="container section-container last">
      <div class="big-section-wrapper">
        <div class="big-section-wrapper--left">
          <img src="<?php echo get_field('большая_картинка');?>" alt="services-big-img">
        </div>
        <div class="big-section-wrapper--right">
          <div class="default-content-left">
            <h2>Подбираем материалы</h2>
            <p class="default-text">Выбираем подходящий стиль, декор стен, материалы, помогаем определиться с цветовыми решениями, и знаем, как сделать помещения функциональнее. </p>
          </div>
          <div class="default-content-left">
            <h2>Дизайн-проект в Киеве: от визуализации до готового ремонта</h2>
            <p class="default-text">Мы не только рисуем красивые проекты, но и помогаем их реализовать. Наши мастера сделают <span class="hyper-link"><a href="<?php echo get_site_url();?>/remont-kvartir">«ремонт под ключ»</a></span> в вашем помещении согласно проекта в течение 2-3 месяцев. Окончательный срок зависит от объёма работы. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section with-bg services-with-bg" style="background-image: url(<?php echo get_field('картинка_для_блока_с_плашкой');?>);">
    <div class="container">
      <div class="with-bg-block with-bg-block-services">
        <h2>Цены на дизайн интерьера</h2>
        <p>Каждый проект уникален, поэтому просчитывается отдельно. Стоимость дизайна интерьера квартиры или дома напрямую зависит от сложности выбранного стиля. Дизайн интерьеров офисных помещений и помещений общего назначения рассчитывается индивидуально. </p>
        <h3>Цена зависит от:</h3>
        <p><span class="romb">♦</span> площади помещения;</p>
        <p><span class="romb">♦</span> количества визуализаций;</p>
        <p><span class="romb">♦</span> требований по функциональности.</p>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>
