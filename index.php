<?php get_template_part('header'); ?>

<?php
  $id_prefix = 'artinretail-';
  $sections = get_field('sections');
  foreach ($sections as $section):
    $title = $section['title'];
    $desc = $section['description'];
    $id = $id_prefix . str_replace(' ', '', $title);
    $type = $section['section_type'];
    $logos = $section['logos'];
    ?>
    <div id='<?php echo $id; ?>' class='section <?php if ($type == 'home'): ?>section--home<?php endif ?>'>
      <div class='section__inner'>
        <?php if ($logos): ?>
          <div class='logo-grid'>
            <div class='logo-grid__title'><?php echo $desc; ?></div>
            <div class='logo-grid__inner'>
              <?php foreach ($logos as $img): ?>
                <div class='logo-grid__logo parallax'>
                  <img src='<?php echo $img['url']; ?>' />
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endif; ?>
        <div class='section__background-image'>
          <?php if ($section['background_image']): ?>
            <img src='<?php echo $section['background_image']; ?>' />
          <?php endif; ?>
        </div>
      </div>
    </div>
  <?php
  endforeach;
?>

<div id='menu-button-target' class='menu-button'>&times;</div>
<div id='menu-target' class='menu'>
  <div class='menu__inner'>
    <?php foreach ($sections as $section):
      $id = $id_prefix . str_replace(' ', '', $section['title']);
      ?>
      <?php if ($section['section_type'] != 'home'): ?>
        <div class='menu__item'>
          <a href='#<?php echo $id; ?>'><?php echo $section['title']; ?></a>
        </div>
      <?php endif; ?>
    <?php endforeach; ?>
  </div>
</div>

<?php get_template_part('footer'); ?>
