$('#dasteh-bandi').mouseenter(function (){
    $('.master-div').fadeIn(100)
})
$('#dasteh-bandi').mouseleave(function (){
    $('.master-div').fadeOut(100)
})
$("#right-img-story").click(function (){
    $('.story-ul').animate({'margin-left':'+=100px'})
})
$("#left-img-story").click(function (){
    $('.story-ul').animate({'margin-left':'-=100px'})

})
$('.Slider').mouseenter(function (){
    $('.div-btn').fadeIn(100)
})
$('.Slider').mouseleave(function (){
    $('.div-btn').fadeOut(100)
})
function Slider() {
    if(nextslid>max){
        nextslid=0;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid++;
}
function Slp() {
    if(nextslid<min){
        nextslid=2;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid--;
}
var max=2;
var min=0;
var slidertag =$('#Slider')
var  slideritem=slidertag.find('.Item')
var nextslid=0;
$('#click-Right').click(function (){
    Slider();


});
$('#click-Left').click(function (){
    Slp();
});



Slider();
var Timer = setInterval(function (){
    Slider();
},3500)