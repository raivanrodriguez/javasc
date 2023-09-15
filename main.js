$(document).ready(function(){
    $("button").click(function(){
      $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    });
  });

$(document).ready(function(){
    $("p").on("click", function(){
      $(this).hide();
    });
  });