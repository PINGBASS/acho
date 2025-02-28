$(document).ready(function(){


    
   // 전체메뉴 toggle btn
   $('#headertoggle').click(function(){
        var submenu = $(this).parent().parent().next("div#toggle_nav");
        if(submenu.is(":visible")){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });
    
    //첫번째메뉴
    //$('.mainnav1').click(function(){
      //  var submenu = $('div.NAVone');
        
       // if(submenu.is(":visible")){
         //   submenu.slideUp();
        //}else{
          //  submenu.slideDown();
       // }
    //});
    //두번째메뉴
    //$('.mainnav2').click(function(){
      //  var submenu = $('div.NAVtwo');
        //if(submenu.is(":visible")){
          //  submenu.slideUp();
        //}else{
          //  submenu.slideDown();
       // }
    //});
    //세번째메뉴
    //$('.mainnav3').click(function(){
      //  var submenu = $('.NAVthree');
        //if(submenu.is(":visible")){
          //  submenu.slideUp();
        //}else{
          //  submenu.slideDown();
        //}
    //});
    //네번째메뉴
    //$('.mainnav4').click(function(){
      //  var submenu = $('.NAVfor');
        //if(submenu.is(":visible")){
          //  submenu.slideUp();
        //}else{
          //  submenu.slideDown();
       // }
    //});
    //다섯번째메뉴
    //$('.mainnav5').click(function(){
      //  var submenu = $('.NAVfive');
        //if(submenu.is(":visible")){
          //  submenu.slideUp();
        //}else{
          //  submenu.slideDown();
        //}
    //});

//첫번째 메뉴가 열리고 두번째 메뉴를 열때 첫번째 메뉴가 닫히게 하는  코드는 패스.저장해둠.
// 메뉴 클릭 시, 기존에 열려 있던 메뉴를 닫고 독단적으로 새 메뉴만 열도록 하는 코드임.
var lastOpenedMenu = null;
$('.mainnav1').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');

    if (lastOpenedMenu && lastOpenedMenu !== submenu1) {
        lastOpenedMenu.slideUp();
    }

    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    // 첫 번째 메뉴만 열기
    if (!submenu1.is(":visible")) {
        submenu1.slideDown();
        lastOpenedMenu = submenu1;
    }
});

// 두 번째 메뉴
$('.mainnav2').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');
    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    // 두 번째 메뉴만 열기
    if (!submenu2.is(":visible")) {
        submenu2.slideDown();
    }
});

// 세 번째 메뉴
$('.mainnav3').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');
    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    // 세 번째 메뉴만 열기
    if (!submenu3.is(":visible")) {
        submenu3.slideDown();
    }
});

// 네 번째 메뉴
$('.mainnav4').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');
    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    // 네 번째 메뉴만 열기
    if (!submenu4.is(":visible")) {
        submenu4.slideDown();
    }
});

// 다섯 번째 메뉴
$('.mainnav5').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');
    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    // 다섯 번째 메뉴만 열기
    if (!submenu5.is(":visible")) {
        submenu5.slideDown();
    }
});




$('#headertoggle').click(function(){
    var submenu1 = $('div.NAVone');
    var submenu2 = $('div.NAVtwo');
    var submenu3 = $('div.NAVthree');
    var submenu4 = $('div.NAVfor');
    var submenu5 = $('div.NAVfive');
    var submenu6 = $('ID.headertoggle');
    // 모든 서브 메뉴를 닫는다.
    submenu1.slideUp();
    submenu2.slideUp();
    submenu3.slideUp();
    submenu4.slideUp();
    submenu5.slideUp();
    submenu6.slideUp();
    
    // 다섯 번째 메뉴만 열기
    if (!submenu6.is(":visible")) {
        submenu6.slideDown();
    }
});









//로그인페이지 Echo art

$('.line22').click(function(){
    var submenu = $('div.line222');
    if(submenu.is(":visible")){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});
//로그인페이지 관람
$('.line33').click(function(){
    var submenu = $('div.line333');
    if(submenu.is(":visible")){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});

//로그인페이지 전시안내
$('.line44').click(function(){
    var submenu = $('div.line444');
    if(submenu.is(":visible")){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});

//로그인페이지 문화행사
$('.line55').click(function(){
    var submenu = $('div.line555');
    if(submenu.is(":visible")){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});

//로그인 페이지 소식
$('.line66').click(function(){
    var submenu = $('div.line666');
    if(submenu.is(":visible")){
        submenu.slideUp();
    }else{
        submenu.slideDown();
    }
});
    //각메뉴 클릭시 서브메뉴 작성
    $('#mobiletoggle').click(function(){
      $('#toggle_nav_mobile').animate({'left':0},800);
    });

    $('.close-btn').click(function(){
      $(this).parents('#toggle_nav_mobile').animate({'left':'-100%'},800);
  }) 



  







    //스크롤시에 이미지가 나오게 하기.메인로고
    window.addEventListener('scroll', function() {
    const image = document.getElementById('image');
    const imagePosition = image.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (imagePosition < screenHeight) {
    image.classList.add('visible');
    }
    });


    

    //콜라보레이션 이미지 차례대로 나오게 함..
    window.addEventListener('scroll', function() {
        const images = document.querySelectorAll('.image1'); 
        const screenHeight = window.innerHeight; 
      
        images.forEach((image, index) => {
          const imagePosition = image.getBoundingClientRect().top; 
      
        
          if (imagePosition < screenHeight) {
            setTimeout(() => {
              image.classList.add('visible');
            }, index * 500); 
          }
        });
      });
      


      
//어린이연계프로그램  슬라이드 자동으로 되게 만들었음-----------------

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length; 
let currentIndex = 1; 
const intervalTime = 5000; 


function moveToSlide(index) {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(-${index * 100}%)`;
}


function handleInfiniteLoop() {
  if (currentIndex === 0) {
  
    slides.style.transition = 'none';
    currentIndex = slideCount - 2;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  } else if (currentIndex === slideCount - 1) {
    
    slides.style.transition = 'none';
    currentIndex = 1;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}


setInterval(() => {
  currentIndex++;
  moveToSlide(currentIndex);

 
  setTimeout(handleInfiniteLoop, 500);
}, intervalTime);

/*배두나.신비----------------------------------------------------------------------*/




//ineer 

const sliderTrack = document.querySelector("#gallery-slider .slider-track");
const totalSlides = sliderTrack.children.length; 
let currentSlideIndex = 0;


function moveToNextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides; 
  sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}


setInterval(moveToNextSlide, 4000);

    
   
});


