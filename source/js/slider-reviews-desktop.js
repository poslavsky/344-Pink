(function() {
	function Slideshow(element) {
		this.el = document.querySelector(element);
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector(".reviews__wrapper");
			this.slides = this.el.querySelectorAll(".reviews__slid");
			this.previous = this.el.querySelector(".reviews__btn-prev");
			this.next = this.el.querySelector(".reviews__btn-next");
			this.index = 0;
			this.total = this.slides.length;
			this.actions();
		},
		_slideTo: function(slide) {
			var currentSlide = this.slides[slide];
			this.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
		},
		actions: function() {
			var self = this;
			self.next.addEventListener("click", function() {
				self.index++;
				self.previous.style.display = "block";
				if (self.index == self.total - 1) {
					self.index = self.total - 1;
					self.next.style.display = "none";
				}
				self._slideTo(self.index);
			}, false);
			self.previous.addEventListener("click", function() {
				self.index--;
				self.next.style.display = "block";
				if (self.index == 0) {
					self.index = 0;
					self.previous.style.display = "none";
				}
				self._slideTo(self.index);
			}, false);
		}
	};
	document.addEventListener("DOMContentLoaded", function() {
		var slider = new Slideshow(".reviews");
	});
})();
