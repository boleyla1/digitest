$('#dasteh-bandi').mouseenter(function (){
    $('.master-div').fadeIn(100)
})
$('#dasteh-bandi').mouseleave(function (){
    $('.master-div').fadeOut(100)
})
$("#right-img-story").click(function (){
    $('.story-ul').animate({'margin-left':'+=200px'})
})
$("#left-img-story").click(function (){
    $('.story-ul').animate({'margin-left':'-=200px'})

})