//prettier-ignore
$(document).ready(function () {
  for (let i = 1; i < 6; i++) {
    $(".question" + i).click(function () {
        if($(".answer" + i).css('display')==='block'){
            $(".answer" + i).fadeOut(200);
             $(".arrow").removeClass("rotate");
              $(".ques").removeClass("quesColor");
        }
        else{
                $(".ques").removeClass("quesColor");
              $(".arrow").removeClass("rotate");
              $(".answer").fadeOut(1);
              $(".answer" + i).fadeIn(200);
              $(".question" + i).find(".arrow").toggleClass("rotate");
              $(".question" + i)
                .find(".ques")
                .toggleClass("quesColor");
        }
      });
    $(".question" + i).click(function () {
        
    
    });
  }
});
