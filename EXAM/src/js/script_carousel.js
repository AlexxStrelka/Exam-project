
$(function() {
    $('.jcarousel').jcarousel({
        // Конфигурация инициализации карусели
        wrap: 'circular'
    });

    $('.leftArrow').jcarouselControl({ target: '-=1' });
    $('.rightArrow').jcarouselControl({ target: '+=1' });

//Подключен дополнительный плагин jQuery Touchwipe для перелистывания на тачскрине
 var $step1 = $('#step1');//Переменные для каждого блока со слайдером
 var $step2 = $('#step2');
 var $step3 = $('#step3');

  $step1.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step1.jcarousel('scroll', '+=1');
    },

    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step1.jcarousel('scroll', '-=1');
    }
  });

  $step2.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step2.jcarousel('scroll', '+=1');
    },
    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step2.jcarousel('scroll', '-=1');
    }
  });

  $step3.touchwipe({
    wipeLeft: function(event, direction, distance, duration, fingerCount) {   
      $step3.jcarousel('scroll', '+=1');
    },
    wipeRight: function(event, direction, distance, duration, fingerCount) {
      $step3.jcarousel('scroll', '-=1');
    }
  });


});























// window.onload = function(){

     

//     var block = window.document.getElementById("test"), // элемент

//         anim,                                   // таймаут

//         start,                                  // время старта

//         now,                                        // текущее время

//         duration = 1000,                            // продолжительность

//         from = 0,                                   // стартовая позиция

//         to = window.innerWidth/2,                   // финишная позиция

//         progress = 0,                               // прогресс анимации

//         x;                                      // позиция в текущий момент времени

     

//     // закон приращения аргумента (easing)

//     function delta(param){

//         return param;

//     };

     

//     // рендер

//     function render(){

//         now = new Date().getTime();

//         progress = (now-start)/duration;

//         x = (to - from)*delta(progress) + from;

         

//         test.style.left = x+"px";

         

//         // если не конец выполняем анимацию еще

//         if (progress < 1) anim = setTimeout(arguments.callee, 0)

//             // иначе заканчиваем анимацию

//             else

//             {

//                 clearTimeout(anim);

//                 progress = 0;

//             };

//     };

     

//     window.onclick = function(){

//         start = new Date().getTime();

//         render();

//     };

 

// };
