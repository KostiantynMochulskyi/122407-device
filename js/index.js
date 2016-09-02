			var writeus = document.querySelector(".writeus-btn");
			var popup = document.querySelector(".modal-writeus");
			var close = popup.querySelector(".close-modal");
			var map = document.querySelector(".map a");
			var popupmap = document.querySelector(".modal-map");
			var closemap = popupmap.querySelector(".close-modal");
			var overlay = document.querySelector(".modal-overlay");

			writeus.addEventListener("click", function(event){
				event.preventDefault();
				overlay.classList.add("modal-overlay-show");
				popup.classList.add("modal-writeus-show");
			});
			close.addEventListener("click", function(event){
				event.preventDefault();
				popup.classList.remove("modal-writeus-show");
				overlay.classList.remove("modal-overlay-show");
			});
			overlay.addEventListener("click", function(event){
				event.preventDefault();
				overlay.classList.remove("modal-overlay-show");
				popup.classList.remove("modal-writeus-show");
				popupmap.classList.remove("modal-map-show");
			});
			map.addEventListener("click", function(event){
				event.preventDefault();
				overlay.classList.add("modal-overlay-show");
				popupmap.classList.add("modal-map-show");
			});
			overlay.addEventListener("click", function(event){
				event.preventDefault();
				overlay.classList.remove("modal-overlay-show");
				popup.classList.remove("modal-writeus-show");
				popupmap.classList.remove("modal-map-show");
			});
			closemap.addEventListener("click", function(event){
				event.preventDefault();
				popupmap.classList.remove("modal-map-show");
				overlay.classList.remove("modal-overlay-show");
			});