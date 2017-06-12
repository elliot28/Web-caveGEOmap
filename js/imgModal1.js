$("#imgSmall").click(function(){		                                    
    $("#imgBig").attr("src","img/Vector form.png");
    $("#overlay").show();
    $("#overlayContent").show();
});

$("#imgBig").click(function(){
    $("#imgBig").attr("src", "");
    $("#overlay").hide();
    $("#overlayContent").hide();
});