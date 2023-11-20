function firstimg(url, id) {
    $('.parent img').removeAttr('src');
    $('.parent img').attr('src', url);
   
    $("#tap, #tap1, #tap2").css("border", "none");
    $(id).css("border", "3px solid green");
    $('.parent').css('width', $('.parent img').width());
    $('.parent img')
        .parent()
        .zoom({
            magnify: 2,
            target: $('.magnifier').get(0)
         
        });
}

$(document).ready(function() {
   
    $('.parent').css('width', $('img').width());
    $('.parent img')
        .parent()
        .zoom({
            magnify: 2,
            target: $('.magnifier').get(0)
        });
       
});