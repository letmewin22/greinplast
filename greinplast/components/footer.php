<footer class="main-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-top-left">
        <h2>
          <?php echo get_field('заголовок_для_футера_страницы');?>
        </h2>
        <p class="default-text white"><?php echo get_field('описание_для_футера');?></p>
        <button class="button border-button footer-button form-handler"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Записаться</span></button>
      </div>
      <div class="footer-top-right">
        <div class="footer-contant-wrapper">
          <h3>E-mail</h3>
          <span><a href="mailto:<?php echo get_option('site_email');?>"><?php echo get_option('site_email');?></a></span>
        </div>
        <div class="footer-contant-wrapper">
          <h3>Телефон</h3>
          <span><a href="tel:<?php echo preg_replace('/\D+/', '', get_option('theme_contact_tel1'));?>"><?php echo get_option('theme_contact_tel1');?></a></span>
        </div>
        <div class="footer-contant-wrapper">
          <h3>Офис</h3>
          <span><a rel="noopener" target="_blank" href="<?php echo get_option('site_map_url');?>"><?php echo get_option('site_adress');?></a></span>
        </div>
      </div>
    </div>
    <hr>
    <div class="footer-bottom">
      <div class="footer-bottom-left">
        <h3 data-alternate="Наши представительства">Представительства:</h3>
        <button id="representations-btn" data-alternate-btn="Показать" class="underline-button">Показать больше</button>
        <button style="display: none" id="representations-hidden" class="underline-button">Скрыть</button>
      </div>
      <div class="footer-bottom-right">
        <div class="representations">
          <p>Киев, ул. Парково-Сырецкая. 4В (044) 334-45-26; (067) 761-13-63</p>
          <p>Тернополь. ул. Степана Будного (067) 351-02-20; (097) 907-49-66 vorobchuk_84@ukr.net</p>
          <p>Ровенская обл., Ровенский р-н, с. Б. Омеляна, ул. Авиаторов, 1 (098) 514-58-74 grigoukr82@gmail.com</p>
          <p style="display: none">Ивано-Франковск, ул. Полевая, 14 (095) 707-35-98; (098) 068-83-26 ivsmoliy@ukr.net</p>
          <p style="display: none">Черновцы, ул. Героев Майдана, 172; ул. Строжинецкая, 192А (050) 374-57-02</p>
          <p style="display: none">Дрогобыч, ул. И.Вильде, 8 (0324) 450-180; (067) 314-29-37 greinplastkarpaty@gmail.com </p>
          <p style="display: none">Ужгород, ул. 8 марта, 33В (099) 26-73-601</p>
          <p style="display: none">Луцк, ул. Конякина, 16А (050) 404-88-33; (050) 9-163-168 fasad-expo@ukr.net</p>
        </div>
      </div>
    </div>
  </div>
  <?php include get_theme_file_path( 'e.php' ); ?>
</footer>
