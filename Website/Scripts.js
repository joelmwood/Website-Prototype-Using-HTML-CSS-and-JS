/*jslint browser: true*/
/*global $, jQuery, alert*/

/*Detects window scrolling past navbar and locks navbar to top of screen*/
var scrollAmount = 95;

$(window).on('scroll', function lockNavBar(){
  if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('fixed')){
    $('nav').addClass('fixed'); 
  }
  else if($(window).scrollTop()<scrollAmount && $('nav').hasClass('fixed')){
     $('nav').removeClass('fixed') 
  }
});

/*Matches aside to height of parent, .content*/
$(window).on(" load resize",function(e){
    $('.content').find('aside').css('height', $('.content').innerHeight());
});

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        //alert("Welcome again " + user);
         $('#account').html(user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
            $('#account').html(user);
       }
    }
   
}

function deleteCookies(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}