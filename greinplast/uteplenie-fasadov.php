<?php
/*
Template Name: Facades-warming
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
      <h1 class="services-h1">Утепление фасадов в Киеве от <span class="green">490 грн за м2</span></h1>
      <span class="descriptor">Утепление фасадов — услуга, в ходе которой мы подбираем материалы для утепления,
        привозим их на ваш объект и проводим работы по реставрации или утеплению от А до Я. </span>
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
            <h3>Создаём дизайн и разрабатываем проект</h3>
            <p><span class="romb">♦</span>Вместе с вами <span><a href="#">разрабатываем будущий дизайн фасада дома</a></span></p>
            <p><span class="romb">♦</span>Выезжаем на объект, делаем просчет и даем рекомендации касательно утепления</p>
          </div>
          <div class="info-block-content--right">
            <h3>Утепляем дом</h3>
            <p><span class="romb">♦</span>Подготавливаем, очищаем и наносим грунт на фасад</p>
            <p><span class="romb">♦</span>Клеим утеплитель: пенополистирол и минеральную вату, а затем фиксируем утеплитель дюбелями</p>
            <p><span class="romb">♦</span>Армируем фасад клеем и сеткой, наносим грунт, окрашенный в цвет декора</p>
            <p><span class="romb">♦</span>Наносим финишное покрытие: штукатурку, декоративные панели или краску</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="section">
    <div class="container section-container">
      <div class="default-content-wrapper">
        <div class="default-content-left">
          <h2>Утепление фасадов пенопластом: цена и преимущества</h2>
          <p class="default-text">Вы можете вернуть 35% от потраченной суммы на покупку отделочных материалов с помощью программы теплоэффективности IQ Energy от Европейского банка реконструкции и развития.<br><br>Один раз потратив деньги на утепление фасада квартиры, вы меньше тратите на оплату отопления. Вложение окупится за 5-6 лет, а с постоянным ростом тарифов — даже быстрее. Потом начинается этап «чистой» экономии. </p>
          <button class="button form-handler">
            <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
            <span class="text">Заказать энергоаудит</span></button>
        </div>
        <div class="default-content-right">
          <img src="<?php echo get_field('картинка-2');?>" alt="styrofoam">
        </div>
      </div>
    </div>
  </section>
  <section class="section big-section">
    <div class="container section-container last">
      <div class="big-section-wrapper">
        <div class="big-section-wrapper--left">
          <img src="<?php echo get_field('большая_картинка');?>" alt="services-big-img" alt="services-big-img">
        </div>
        <div class="big-section-wrapper--right">
          <div class="default-content-left">
            <h2>Используем продукцию ТМ Greinplast</h2>
            <p class="default-text">Мы — официальный дистрибьютор Greinplast, поэтому в работе используем свои <span class="hyper-link"><a href="<?php echo get_site_url();?>/produkcija">отделочные материалы.</a></span> Продукция изготавливается в Польше и соответствует европейским требованиям экологичной безопасности строительной продукции. Благодаря этому у нас не завышенная стоимость утепления фасада в Киеве. </p>
          </div>
          <div class="default-content-left">
            <h2>Выполняем работы от А до Я</h2>
            <p class="default-text">У нас свои мастера с практическим опытом работы с ТМ Greinplast. Ваш фасад будут утеплять люди, которые прошли обучение в Польше. Мы знаем, как правильно работать со своей продукцией, поэтому наши услуги по утеплению фасадов всегда качественные. </p>
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
        <h2>Цена утепления фасада в Киеве</h2>
        <h3>Начинается от <span class="green">490 гривен за м2.</span> Конечная сумма зависит от выбора финишного покрытия.
          В стоимость входят все затраты: </h3>
        <p><span class="romb">♦</span> покупка материалов;</p>
        <p><span class="romb">♦</span> доставка материалов на ваш объект; </p>
        <p><span class="romb">♦</span> работа мастеров.</p>
      </div>
    </div>
  </section>
</main>
<?php include get_theme_file_path( '/components/footer.php' ); ?>

<?php get_footer(); ?>
