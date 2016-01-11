/**
 * Created by sergiuLucaci on 1/7/16.
 */


$(document).ready(function() {

    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    $("#joinLink").click(function() {
        console.log("i am clicked");
        $(".signUpPage").show();
        $(".welcomePage").hide();
    });

    $("#registerButton").click(function() {
        var inputEmail = $("#emailAddress").val();
        var inputPassword = $("#emailPassword").val();
        console.log(inputEmail);

        if ( testEmail.test(inputEmail) ) {
            console.log("what a correct email address");
        } else {
            $("#errorInputEmail").show();
            console.log("uo. that's a bad address. sry");
        }

        if( inputPassword.length < 4 ) {
            $("#errorInputPassword").show();
            console.log("bigger password please");
        } else {
            console.log("oh, nice password.");
        }
    });

    var detect = function (base, if_installed, if_not_installed) {
        console.log('injected');
        var s = document.createElement('script');
        s.onerror = if_not_installed;
        s.onload = if_installed;
        document.body.appendChild(s);
        s.src = base + '/manifest.json';
    };
    detect('chrome-extension://' + "hnccmmpkbfmmmlfkamgmncadhhgmopjf", function () {alert('boom, the extension exists!');},
        function () {alert("buf. nothin")});

});