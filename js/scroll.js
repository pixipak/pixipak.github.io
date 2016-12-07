var $animation_elements = $('.animation-element');
var $window = $(window);
var scrollpos_prev = 0;

function calcChange(begin, end, range) {
  var diff;
  diff = end - begin;
  return diff / range;
}


function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var scrollpos = $(this).scrollTop();
  console.log(scrollpos);

  var r_change, g_change, b_change;
  if (scrollpos <= 665) {
    r_change = calcChange(128, 210, 665);
    g_change = calcChange(212, 144, 665);
    b_change = calcChange(247, 166, 665);

    var r = (Math.ceil(128 + scrollpos*r_change)).toString();
    var g = (Math.ceil(212 + scrollpos*g_change)).toString();
    var b = (Math.ceil(247 + scrollpos*b_change)).toString();
    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    console.log(rgb);

    $('#main-container').css('background-color', rgb);
  } else if (scrollpos > 665 && scrollpos <= 1330) {
    r_change = calcChange(210, 197, 665);
    g_change = calcChange(144, 179, 665);
    b_change = calcChange(166, 220, 665);

    diff = scrollpos-665;

    var r = (Math.ceil(210 + diff*r_change)).toString();
    var g = (Math.ceil(144 + diff*g_change)).toString();
    var b = (Math.ceil(166 + diff*b_change)).toString();
    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    console.log(rgb);

    $('#main-container').css('background-color', rgb);
  } else if ((scrollpos > 1330) && scrollpos <= 1995) {
    r_change = calcChange(197, 255, 655);
    g_change = calcChange(179, 255, 655);
    b_change = calcChange(220, 255, 655);

    diff = scrollpos-665*2;

    var r = (Math.ceil(197 + diff*r_change)).toString();
    var g = (Math.ceil(179 + diff*g_change)).toString();
    var b = (Math.ceil(220 + diff*b_change)).toString();
    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    console.log(rgb);

    $('#main-container').css('background-color', rgb);
  } else {
    $('#main-container').css('background-color', 'rgb(255, 255, 255)');
  }
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');