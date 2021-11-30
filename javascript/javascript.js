/*------------------------------------------------
header　固定
------------------------------------------------*/

$(function () {

  // falg変数のデフォルト値として「up」を指定
  var flag = "up";

  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が「0」より大きい場合
    if ($(this).scrollTop() > 150) {
　　　　// flag変数が「up」だった場合の処理
      if (flag === "up") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".header_scrool").stop().animate({
          // topの位置を「-56px」から「0」になるまでアニメーション
          top: 0,
          opacity: 1
        // アニメーション時間を「500ms」に設定
        }, 700)
        // flag変数の値を「down」に変更
        flag = "down";
      }
    // scrollTop()が「0」の場合
    } else {
      // flag変数が「down」だった場合の処理
      if (flag === "down") {
        // ヘッダーバーに対して、stop()メソッドを実行してから、
        // animate()メソッドを実行
        $(".header_scrool").stop().animate({
          // topの位置を「0」から「-56px」になるまでアニメーション
          top: "-50px",
          opacity: 0
        // アニメーション時間を「500ms」に設定
      }, 0);
        // flag変数の値を「up」に変更
        flag = "up";
      }

    }

  });

});


/*------------------------------------------------
dropdown　表示　カラー
------------------------------------------------*/
$(function(){
  $(".header-right-dropdown__menu").hide();
  $(".header-right__position").hover(function(){
    $(".header-right-dropdown__menu:not(:animated)",this).slideDown("fast");
  }, function(){
    $(".header-right-dropdown__menu",this).slideUp("fast");
  });
});

$(function(){
	$(".header-right-dropdown__menu").hover(function(){
		$(this).parent().toggleClass("header-right-position__on");
    $(this).prev(".header-right__item").toggleClass("header-right-item__on");
	}, function(){
		$(this).parent().removeClass("header-right-position__on");
    $(this).prev(".header-right__item").removeClass("header-right-item__on");
	});
});

/*------------------------------------------------
content カラー
------------------------------------------------*/
$(function(){
  $(".content-plans__plan").hover(function(){
    $(".content-plans-plan__body",this).toggleClass("content-plans-plan__body_on");
    $(".content-plans-plan-body-list__item",this).toggleClass("content-plans-plan-body-list__item_on");
    $(".content-plans-plan-body__dld",this).toggleClass("content-plans-plan-body__dld_on");
    $(".content-plans-plan-body__dld_1",this).toggleClass("content-plans-plan-body__dld_1_on");
    $(".content-plans-plan-body__dld_2",this).toggleClass("content-plans-plan-body__dld_2_on");
    $(".content-plans-plan-body__dld_3",this).toggleClass("content-plans-plan-body__dld_3_on");
  }, function(){
    $(".content-plans-plan__body",this).removeClass("content-plans-plan__body_on");
    $(".content-plans-plan-body-list__item",this).removeClass("content-plans-plan-body-list__item_on");
    $(".content-plans-plan-body__dld",this).removeClass("content-plans-plan-body__dld_on");
    $(".content-plans-plan-body__dld_1",this).removeClass("content-plans-plan-body__dld_1_on");
    $(".content-plans-plan-body__dld_2",this).removeClass("content-plans-plan-body__dld_2_on");
    $(".content-plans-plan-body__dld_3",this).removeClass("content-plans-plan-body__dld_3_on");
  });
});

/*------------------------------------------------
content 吹き出し
------------------------------------------------*/
$(function(){
  $(".fa-question-circle_gr").balloon({
    showDuration: "slow",
    showAnimation: function(d, c) { this.fadeIn(d, c); },
    css: {
      maxWidth: "200px",
      overflowwrap: "break-word",
      lineHeight: "1.3",
      padding: "3px 10px",
      boxSizing: "border-box",
      textAlign: "center",
      opacity: "0.65",
      fontSize: "1rem",
    }
  });
});
