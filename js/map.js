				var map = document.querySelector(".map a");
				var popupmap = document.querySelector(".modal-map");
				var closemap = popupmap.querySelector(".close-modal");
				var overlay = document.querySelector(".modal-overlay");

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