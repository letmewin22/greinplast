<div class="navbar">
  <div class="container nav-container">
    <a href="<?php echo home_url( '/' );?>">
      <img data-src-white="<?php echo get_template_directory_uri()?>/img/logo-min.png" data-src-dark="<?php echo get_template_directory_uri()?>/img/logo-min-black.png" class="logo-img desk" src="<?php echo get_template_directory_uri()?>/img/logo-min.png" alt="greinplast">
      <img data-src-white="<?php echo get_template_directory_uri()?>/img/logo-mob.png" data-src-dark="<?php echo get_template_directory_uri()?>/img/logo-mob-black.png" class="logo-img mob" src="<?php echo get_template_directory_uri()?>/img/logo-mob.png" alt="greinplast">
    </a>
    <nav>
      <div class="nav-scroll">
        <div class="nav-mobile-header">
          <a href="<?php echo home_url( '/' );?>">
            <img class="logo-img-mob" src="<?php echo get_template_directory_uri()?>/img/logo-mob-black.png" alt="greinplast">
          </a>
          <div class="nav-mobile-right-content">
            <button class="underline-button black mob-header-btn form-handler">Связаться с нами</button>
            <div class="close-icon"><svg style="display: block;" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.29289" y1="14.0907" x2="14.0208" y2="1.36282" stroke="#292B33" stroke-width="2" />
                <line x1="1.70711" y1="1.29289" x2="14.435" y2="14.0208" stroke="#292B33" stroke-width="2" />
              </svg>
            </div>
          </div>
        </div>
        <ul>
          <li class="with-drpdn">
            <div class="dropbtn">фасады
              <span class="only-mob">&#9662;</span>
            </div>
            <div class="dropdown-content">
              <a href="<?php echo get_site_url();?>/dizajn-fasadov">дизайн фасадов</a>
              <a href="<?php echo get_site_url();?>/uteplenie-fasadov">утепление фасадов</a>
            </div>
          </li>
          <li class="with-drpdn">
            <div class="dropbtn">интерьеры
              <span class="only-mob">&#9662;</span>
            </div>
            <div class="dropdown-content">
              <a href="<?php echo get_site_url();?>/dizajn-interera">дизайн интерьеров</a>
              <a href="<?php echo get_site_url();?>/remont-kvartir">ремонт квартир</a>
            </div>
          </li>
          <li><a href="<?php echo get_site_url();?>/produkcija">продукция</a></li>
          <li class="with-drpdn">
            <div class="dropbtn">компания
              <span class="only-mob">&#9662;</span>
            </div>
            <div class="dropdown-content">
              <a href="<?php echo get_site_url();?>/o-nas">о нас</a>
              <a href="<?php echo get_site_url();?>/partnjoram">партнёрам</a>
            </div>
          </li>
          <li><a href="<?php echo get_site_url();?>/blog">блог</a></li>
          <li><a href="<?php echo get_site_url();?>/kontakty">контакты</a></li>
        </ul>
      </div>
    </nav>
    <button class="button border-button nav-button form-handler">
      <span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span><span class="text">Связаться с нами</span>
    </button>
    <svg class="burger" stroke="white" width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1" x2="28" y2="1" stroke-width="2" />
      <line y1="8" x2="28" y2="8" stroke-width="2" />
      <line y1="15" x2="28" y2="15" stroke-width="2" />
    </svg>
  </div>
</div>
