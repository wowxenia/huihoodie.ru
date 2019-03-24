 $(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


// modal 

let modal = document.querySelector("#modal"),
	modalOverlay = document.querySelector("#modal-overlay"),
	closeButton = document.querySelector("#close-buy");
	openButton = document.querySelectorAll(".buy");

if (openButton) {
  openButton.forEach(function(el){
     el.addEventListener('click', function () {
        modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
     });
  });
}

closeButton.addEventListener("click", function() {
	modal.classList.toggle("closed");
	modalOverlay.classList.toggle("closed");
});

