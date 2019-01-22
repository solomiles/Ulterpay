// for business account signup 
$(document).ready(function(){
  $("#create-business-account-button").click(function(){
      
    if ($("#email").val() == "") {
      swal({
        text: "Email field cannot be empty!",
        icon: "warning",
      });
    }
    else 
      if ($("#business-name").val() == "") {
      swal({
        text: "Business name field cannot be empty!",
        icon: "warning",
      });
    }
    else 
      if ($("#password").val() == "") {
      swal({
        text: "Password field cannot be empty!",
        icon: "warning",
      });
    }
    else 
      if ($("#cf-business-password").val() !== $("#password").val() ) {
        swal({
          text: "Both passwords didn't match",
          icon: "warning",
        });
        
        
      }
    else{
      $("#loaderInner").fadeOut();
      $("#loader").delay(4000).fadeOut("slow"); 
      // $("#loader").fadeOut();

      var request = $.post("http://new.guatellamo.com/up/index.php",
      {

        email: $("#email").val(),
        fullname: $("#business-name").val(),
        password: $("#password").val(),
        user_type: "company",
        action: "register"
      },
      function(data,status){
        request.done(function( msg ) {
          swal({
            title: "Information!",
            text: msg,
            icon: status,
            button: "Login",
          });
        });
        request.fail(function( jqXHR, textStatus ) {
          swal({
            title: "Information!",
            text: "Request failed: " + textStatus,
            icon: "warning",
            button: "Try again!",
            dangerMode: true,
          });
        });

        console.log(data);
      });
    }
  });
  $("#business-form").submit(function(event){
    event.preventDefault();
  });
  
});

// for user account signup 

$(document).ready(function(){
    $("#create-personal-account-button").click(function(){

      if ($("#personal-email").val() == "") {
      swal({
        text: "Email field cannot be empty!",
        icon: "warning",
      });
    }
    
    else 
      if ($("#personal-password").val() == "") {
      swal({
        text: "Password field cannot be empty!",
        icon: "warning",
      });
    }
    else
    if ($("#personal-password").val() !== $("#cf-personal-password").val() ) {
      swal({
        text: "Both passwords didn't match",
        icon: "warning",
      });
        
    }
    else{

      $("#loaderInner").fadeOut();
      $("#loader").delay(4000).fadeOut("slow"); 
      // $("#loader").fadeOut();

       var request = $.post("http://new.guatellamo.com/up/",
        {

          email: $("#personal-email").val(),
          
          password: $("#personal-password").val(),
          user_type: "user",
          action: "register"
        },
        function(data,status){
          request.done(function( msg ) {
            swal({
              title: "Information!",
              text: msg,
              icon: status,
              button: "Login",
            });
          });
          request.fail(function( jqXHR, textStatus ) {
            swal({
              title: "Information!",
              text: "Request failed: " + textStatus,
              icon: "warning",
              button: "Try again!",
              dangerMode: true,
            });
          });

          console.log(data);
        });
      }
    });
  $("#personal-form").submit(function(event){
    event.preventDefault();
    });
});

// $(document).ready(function(){
//     $("#create-business-account-button").click(function(){
//         console.log($("#email").val());
//         console.log($("#business-name").val());
         
        
//     });
// });
// loader gif
$(document).ready(function() { 
  $("#loaderInner").fadeOut(); 
  $("#loader").delay(400).fadeOut("slow"); 
  // $("#loader").fadeOut();
    
});

$(document).ready(function() {
  $("#login-button").click(function(){

    if ($("#lg-email").val() == "") {
      swal({
        text: "Email field cannot be empty!",
        icon: "warning",
      });
    }
    
    else 
      if ($("#lg-password").val() == "") {
      swal({
        text: "Password field cannot be empty!",
        icon: "warning",
      });
    }
    else{

      $("#loaderInner").fadeOut();
      $("#loader").delay(4000).fadeOut("slow"); 
      // $("#loader").fadeOut();

       var request = $.post("http://new.guatellamo.com/up/",
        {

          email: $("#lg-email").val(),
          
          password: $("#lg-password").val(),
          
          action: "login"
        },
        function(data,status){
          request.done(function( msg ) {
            swal({
              title: "Information!",
              text: msg,
              icon: status,
              
            });
          });
          request.fail(function( jqXHR, textStatus ) {
            swal({
              title: "Information!",
              text: "Request failed: " + textStatus,
              icon: "warning",
              button: "Try again!",
              dangerMode: true,
            });
          });

          console.log(data);
        });
      }


  });

  $("#signin-form").submit(function(event){
    event.preventDefault();
  });
});