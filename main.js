$('.explain').hide(0);

$('#passwordInfo').click(function(){
    $('.explain').slideDown(500);
});
$('#passwordInfo').on("input", function(){
    console.log(checkNum($('#passwordInfo').val()));
    console.log(checkLength($('#passwordInfo').val()));
    console.log(checkSymbols($('#passwordInfo').val()));
    console.log(checkSmallLeters($('#passwordInfo').val()));
    console.log(checkBigLeters($('#passwordInfo').val()));
    if(checkNum($('#passwordInfo').val()) == true) $(".numb").css("background-color", "rgb(250, 179, 191)");
    else $(".numb").css("background-color", "#999");
    if(checkLength($('#passwordInfo').val()) == true) $(".length").css("background-color", "rgb(250, 179, 191)");
    else $(".length").css("background-color", "#999");
    if(checkSymbols($('#passwordInfo').val()) == true) $(".symb").css("background-color", "rgb(250, 179, 191)");
    else $(".symb").css("background-color", "#999");
    if(checkSmallLeters($('#passwordInfo').val()) == true) $(".smallL").css("background-color", "rgb(250, 179, 191)");
    else $(".smallL").css("background-color", "#999");
    if(checkBigLeters($('#passwordInfo').val()) == true) $(".bigL").css("background-color", "rgb(250, 179, 191)");
    else $(".bigL").css("background-color", "#999");
});
$("#loginInfo").on("input", function(){
    console.log(checkEmail($("#loginInfo").val()))
    if(checkEmail($("#loginInfo").val()) == true) $("#loginInfo").css("border", "2px solid rgb(250, 179, 191)");
    else $("#loginInfo").css("border", "2px solid red");
});
function checkNum(str){
    let regexp = /\d/g || [];
    return regexp.test(str);
}
function checkLength(str){
    if(str.length > 6 && str.length < 20){
        return true;
    } else{
        return false;
    }
}
function checkSymbols(str){
    let regexp = /\W/g;
    return regexp.test(str);
}
function checkSmallLeters(str){
    let regexp = /[a-z]/g;
    return regexp.test(str);
}
function checkBigLeters(str){
    let regexp = /[A-Z]/g;
    return regexp.test(str);
}
function checkEmail(str){
    let regexp = /[a-z0-9]+@[a-z]+\./g;
    return regexp.test(str);
}