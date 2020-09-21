$(document).ready(() => {
  let aboutOffset = $("#about").offset().top;
  $(window).scroll(() => {
    let wScroll = $(window).scrollTop();

    if (wScroll > aboutOffset - 40) {
      $("nav").addClass("bg-black");
      $("#btn-up").fadeIn(200);
    } else {
      $("nav").removeClass("bg-black");
      $("#btn-up").fadeOut(200);
    }
  }); 
  const elem = ()=>{
             console.log();}
  
  $("#btn-up").click(() => {
    $("html,body").animate({ scrollTop: "0" }, 1000);
  });

  $("a[href^='#']").click(function () {
    let aHref = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aHref).offset().top }, 1000);
  });

  $(".loading").fadeOut(1000, () => {
    $("body").css("overflow", "auto");
  });
});
