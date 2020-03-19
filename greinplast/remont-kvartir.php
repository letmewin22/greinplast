<?php
/*
Template Name: Apartment-renovation
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
      <h1 class="services-h1">Ремонт квартир и&nbsp;отделочные работы в&nbsp;Киеве</h1>
      <span class="descriptor">Ремонт квартир под ключ — услуга нашей компании, в ходе которой мы выполняем отделочные и ремонтные работы. Работаем с жилой и коммерческой недвижимостью.</span>
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
        <h2>Как мы проводим ремонтные работы?</h2>
        <div class="info-block-content__wrapper">
          <div class="info-block-content--left">
            <h3>Первый этап (черновые работы):</h3>
            <p><span class="romb">♦</span>демонтажные работы;</p>
            <p><span class="romb">♦</span>монтаж стен и перегородок;</p>
            <p><span class="romb">♦</span>монтаж электропроводки;</p>
            <p><span class="romb">♦</span>монтаж сантехнических сетей;</p>
            <p><span class="romb">♦</span>монтаж системы вентиляции;</p>
            <p><span class="romb">♦</span>штукатурные и малярные работы;</p>
            <p><span class="romb">♦</span>стяжка пола;</p>
            <p><span class="romb">♦</span>транспортные и погрузо-разгрузочные работы.</p>
          </div>
          <div class="info-block-content--right">
            <h3>Второй этап (чистовые работы):</h3>
            <p><span class="romb">♦</span>финишная отделка потолка и стен;</p>
            <p><span class="romb">♦</span>монтируем чистовой материал пола (керамическая плитка, паркет, ламинат...);</p>
            <p><span class="romb">♦</span>монтаж электрического оборудования;</p>
            <p><span class="romb">♦</span>монтаж сантехнического оборудования.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Отделочные работы в Киеве</h2>
          <p class="default-text">У нас можно заказать комплексный ремонт офиса, ресторана, дачного дома или отеля: от электрики и сантехники, до вентиляции и финишной отделки. Ремонт под ключ — ещё один способ сэкономить ваше время и нервы. В процессе берем на себя максимум обязательств по организации и проведению работ: выполним ремонт в сроки, практически не отвлекая заказчика. </p>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-2');?>" alt="decoration">
        </div>
      </div>
    </div>
  </section>
    <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Как заказать ремонтные работы?</h2>
          <p class="default-text">Для этого нужно определиться с <span class="hyper-link"><a href="interior-design.html">дизайном интерьера</a></span>. В идеале — иметь на руках дизайн-проект помещения с утверждёнными материалами, в таком случае ремонт можно сделать за 2-3 месяца. Финальный срок зависит от объёма работ.</p>
          <button class="button form-handler">
            <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
            <span class="text">Заказать просчёт</span></button>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-3');?>" alt="repairs-offer">
        </div>
      </div>
    </div>
  </section>
  <section class="section big-section">
    <div class="container section-container last">
      <div class="big-section-wrapper">
        <div class="big-section-wrapper--left">
          <img src="<?php echo get_field('большая_картинка');?>">
        </div>
        <div class="big-section-wrapper--right">
          <div class="default-content-left">
            <h2>Мастера для разных видов работ</h2>
            <p class="default-text">Компания Greinplast имеет 15-ти летний опыт работы. Мы занимаемся внутренней отделкой помещений, в частности всеми видами ремонтно-отделочных работ включая инженерные сети и коммуникации. <br><br> Предоставляем огромный спектр услуг от создания проекта до его реализации. Наши специалисты проходят обучение в Польше. Мастера знают, как правильно работать с продукцией и ответственно подходят к выполнению работ.</p>
          </div>
          <div class="default-content-left">
            <h2>Работаем со своими материалами</h2>
            <p class="default-text">Для отделочных работ используем собственную продукцию ТМ Greinplast. Мы не копируем продукцию других производителей, а создаём её.</p>
          </div>
          <div class="default-content-left">
            <h2>Гарантия на ремонтные работы</h2>
            <p class="default-text">Предоставляем гарантию 5 лет. Если по вине наших мастеров что-то случится — рассмотрим ситуацию, а затем исправим технические ошибки. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section with-bg services-with-bg" style="background-image: url(<?php echo get_field('картинка_для_блока_с_плашкой');?>);">
    <div class="container">
      <div class="with-bg-block with-bg-block-services">
        <h2>Цены на ремонтные и отделочные работы</h2>
        <h3>Стоимость начинается от <span class="green">1 500 гривен за м2.</span> Конечная сумма зависит от количества видов работ и выбранных материалов. </h3>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>
