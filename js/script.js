history.scrollRestoration = "manual";
new fullpage("#fullpage", {
  // Navigation
  menu: "#menu",
  verticalCentered: true,
  navigation: true,
  navigationPosition: "left",
  anchors: ["Home", "About", "Skills", "Design", "Publishing"],

  // Scrolling
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  afterLoad: function (old_elem, new_elem, direction) {
    // 색인 사용
    if (new_elem.index == 0) {
      sec0();
    }
    if (old_elem.index == 0) {
      sec0_reset();
    }
    if (new_elem.index == 1) {
      sec1();
    }
    if (old_elem.index == 1) {
      sec1_reset();
    }
    if (new_elem.index == 2) {
      sec2();
    }
    if (old_elem.index == 2) {
      sec2_reset();
    }
    if (new_elem.index == 3) {
      sec3();
    }
    if (old_elem.index == 3) {
      sec3_reset();
    }
    if (new_elem.index == 4) {
      sec4();
    }
    if (old_elem.index == 4) {
      sec4_reset();
    }
  },
});

$(document).ready(function () {
  $("#intro").on("scroll touchmove mousewheel", function (event) {
    event.preventDefault();
    event.stopPropagation();
  });

  $(".introNotice>h1").click(function () {
    $("#intro").stop().fadeOut();

    // 타이핑
    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".homeTitle>ul>li").length;

    // 타이핑될 텍스트를 가져온다
    var typingTxt = $(".homeTitle>ul>li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다
    if (typingBool == false) {
      // 타이핑이 진행되지 않았다면
      typingBool = true;
      var tyInt = setInterval(typing, 100); // 반복동작
    }

    function typing() {
      $(".typing ul li").removeClass("on");
      $(".typing ul li").eq(liIndex).addClass("on");
      if (typingIdx < typingTxt.length) {
        // 글자를 이어 붙일 경우에 색을 넣어줄 글자를 지정한다

        if (
          typingTxt[typingIdx] == "p" ||
          typingTxt[typingIdx] == "o" ||
          typingTxt[typingIdx] == "r" ||
          typingTxt[typingIdx] == "t" ||
          typingTxt[typingIdx] == "f" ||
          typingTxt[typingIdx] == "l" ||
          typingTxt[typingIdx] == "i"
        ) {
          var inText = "<span>" + typingTxt[typingIdx] + "</span>";
          $(".typing ul li").eq(liIndex).append(inText); // 한글자씩 이어준다
        }
        // 타이핑될 텍스트 길이만큼 반복
        else {
          $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다
        }
        typingIdx++;
      } else {
        if (liIndex < liLength - 1) {
          // 다음문장으로  가기위해 인덱스를 1증가
          liIndex++;
          // 다음문장을 타이핑하기위한 셋팅
          typingIdx = 0;
          typingBool = false;
          typingTxt = $(".homeTitle>ul>li").eq(liIndex).text();

          // 다음문장 타이핑전 1초 쉰다
          clearInterval(tyInt);
          // 타이핑종료

          setTimeout(function () {
            // 1초후에 다시 타이핑 반복 시작
            tyInt = setInterval(typing, 100);
          }, 800);
        } else if (liIndex == liLength - 1) {
          // 마지막 문장까지 써지면 반복종료
          clearInterval(tyInt);
          $(".typing ul li").removeClass("on");

          // 라인
          anime({
            targets: ".line",
            width: "100%",
            easing: "linear",
            duration: 1000,
          });
        }
      }
    }
  });
  // 모드
  let mode = document.querySelector("#mode");
  let switched = false;
  mode.addEventListener("click", () => {
    var tl = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1000,
    });
    tl.add({ targets: ".moon-shadow", opacity: switched ? 0 : 1 }, 0)
      .add(
        {
          targets: "#mode",
          background: switched ? "#ffffff" : "#424242",
          borderRadius: switched ? "10%" : "50%",
        },
        0
      )
      .add(
        { targets: ".sun-circle", fill: switched ? "#4999b2" : "#e8eaf6" },
        0
      )
      .add(
        { targets: ".sun-rays", stroke: switched ? "#4999b2" : "#424242" },
        0
      )
      .add(
        {
          targets: ".moon-shadow",
          fill: switched ? "#4999b2" : "#424242",
          translateX: switched ? 108 : 0,
          translateY: switched ? -8 : 0,
          scale: switched ? 0 : 1,
        },
        0
      )
      .add({ targets: ".svg-container", rotate: switched ? 40 : 0 }, 0)
      .add(
        {
          targets: "body",
          background: switched ? "#ffffff" : "#212121",
          color: switched ? "#000000" : "#ffffff",
        },
        0
      )
      .add(
        {
          targets: "li a",
          color: switched ? "#000000" : "#ffffff",
        },
        0
      )
      .add(
        {
          targets: ".lineWrap1 .line",
          background: switched ? "#000000" : "#ffffff",
        },
        0
      )
      .add(
        {
          targets: ".top",
          background: switched ? "#ffffff" : "#353535",
        },
        0
      );

    if (!switched) {
      switched = true;
    } else {
      switched = false;
    }
  });
});
function sec0() {
  // 네비게이션
  anime({
    targets: "#fp-nav",
    opacity: 0,
    easing: "linear",
    duration: 500,
  });

  // 라인
  anime({
    targets: ".line",
    width: "100%",
    easing: "linear",
    duration: 1000,
  });
}

