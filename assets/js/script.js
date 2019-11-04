$(function(){
    $('#green').mouseenter(function(){
        $('p').css('color', 'green');});
    $('#red').mouseenter(function(){
            $('p').css('color', 'red');});
    $('#blue').mouseenter(function(){
        $('p').css('color', 'blue');});
    $('div').mouseleave(function(){
        $('p').css('color', 'black');
    });
});