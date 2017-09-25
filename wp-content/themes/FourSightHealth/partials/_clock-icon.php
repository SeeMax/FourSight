<svg class="clock-svg" xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" viewBox="0 0 250 210">
  <g class="clock">
    <!-- <path d="M60 0h120l60 100-60 100h-120l-60-100z" /> -->
    <circle class="clock-frame" cx="119.9705887" cy="104.9705887" r="102"/>
    <circle class="clock-frame-in" stroke-dasharray="6.4, 40" cx="119.9705887" cy="104.9705887" r="89"/>
    <g transform="translate(122 104)">
    	<circle class="seconds-center" r="7" />
      <path class="seconds-hand" data-hand="second" d="M 0 0 l0 -88, 2 0, 0 88z" />
      <path class="clock-hand" data-hand="minute" d="M -4 0 l0 -75, 6 0, 0 75z" />
      <path class="clock-hand" data-hand="hour" d="M -4 0 l0 -55, 6 0, 0 55z" />
      <circle class="clock-center" r="6" />
    </g>
  </g>
</svg>


<script>
window.addEventListener('load', function() {
	var degree = 360 / 60,
	rAF = window.requestAnimationFrame || function(fn) {
		setTimeout(fn, degree);
	},
	update = function() {
		var date = new Date(),
		times = {
			second: date.getSeconds(),
			minute: date.getMinutes(),
			hour: (date.getHours() * 5 + 1)
		};

		Object.keys(times)
		.forEach(function(key) {
			hand[key].setAttribute('transform', 'rotate(' + (times[key] * degree) + ')');
		});

		rAF(update);
	},
	hand = {};

	Array
		.from(document.querySelectorAll('[data-hand]'))
		.forEach(function(element) {
			hand[element.getAttribute('data-hand')] = element;
		});

	rAF(update);
});
</script>

