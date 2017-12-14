$(document).ready(function(){
  var $sections = $('.row');

  // The user scrolls
  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();
    var $currentSection

    $sections.each(function(){
      var divPosition = $(this).offset().top;

      if( divPosition - 1 < currentScroll){

        $currentSection = $(this);
        var id = $currentSection.attr('class');
        // console.log("here")
        // console.log(id);

        if(id == "row key"){
          // console.log("IN IF");
          document.getElementById("b").classList.add('active');
          document.getElementById("a").classList.remove('active');
        }
        else if(id == "row welcome"){
          // console.log("IN ELSE");
          document.getElementById("b").classList.remove('active');
          document.getElementById("a").classList.add('active');
        }
      }
      //console.log("hey");
    })

  });
});
