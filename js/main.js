$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    // headerにopenクラスがあるか判定する
    if ($("#header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("#header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("#header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $(".mask").on("click", function () {

    $("#header").removeClass("open");
  });


  $("#nav a").on("click", function () {
    // #nav aをクリックしたときに実行する

    $("#header").removeClass("open");
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {

    // アンカーの値(出発地点)の取得
    let href = $(this).attr('href');
    // 移動先を取得
    let target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先の位置を調整
    let position = target.offset().top -= 50;
    // スクロール速度を500ミリ秒にする
    let speed = 500;
    // スムーススクロール
    $('html, body').animate({ scrollTop: position }, 650, "swing");
    return false;
  });


  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadeIn").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });






});

