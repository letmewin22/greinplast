<?php
/*
Template Name: Facades-design
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
      <h1 class="services-h1">Дизайн фасада дома в Киеве</h1>
      <span class="descriptor">Дизайн фасада дома — услуга, в ходе которой мы подбираем декоративные финишные материалы и создаём уникальный внешний вид фасада.</span>
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
            <p><span class="romb">♦</span>Создаём дизайн-проект</p>
            <p><span class="romb">♦</span>Утверждаем его с заказчиком</p>
          </div>
          <div class="info-block-content--right">
            <p><span class="romb">♦</span>Привозим наши материалы на объект</p>
            <p><span class="romb">♦</span>Выполняем работы согласно дизайн-проекту</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Дизайн фасадов домов: как сделать красиво?</h2>
          <p class="default-text">Заказывая утепление фасадов, люди практически не уделяют время выбору декора. Но мы считаем, что экстерьер дома — это показатель вкуса хозяев. <br><br>Вместе с заказчиком мы подбираем фактуру и цвет декоративного финишного покрытия, которое подчеркивает архитектурные преимущества дома.</p>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-2');?>" alt="facades-design">
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper reverse">
        <div class="default-content-left">
          <h2>Как заказать дизайн фасада дома?</h2>
          <p class="default-text">При заказе утепления или отделки фасада — визуализация проекта бесплатная. На этом этапе можно изменить цвет или материал финишной отделки. Вы можете подобрать красивое покрытие, которое подойдёт для вашего дома, офиса или другого здания.</p>
          <button class="button form-handler">
            <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
            <span class="text">Заказать</span></button>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-3');?>" alt="order-design">
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
            <h2>Используем продукцию ТМ Greinplast</h2>
            <p class="default-text">Создавая дизайн-проект фасада, используем реальные цвета и фактуры финишных покрытий из ассортимента. Благодаря этому картинки на экране монитора и конечный результат не будут отличаться, как это часто бывает в архитектурных студиях.</p>
          </div>
          <div class="default-content-left">
            <h2>От визуализации до реализации </h2>
            <p class="default-text">Создаём дизайн-проект, подбираем материалы и привозим их на ваш объект. Дальше к работе приступают наши мастера по утеплению фасадов: они воплощают дизайн-проект фасада в жизнь. <br><br>
            Они знают, как правильно работать с продукцией Greinplast, потому что проходят обучение на заводе в Польше. </p>
          </div>
          <div class="default-content-left">
            <h2>Гарантия на работу и материалы</h2>
            <p class="default-text">Предоставляем гарантию 7 лет на обустройство вашего фасада от производителя. Если по нашей ошибке с фасадом что-то случится — мы рассмотрим ситуацию и компенсируем ваши потери. </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section with-bg services-with-bg" style="background-image: url(<?php echo get_field('картинка_для_блока_с_плашкой');?>);">
    <div class="container">
      <div class="with-bg-block with-bg-block-services">
        <h2>Цена дизайна фасадов домов в Киеве</h2>
        <h3>Стоимость оговаривается индивидуально. В неё входит:</h3>
        <p><span class="romb">♦</span> просчёт площади;</p>
        <p><span class="romb">♦</span> компьютерная 3D-визуализация;</p>
        <p><span class="romb">♦</span> выбор и покупка материалов.</p>
        <p class="with-bg-block-offer">При заказе <span class="hyper-link"><a href="<?php echo get_site_url();?>/uteplenie-fasadov">утепления фасада</a></span> — <span class="green">скидка 60% на дизайн фасада.</span></p>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>
