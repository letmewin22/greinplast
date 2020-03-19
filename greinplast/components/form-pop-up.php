<div class="pop-up-form">
  <div class="pop-up-form-scroll">
    <div class="thank-you-window">
      <span class="thank-you-text">Спасибо за заявку. Свяжемся с вами в течение 10 минут.</span>
    </div>
    <div class="close-form-icon"><svg style="display: block;" width="25" height="25" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.29289" y1="14.0907" x2="14.0208" y2="1.36282" stroke="white" stroke-width="2" />
        <line x1="1.70711" y1="1.29289" x2="14.435" y2="14.0208" stroke="white" stroke-width="2" />
      </svg>
    </div>
    <h2 class="form-h2">Пожалуйста, оставьте вашу заявку в форме ниже</h2>
    <div class="form-wrapper">
      <form data-url="<?php echo get_template_directory_uri()?>/mail.php" class="form" name="form">
        <!-- Hidden Required Fields -->
        <input type="hidden" name="project_name" value="greinplast site">
        <input type="hidden" name="admin_email" value="hello@emotion-agency.com">
        <input type="hidden" name="form_subject" value="Заявка с сайта greinplast">
        <!-- END Hidden Required Fields -->
        <div class="input-wrapper first">
          <input type="text" class="text-field" maxlength="256" name="Имя" id="name" autocomplete="off">
          <label for="name" class="label">
            <span class="label-content">Имя</span>
          </label>
        </div>
        <div class="input-wrapper">
          <input type="text" class="text-field" maxlength="256" name="E-mail" id="email" autocomplete="off">
          <label for="email" class="label">
            <span class="label-content">E-mail</span>
          </label>
        </div>
        <div class="input-wrapper">
          <input type="tel" class="text-field" maxlength="256" name="Телефон" id="phone" autocomplete="off">
          <label for="phone" class="label">
            <span class="label-content">Номер телефона</span>
          </label>
          <span data-value="10" class="form-validate-text">минимум <span class="koef-inp"></span> символов. Осталось: <span class="koef-outp"></span></span>
        </div>
        <div class="form-wrap">
          <div class="private-policy">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</div>
          <button type="submit" class="button border-button form-btn"><span class="bg"><?php include get_theme_file_path( '/components/blot.php' ); ?></span>
            <span class="text form-button">Оставить заявку</span>
        </div>
      </form>
    </div>
  </div>
</div>
