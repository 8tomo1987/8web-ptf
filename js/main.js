"use strict";

$(function () {

  // ▼ローディングアニメーション▼

  $("#splash-logo").delay(1500).fadeOut('slow'); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash").delay(1200).fadeOut('slow'); //ローディング画像を1.2秒（1200ms）待機してからフェードアウト



  /* =================== */
  /*        wipein       */
  /* =================== */
  
  // $(".js-wipe").addClass("is-active");

  $(function(){
    $(window).scroll(function (){
      $(".wipein").each(function(){
        console.log($(this));
        var imgPos = $(this).offset().top;   
        var scrollwipe = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scrollwipe > imgPos - windowHeight + windowHeight/4){
          $(this).addClass("show");
        }
      });
    });
  });
  
  
  // MEMO)
  // addClass : https://uxmilk.jp/9231
  
  /* =================== */
  /*        cursor       */
  /* =================== */

  $(function(){
  
    //カーソル要素の指定
    var cursor=$("#cursor");
    
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",function(e){
      //カーソルの座標位置を取得
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      cursor.css({
        "opacity":".8",
        "top":y+"px",
        "left":x+"px"
      });
    });
  });
  

  /* =================== */
  /*     back-to-top     */
  /* =================== */

  $(".btt").addClass("is-active");
  // 1. クリックしたらサイトの一番上に戻る
  // .bttを、クリックしたら、
  $(".btt").click(function () {
    // 0.6sかけて、画面を、
    $("body,html").animate({
      // サイトの一番上に、移動させる。
      scrollTop: 0,
    },600);
  });
  // 2. 一定量スクロールしたら、表示
  // 画面を、スクロールして、
  $(window).scroll(function () {
    // スクロール量
    let scroll = $(window).scrollTop();
    // 1画面分の高さ
    let wh = $(window).height();
    // スクロール量が、1画面分の高さを、超えたとき、
    if (scroll > wh) {
      // .bttに対して、is-activeクラスを追加する。
      $(".btt").addClass("is-active");
    } else {
      // .bttに対して、is-activeクラスを削除する。
      $(".btt").removeClass("is-active");
    }
  });
  // MEMO)
  // click     : https://uxmilk.jp/10065
  // animate   : https://uxmilk.jp/40486
  // scrollTop : https://uxmilk.jp/44962

  /* =================== */
  /*   	  hamburger      */
  /* =================== */

  // #hamburgerをクリックしたときに、
  $("#hamburger").click(function () {
    // 1. メニューが開閉する。
    $("#header__nav").fadeToggle();
    // 2. メニューの形が変わる。
    $(this).toggleClass("is-active");
    // 3. スクロール防止
    $("body").toggleClass("is-active");
  });

  // MEMO)
  // scroll : https://www.task-notes.com/entry/20150605/1433473200
  // height : https://uxmilk.jp/40801

  /* =================== */
  /*  mvスクロールにつれて消える       */
  /* =================== */

  // 100pxほどスクロールするまでに要素が消えていく


  // $(window).scroll(function() {
  //     let mvScroll = $(this).scrollTop();
  //     $('.mv-fadeout').css({
  //         // backgroundSize: (100 + scroll/3)  + "%",
  //         // top: -(scroll/10)  + "%",
  //         opacity: (mvScroll - 0.1)
  //     });
  // });  



  // $('.mv-fadeout').each(function () {
  //     var $win = $(window),
  //         $winH = $win.height(),
  //         $connect = $(this),
  //         position = $connect.offset().top,
  //         current = 0,
  //         fadeoutScroll;
  //     $win.on('load scroll', function () {
  //       fadeoutScroll = $win.scrollTop();
  //       current = (1 - (position - fadeoutScroll) / $winH);
  //       if (current < 0.9) {
  //         current = 1;
  //       }
  //       if (fadeoutScroll > position - $winH) {
  //         $connect.css({opacity: current});
  //       }
  //     });
  //   });


// ▼▼
$(window).scroll(function () {
  
  if($(window).scrollTop() > 16) {
    $('.mv-fadeout').css({opacity: 0});
  } else {
    $('.mv-fadeout').css({opacity: 1});
  }
});
// ▲▲


