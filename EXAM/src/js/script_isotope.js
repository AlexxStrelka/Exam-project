$(function() {

jQuery.support.cors = true;//For IE 8+

var loadImages = function(searchInput, e){
	if (e && typeof e != 'undefined') {
		e.preventDefault();
	}

	//Очищаем предыдущие результаты поиска
	//$('.item').remove();

	//var $searchInput = $('#searchId').val();
	
//Добавляем ключевое слово поиска к URL запроса and KEY
	var APIkey = '2968420-d00a0636cd5a05d99ce5547d4';
	var urlik = "https://pixabay.com/api/?key="+APIkey+"&q="+ searchInput + "&per_page=12";
  

	$.getJSON(urlik, function(data){
		$('.isotope').remove(); //очищаем от картинок, которые были загружены дефолтно или в предыдущем поиске
		$('.isotope-contaner').append($('<div class="isotope">'));		

		var container = $('.isotope');
 		var dataset = data.hits;
 		  for (i=0; i<dataset.length; i++) {
				 	var url = dataset[i].webformatURL;
				 	var title = dataset[i].tags;

				 	var imageContainer = $('<div></div>');
				 	imageContainer.addClass('item');
					var image = $('<img/>');
					image.attr('src', url);
					image.attr('alt', title);
					imageContainer.html('<a href="'+url+'" title="'+title+'">'+title+"</a>"); 

					imageContainer.append(image);
					container.append(imageContainer);
			}

		// инициализация Isotope после того как все картинки были загружены (imagesLoaded)
		container.imagesLoaded(
			function() {
			  container.isotope({
				  masonry : {}
				});
			}
		);

		});//getJSON
};//loadImage

//Рэндомный набор слов для картинок первой загрузки страницы
var randomCategories = [
		'cat',
		'Thailand+travelling',
		'sport+wealth',
		'wellness+SPA',
		'universe+cosmos'
	];


//Событие при нажатии кнопки Поиск или Enter (в обеих случаях срабатывает событие click)
	$('.searchBtn').click(function (e) {
		loadImages($('#searchId').val(), e);
	});

//Рендомно определяем категорию картинок, которая отобразится при первой загрузке страницы
var randomIndex = Math.round(randomCategories.length * Math.random());
	randomIndex = randomIndex
		 ? randomIndex
		 : 1;

	var initializeCategory = randomCategories[randomIndex - 1];

	loadImages(initializeCategory);



});