function sec0_reset() {
  // 라인
  anime({
    targets: ".line",
    width: "0%",
    easing: "linear",
    duration: 1000,
  });
}
function sec1() {
  // 네비게이션
  anime({
    targets: "#fp-nav",
    opacity: 1,
    easing: "linear",
    duration: 500,
  });
}
function sec1_reset() {}
function sec2() {
  // 네비게이션
  anime({
    targets: "#fp-nav",
    opacity: 1,
    easing: "linear",
    duration: 500,
  });

  // 게이지
  let timeline = anime.timeline({
    easing: "linear",
    duration: 400,
  });
  timeline
    .add({
      targets: ".gauge01",
      width: "100%",
    })
    .add({
      targets: ".gauge02",
      width: "100%",
    })
    .add({
      targets: ".gauge03",
      width: "95%",
    })
    .add({
      targets: ".gauge04",
      width: "80%",
    })
    .add({
      targets: ".gauge05",
      width: "90%",
    })
    .add({
      targets: ".gauge06",
      width: "75%",
    })
    .add({
      targets: ".gauge07",
      width: "95%",
    });
}
function sec2_reset() {
  anime({
    targets: ".gauge",
    width: 0,
  });
}

function sec3() {
  // 네비게이션
  anime({
    targets: "#fp-nav",
    opacity: 1,
    easing: "linear",
    duration: 500,
  });
  // 탭 메뉴 초기화
  $(".workTab li:first-child")
    .addClass("active")
    .siblings()
    .removeClass("active");
  $("#workTab1").addClass("active").siblings().removeClass("active");

  // 탭 메뉴
  $(".workTab li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".workContents").removeClass("active");
    $("#" + result).addClass("active");
  });
  // Graphic Design 슬라이드
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Graphic Design 팝업
  $("#workTab1 .gallery .swiper-wrapper > li").click(function () {
    pop1 = $(this).index();
    $(".g_page span:nth-child(1)").text(pop1 + 1);
    $(".popup1 .popup_inner > li").eq(pop1).show();
    $(".popup1").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup1 .btnPopup .btn_page .left").click(function () {
    $(".popup1").scrollTop(0);
    if (pop1 > 0) {
      $(".popup1 .popup_inner>li").eq(pop1).stop().fadeOut();
      pop1--;
      $(".g_page span:nth-child(1)").text(pop1 + 1);
      $(".popup1 .popup_inner>li").eq(pop1).stop().fadeIn();
    }
  });
  $(".popup1 .btnPopup .btn_page .right").click(function () {
    $(".popup1").scrollTop(0);
    if (pop1 < 9) {
      $(".popup1 .popup_inner>li").eq(pop1).stop().fadeOut();
      pop1++;
      $(".g_page span:nth-child(1)").text(pop1 + 1);
      $(".popup1 .popup_inner>li").eq(pop1).stop().fadeIn();
    }
  });
  $(".popup1 .btnPopup .btn_close").click(function () {
    $(".popup1").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
  });

  // UIUX Design 슬라이드
  let $text = $("#workTab2 .text ul li");
  let $mobileScreen = $("#workTab2 .mobile-mockup_wrap .mobile-screen ul li");
  let $padScreen = $("#workTab2 .pad-mockup_wrap .pad-screen ul li");

  let $btnL = $(".btn_design .btn_left");
  let $btnR = $(".btn_design .btn_right");

  let oldText = 0;
  let newText = 0;
  let oldMobile = 0;
  let newMobile = 0;
  let oldPad = 0;
  let newPad = 0;

  let count = $text.length;

  // UIUX Design 슬라이드 > 전환효과 함수
  function changeText(newText) {
    if (oldText != newText) {
      $text.eq(oldText).removeClass("active");
      $text.eq(newText).addClass("active");
    }
    oldText = newText;
  }

  function changeMobile(newMobile) {
    if (oldMobile != newMobile) {
      $mobileScreen.eq(oldMobile).fadeOut().removeClass("active");
      $mobileScreen.eq(newMobile).fadeIn().addClass("active");
    }
    oldMobile = newMobile;
  }
  function changePad(newPad) {
    if (oldPad != newPad) {
      $padScreen.eq(oldPad).fadeOut().removeClass("active");
      $padScreen.eq(newPad).fadeIn().addClass("active");
    }
    oldPad = newPad;
  }

  // UIUX Design 슬라이드 > 자동함수
  function autoText() {
    newText++;
    if (newText > count - 1) {
      newText = 0;
    }
    changeText(newText);
  }
  function autoMobile() {
    newMobile++;
    if (newMobile > count - 1) {
      newMobile = 0;
    }
    changeMobile(newMobile);
  }
  function autoPad() {
    newPad++;
    if (newPad > count - 1) {
      newPad = 0;
    }
    changePad(newPad);
    $(".btn_design .btn_num").text(newText + 1);
  }
  timer1 = setInterval(autoText, 4000);
  timer2 = setInterval(autoMobile, 4000);
  timer3 = setInterval(autoPad, 4000);

  // UIUX Design 슬라이드 > 마우스 오버
  $("#workTab2 .pad-mockup_wrap").hover(
    function () {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    },
    function () {
      timer1 = setInterval(autoText, 4000);
      timer2 = setInterval(autoMobile, 4000);
      timer3 = setInterval(autoPad, 4000);
    }
  );

  // UIUX Design 슬라이드 > 버튼
  $btnL.click(function () {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);

    newText--;
    if (newText < 0) {
      newText = count - 1;
    }
    changeText(newText);

    newMobile--;
    if (newMobile < 0) {
      newMobile = count - 1;
    }
    changeMobile(newMobile);

    newPad--;
    if (newPad < 0) {
      newPad = count - 1;
    }
    changePad(newPad);
    $(".btn_design .btn_num").text(newText + 1);

    timer1 = setInterval(autoText, 4000);
    timer2 = setInterval(autoMobile, 4000);
    timer3 = setInterval(autoPad, 4000);
  });
  $btnR.click(function () {
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);

    newText++;
    if (newText > count - 1) {
      newText = 0;
    }
    changeText(newText);

    newMobile++;
    if (newMobile > count - 1) {
      newMobile = 0;
    }
    changeMobile(newMobile);

    newPad++;
    if (newPad > count - 1) {
      newPad = 0;
    }
    changePad(newPad);
    $(".btn_num").text(newText + 1);

    timer1 = setInterval(autoText, 4000);
    timer2 = setInterval(autoMobile, 4000);
    timer3 = setInterval(autoPad, 4000);
  });

  // UIUX Design 팝업
  $("#workTab2 .text ul li:nth-child(1) .btn_work .btn_detail").click(
    function () {
      $(".popup2-1 .popup_inner>li").show();
      $(".popup2-1").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );
  $(".popup2-1 .btnPopup .btn_close").click(function () {
    $(".popup2-1").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
  });

  $("#workTab2 .text ul li:nth-child(2) .btn_work .btn_detail").click(
    function () {
      $(".popup2-2 .popup_inner>li").show();
      $(".popup2-2").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );
  $(".popup2-2 .btnPopup .btn_close").click(function () {
    $(".popup2-2").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
  });
}
function sec3_reset() {}

function sec4() {
  // 네비게이션
  anime({
    targets: "#fp-nav",
    opacity: 1,
    easing: "linear",
    duration: 500,
  });
  $(".workTab li:first-child")
    .addClass("active")
    .siblings()
    .removeClass("active");
  $("#workTab3").addClass("active").siblings().removeClass("active");

  // 탭 메뉴
  $(".workTab li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".workContents").removeClass("active");
    $("#" + result).addClass("active");
  });

  // Web Publishing 슬라이드
  let $text2 = $("#workTab3 .text ul li");
  let $pcScreen = $("#workTab3 .pc-mockup_wrap .pc-screen ul li");

  let $btnL2 = $(".btn_publishing .btn_left");
  let $btnR2 = $(".btn_publishing .btn_right");

  let oldText2 = 0;
  let newText2 = 0;
  let oldPc = 0;
  let newPc = 0;

  let count2 = $text2.length;

  // Web Publishing 슬라이드 > 전환효과 함수
  function changeText2(newText2) {
    if (oldText2 != newText2) {
      $text2
        .eq(oldText2)
        .removeClass("active")
        .siblings()
        .removeClass("active");
      $text2.eq(newText2).addClass("active");
    }
    oldText2 = newText2;
  }

  function changePc(newPc) {
    if (oldPc != newPc) {
      $pcScreen
        .eq(oldPc)
        .fadeOut()
        .removeClass("active")
        .siblings()
        .fadeOut()
        .removeClass("active");
      $pcScreen.eq(newPc).fadeIn().addClass("active");
    }
    oldPc = newPc;
  }

  // Web Publishing 슬라이드 > 자동함수
  function autoText2() {
    newText2++;
    if (newText2 > count2 - 1) {
      newText2 = 0;
    }
    changeText2(newText2);
  }
  function autoPc() {
    newPc++;
    if (newPc > count2 - 1) {
      newPc = 0;
    }
    changePc(newPc);
    $(".btn_publishing .btn_num").text(newText2 + 1);
  }

  timer4 = setInterval(autoText2, 4000);
  timer5 = setInterval(autoPc, 4000);

  // Web Publishing 슬라이드 > 마우스 오버
  $("#workTab3 .pc-mockup_wrap").hover(
    function () {
      clearInterval(timer4);
      clearInterval(timer5);
    },
    function () {
      timer4 = setInterval(autoText2, 4000);
      timer5 = setInterval(autoPc, 4000);
    }
  );

  // Web Publishing 슬라이드 > 버튼
  $btnL2.click(function () {
    clearInterval(timer4);
    clearInterval(timer5);

    newText2--;
    if (newText2 < 0) {
      newText2 = count2 - 1;
    }
    changeText2(newText2);

    newPc--;
    if (newPc < 0) {
      newPc = count2 - 1;
    }
    changePc(newPc);
    $(".btn_publishing .btn_num").text(newText2 + 1);

    timer4 = setInterval(autoText2, 4000);
    timer5 = setInterval(autoPc, 4000);
  });
  $btnR2.click(function () {
    clearInterval(timer4);
    clearInterval(timer5);

    newText2++;
    if (newText2 > count2 - 1) {
      newText2 = 0;
    }
    changeText2(newText2);

    newPc++;
    if (newPc > count2 - 1) {
      newPc = 0;
    }
    changePc(newPc);
    $(".btn_publishing .btn_num").text(newText2 + 1);

    timer4 = setInterval(autoText2, 4000);
    timer5 = setInterval(autoPc, 4000);
  });
  // Web Publishing 팝업

  $("#workTab3 .text ul li:nth-child(1) .btn_work .btn_detail").click(
    function () {
      $(".popup3-1 .popup_inner>li").show();
      $(".popup3-1").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );

  $(".popup3-1 .btnPopup .btn_close").click(function () {
    $(".popup3-1").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $("#workTab3 .text ul li:nth-child(2) .btn_work .btn_detail").click(
    function () {
      $(".popup3-2 .popup_inner>li").show();
      $(".popup3-2").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );

  $(".popup3-2 .btnPopup .btn_close").click(function () {
    $(".popup3-2").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $("#workTab3 .text ul li:nth-child(3) .btn_work .btn_detail").click(
    function () {
      $(".popup3-3 .popup_inner>li").show();
      $(".popup3-3").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );

  $(".popup3-3 .btnPopup .btn_close").click(function () {
    $(".popup3-3").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $("#workTab3 .text ul li:nth-child(4) .btn_work .btn_detail").click(
    function () {
      $(".popup3-4 .popup_inner>li").show();
      $(".popup3-4").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );

  $(".popup3-4 .btnPopup .btn_close").click(function () {
    $(".popup3-4").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $("#workTab3 .text ul li:nth-child(5) .btn_work .btn_detail").click(
    function () {
      $(".popup3-5 .popup_inner>li").show();
      $(".popup3-5").stop().fadeIn();
      $("#fp-nav").hide();
      $("body").on("scroll touchmove mousewheel", function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
  );

  $(".popup3-5 .btnPopup .btn_close").click(function () {
    $(".popup3-5").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  // Web Publishing 팝업 > 탭 메뉴

  const tabItem1 = document.querySelectorAll(".popup3-1 .markPopup li");
  const tabContent1 = document.querySelectorAll(
    ".popup3-1 .popup_inner > li .image li"
  );

  tabItem1.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabItem1.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem1[index].classList.add("active");

      const tabItemId1 = String(item.id);

      tabContent1.forEach((item, index) => {
        item.classList.remove("active");

        const tabContentId1 = String(item.id);

        if (tabContentId1 === tabItemId1) {
          tabContent1[index].classList.add("active");
        }
      });
    });
  });

  const tabItem2 = document.querySelectorAll(".popup3-2 .markPopup li");
  const tabContent2 = document.querySelectorAll(
    ".popup3-2 .popup_inner > li .image li"
  );

  tabItem2.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabItem2.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem2[index].classList.add("active");

      const tabItemId2 = String(item.id);

      tabContent2.forEach((item, index) => {
        item.classList.remove("active");

        const tabContentId2 = String(item.id);

        if (tabContentId2 === tabItemId2) {
          tabContent2[index].classList.add("active");
        }
      });
    });
  });

  const tabItem3 = document.querySelectorAll(".popup3-3 .markPopup li");
  const tabContent3 = document.querySelectorAll(
    ".popup3-3 .popup_inner > li .image li"
  );

  tabItem3.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabItem3.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem3[index].classList.add("active");

      const tabItemId3 = String(item.id);

      tabContent3.forEach((item, index) => {
        item.classList.remove("active");

        const tabContentId3 = String(item.id);

        if (tabContentId3 === tabItemId3) {
          tabContent3[index].classList.add("active");
        }
      });
    });
  });
  const tabItem4 = document.querySelectorAll(".popup3-4 .markPopup li");
  const tabContent4 = document.querySelectorAll(
    ".popup3-4 .popup_inner > li .image li"
  );

  tabItem4.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabItem4.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem4[index].classList.add("active");

      const tabItemId4 = String(item.id);

      tabContent4.forEach((item, index) => {
        item.classList.remove("active");

        const tabContentId4 = String(item.id);

        if (tabContentId4 === tabItemId4) {
          tabContent4[index].classList.add("active");
        }
      });
    });
  });
  const tabItem5 = document.querySelectorAll(".popup3-5 .markPopup li");
  const tabContent5 = document.querySelectorAll(
    ".popup3-5 .popup_inner > li .image li"
  );

  tabItem5.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabItem5.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem5[index].classList.add("active");

      const tabItemId5 = String(item.id);

      tabContent5.forEach((item, index) => {
        item.classList.remove("active");

        const tabContentId5 = String(item.id);

        if (tabContentId5 === tabItemId5) {
          tabContent5[index].classList.add("active");
        }
      });
    });
  });
  // More Works 팝업
  $(".more_contents .iherb").click(function () {
    $(".popup4-1 .popup_inner>li").show();
    $(".popup4-1").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup4-1 .btnPopup .btn_close").click(function () {
    $(".popup4-1").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $(".more_contents .amuse").click(function () {
    $(".popup4-2 .popup_inner>li").show();
    $(".popup4-2").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup4-2 .btnPopup .btn_close").click(function () {
    $(".popup4-2").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $(".more_contents .vibe").click(function () {
    $(".popup4-3 .popup_inner>li").show();
    $(".popup4-3").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup4-3 .btnPopup .btn_close").click(function () {
    $(".popup4-3").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $(".more_contents .tousles").click(function () {
    $(".popup4-4 .popup_inner>li").show();
    $(".popup4-4").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup4-4 .btnPopup .btn_close").click(function () {
    $(".popup4-4").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
  $(".more_contents .daum").click(function () {
    $(".popup4-5 .popup_inner>li").show();
    $(".popup4-5").stop().fadeIn();
    $("#fp-nav").hide();
    $("body").on("scroll touchmove mousewheel", function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  $(".popup4-5 .btnPopup .btn_close").click(function () {
    $(".popup4-5").stop().fadeOut();
    $("#fp-nav").show();
    $("body").off("scroll touchmove mousewheel");
    return false;
  });
}

function sec4_reset() {}
