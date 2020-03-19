<?php
/*
Template Name: Production
*/
get_header();
?>
<div class="site-wrapper" data-router-wrapper>
   <div data-router-view="production">
<div class="overlay"></div>
<header class="production-header">
  <div class="container header-container">
    <div class="production-header-text">
      <h1>Строительная продукция Greinplast</h1>
      <p>В этом разделе вы можете ознакомиться с продукцией ТМ Greinplast.</p>
    </div>
  </div>
</header>
<main>
  <div class="container section-container last">
    <div class="products-wrapper">
      <div class="product-item">
          <h2>Фасадные системы</h2>
          <div class="product-item-flex">
            <div class="product-item-left">
              <div class="product-p">
                <div class="product-p-content__wrapper">
                  <div class="product-p-content--left">
                    <p><span class="romb">♦</span>Системный клей</p>
                    <p><span class="romb">♦</span>Грунтовые краски</p>
                    <p><span class="romb">♦</span>Тонкослойная штукатурка</p>
                    <p><span class="romb">♦</span>Мозаичная штукатурка</p>
                  </div>
                  <div class="product-p-content--right">
                    <p><span class="romb">♦</span>Фасадные краски</p>
                    <p><span class="romb">♦</span>Растворители</p>
                    <p><span class="romb">♦</span>Фасадные панели и облицовка</p>
                  </div>
                </div>
                <a class="button" href="#">
                  <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
                  <span class="text">Посмотреть каталог</span></a>
              </div>
            </div>
            <div class="product-item-right">
              <img src="<?php echo get_field('картинка-1');?>" alt="facades-system">
            </div>
          </div>
        <div class="product-item-line dark"></div>
      </div>
      <div class="product-item">
          <h2>Строительная химия</h2>
          <div class="product-item-flex">
            <div class="product-item-left">
              <div class="product-p">
                <div class="product-p-content__wrapper">
                  <div class="product-p-content--left">
                    <p><span class="romb">♦</span>Декоративные напольные системы</p>
                    <p><span class="romb">♦</span>Клей для плитки</p>
                    <p><span class="romb">♦</span>Самовыравнивающие смеси для пола</p>
                    <p><span class="romb">♦</span>Гидроизоляция</p>
                    <p><span class="romb">♦</span>Аксессуары для гидроизоляции</p>
                    <p><span class="romb">♦</span>Стяжка цементная</p>
                    <p><span class="romb">♦</span>Стяжка антигидридная</p>
                    <p><span class="romb">♦</span>Штукатурки обычные</p>
                  </div>
                  <div class="product-p-content--right">
                    <p><span class="romb">♦</span>Штукатурка гипсовая</p>
                    <p><span class="romb">♦</span>Штукатурка мелкозернистая</p>
                    <p><span class="romb">♦</span>Клея монтажные</p>
                    <p><span class="romb">♦</span>Битумные изоляции</p>
                    <p><span class="romb">♦</span>Полиуретановые пены и очистители</p>
                    <p><span class="romb">♦</span>Герметики</p>
                    <p><span class="romb">♦</span>Пропитки</p>
                    <p><span class="romb">♦</span>Материалы для дерева</p>
                  </div>
                </div>
                <a class="button" href="#">
                  <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
                  <span class="text">Посмотреть каталог</span></a>
              </div>
            </div>
            <div class="product-item-right">
              <img src="<?php echo get_field('картинка-2');?>" alt="facades-system">
            </div>
          </div>
        <div class="product-item-line dark"></div>
      </div>
            <div class="product-item">
          <h2>Изделия для интерьера</h2>
          <div class="product-item-flex">
            <div class="product-item-left">
              <div class="product-p">
                <div class="product-p-content__wrapper">
                  <div class="product-p-content--left">
                    <p><span class="romb">♦</span>Грунтовка</p>
                    <p><span class="romb">♦</span>Клей гипсовый</p>
                    <p><span class="romb">♦</span>Гипсовые смеси и шпаклевки</p>
                  </div>
                  <div class="product-p-content--right">
                    <p><span class="romb">♦</span>Шпаклевочные массы</p>
                    <p><span class="romb">♦</span>Декоративные штукатурки</p>
                    <p><span class="romb">♦</span>Краски для интерьера</p>
                  </div>
                </div>
                <a class="button" href="#">
                  <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
                  <span class="text">Посмотреть каталог</span></a>
              </div>
            </div>
            <div class="product-item-right">
              <img src="<?php echo get_field('картинка-3');?>" alt="facades-system">
            </div>
          </div>
        <div class="product-item-line dark"></div>
      </div>
    </div>
  </div>
    <section class="section with-bg" style="background-image: url(<?php echo get_field('картинка_для_блока_с_плашкой');?>);">
    <div class="container">
      <div class="with-bg-block with-bg-block-services">
        <h2>Как купить?</h2>
        <p>Чтобы купить нужный материал, оставьте заявку или напишите в онлайн-чат. Забрать товар можно в нашем шоу-руме или же заказать доставку на объект.</p>
        <button class="button border-button form-handler">
          <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
          <span class="text">Заказать товар</span></button>
      </div>
    </div>
  </section>
</main>
<?php get_footer(); ?>
