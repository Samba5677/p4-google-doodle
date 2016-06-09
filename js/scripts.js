var $vcd = ('.vcd');
var $v = ('.v');
var $c = ('.c');
var $d = ('.d');

TweenMax.from($v, 1, {
  opacity: 0,
  ease: Elastic.easeOut.config(15, 0.3), y: 0,
  scale: 5,
});

TweenMax.from($c, 1, {
  opacity: 0,
  delay: 1,
  ease: Elastic.easeOut.config(15, 0.3), y: 0,
  scale: 5,
});

TweenMax.from($d, 1, {
  opacity: 0,
  delay: 2,
  ease: Elastic.easeOut.config(15, 0.3), y: 0,
  scale: 5,
});