// ▼▼
$(window).scroll(function () {
  
  if($(window).scrollTop() > 20) {
    $('.mv__flame,.mv__slides-1').addClass("mv_large");
  } 
  else {
    $('.mv__flame,.mv__slides-1').removeClass("mv_large");
  }
  //   $('.mv__flame,.mv__slides-1').css({
  //     width: 50 + "vw",
  //     height: 100 + "vh"
  //   });
  // } 
  // else {
  //   $('.mv__flame,.mv__slides-1').css({
  //     width: inhe,
  //     height: 100 + "vh"
  //   });
  // }
});
// ▲▲






  // $(window).scroll(function(){
  //   // let scroll = $(window).scrollTop();
  //   $(window).scroll(function () {
  //     // 2
  //     let scroll = -$(window).scrollTop() / 20;
  
  //     // 3
  //     $("").css({
  //       opacity: 0,
  //     });

  //   });
  // });




  /* =================== */
  /*    	  header追従       */
  /* =================== */

  // 画面一枚分スクロールした時に、headerを固定
  $(window).scroll(function () {
    // スクロール量
    let scroll = $(window).scrollTop();
    // 1画面分の高さ
    let wh = $(window).height();
    // スクロール量が、1画面分の高さを、超えたとき、
    if (scroll > wh) {
      // .headerに対して、is-activeクラスを追加する。
      $(".header").addClass("is-active");
    } else {
      // .headerに対して、is-activeクラスを削除する。
      $(".header").removeClass("is-active");
    }
  });

  /* =================== */
  /*   	  slideshow      */
  /* =================== */

  let nowPage1 = 0; // 現在の画像
  let nextPage1 = 1; // 次の画像
  const slides1 = $("#slideshow-1 img");
  const slideLength1 = slides1.length; // 4
  const fadeTime1 = 1500; // 1.5s
  const showTime1 = 5500; // 4s

  // index番号：0,1,2,3...

  slides1.hide();
  slides1.eq(0).show();

 // 1回分の切り替わり処理
  const slideshow1 = () => {
    nextPage1 = (nowPage1 + 1) % slideLength1;

    // 1. 1枚目の画像が、1.5sかけて、ふわっと消える。
    slides1.eq(nowPage1).fadeOut(fadeTime1);
    // 2. 2枚目の画像が、1.5sかけて、ふわっと出てくる。
    slides1.eq(nextPage1).fadeIn(fadeTime1);

    nowPage1 = nextPage1;
  };

 setInterval(slideshow1, showTime1);

//////////////

  let nowPage2 = 0;
  let nextPage2 = 1;
  const slides2 = $("#slideshow-2 img");
  const slideLength2 = slides2.length;
  const fadeTime2 = 1500;
  const showTime2 = 4500;

  slides2.hide();
  slides2.eq(0).show();

  const slideshow2 = () => {
    nextPage2 = (nowPage2 + 1) % slideLength2;

    slides2.eq(nowPage2).fadeOut(fadeTime2);
    slides2.eq(nextPage2).fadeIn(fadeTime2);

    nowPage2 = nextPage2;
  };

  setInterval(slideshow2, showTime2);

////////////////

  /* =================== */
  /*   	   slidein       */
  /* =================== */

  // なにを、なにしたときに、
  // もし〇〇だったら、
  // なにの、なにが、どうなる

  // 画面を、スクロールしたとき、
  // サービスのセクションまでスクロールしたら、
  // 隠れている要素が、スライドインする

  // 画面を、スクロールしたとき、
  $(window).scroll(function () {
    // 1. サイトトップからサービスセクションまでの距離
    let trigger = $(".js-trigger").offset().top - $(window).height() / 1.3;
    // 2. スクロール量
    let scroll = $(window).scrollTop();
    
    // もしサービスのセクションまでスクロールしたら、
    if (trigger < scroll) {
      // 隠れている要素が、スライドインする
      $(".js-slide").addClass("is-active");
    }
  });

  /* =================== */
  /*    carousel panel   */
  /* =================== */

  const carousel = $("#carousel");

  carousel.slick({
    // nextボタンのHTML作成
    nextArrow: '<div id="btn-next" class="works-btn works-btn-next"></div>',
    // prevボタンのHTML作成
    prevArrow: '<div id="btn-prev" class="works-btn works-btn-prev"></div>',
    // 自動スライド
    autoplay: true,
    // 1画面に何枚表示するか
    slidesToShow: 3,
    // レスポンシブ対応
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      },
    ],

  });

   // 1. HTML,CSSのみのサイト作成(見た目)
  // 2. jQueryでslick読み込み
  // 3. ボタン箇所をHTMLから切り取り、slickに貼り付け

  

  /* =================== */
  /*       parallax      */
  /* =================== */

  // パララックス：「視差効果」
  // 参考サイト：https://comme.fit/

  /*
  作り方：
  1. スクロールイベントを作成
  2. スクロール量を取得
  3. スクロール量を割った値を、動かしたい要素の「transform: translateY(ここ)」に代入
  */

  // 書いてみよう！
  $(window).scroll(function(){
    // let scroll = $(window).scrollTop();
    $(window).scroll(function () {
      // 2
      let scroll = -$(window).scrollTop() / 20;
  
      // 3
      $(".js-parallax").css({
        transform: "translateY(" + scroll + "%)",
      });

    });
  });

});

// ▼一文字ずつ登場するテキストアニメーション

const CLASSNAME = "-visible";
const TIMEOUT = 100;
const $target = $(".mv__name-main, .mv__name-sub");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    // $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * .2);

// ▲一文字ずつ登場するテキストアニメーション