$(function() {


//Событие при нажатии кнопки Поиск или Enter (в обеих случаях срабатывает событие click)
	$('.searchBtn').click(function(e){
	e.preventDefault();

	//Очищаем предыдущие результаты поиска
	$('.item').remove();

	var $searchInput = $('#searchId').val();
	
//Добавляем ключевое слово поиска к URL запроса and KEY
	var APIkey = '2968420-d00a0636cd5a05d99ce5547d4';
	var urlik = "https://pixabay.com/api/?key="+APIkey+"&q="+ $searchInput + "&per_page=9";
  console.log("URL = ", urlik);


	$.getJSON(urlik, function(data){
				 
 		var dataset = data.hits;
 
		  for (i=0; i<dataset.length; i++) {

				 	var url = dataset[i].webformatURL;
				 	var title = dataset[i].tags;
				 	var imageContainer = document.createElement("div");
				 	imageContainer.classList.add('item');
console.log("imageContainer", imageContainer);
				 	
					
					var image = document.createElement("img");
					image.src = url;
					image.alt = title;

					imageContainer.innerHTML = '<a href="'+url+'" title="'+title+'">'+title+"</a>"; 
					imageContainer.appendChild(image);

				  $('.isotope').append(imageContainer);
			}
	});//getJSON

});//click

// инициализация Isotope после того как все картинки были загружены
var $container = $('.isotope').imagesLoaded( function() {
  $container.isotope({
    masonryHorizontal : {
    rowHeight : 970
  }
  });
});



});