jQuery(document).ready(function () {
  jQuery(".hero-section a").click(function () {
    jQuery(".popup").show();
  });

  jQuery("span.close").click(function () {
    jQuery(".popup").hide();
  });
});
