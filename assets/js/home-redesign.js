$(document).ready(function () {
  $('.list-item .list-item__desription .short-description').each(function (i) {
    lengthText = $(this).text().length;
    if (lengthText > 75) {
      $(this).text($(this).text().substr(0, 75) + '...');
    }
  });

  $('.list-item').hover(
    function () {
      $(this).find('span.minus, span.plus, input').addClass('opacity');
    },
    function () {
      $(this).find('span.minus, span.plus, input').removeClass('opacity');
      var inputnumber = $(this).find('input.only_number');
      if ($(inputnumber).val() != 0) {
        $(this).find('span.minus, span.plus, input').addClass('opacity');
      } else {
        $(this).find('span.minus, span.plus, input').removeClass('opacity');
      }
    },
  );
  $('.contacts-content li').matchHeight({
            byRow: false
        }); 
});
