// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
/* Popup form */
    $('.switchTab ul li').click(function(){
      var curIndex = $(this).index();
      $('.userArea div').css({'display':'none'});
      $('.userArea div').eq(curIndex).css({'display':'block'});
   });
   $('.res_nav').click(function(){
      $('.userModal').addClass('isVisible');
      $('#userRegister').css({'display':'block'});
      $('#userLogin').css({'display':'none'});
      $('.btn_login').removeClass('tabActive')
      $('.btn_register').addClass('tabActive')

  });
   $('.log_nav').click(function(){
      $('.userModal').addClass('isVisible')
      $('#userLogin').css({'display':'block'});
      $('#userRegister').css({'display':'none'});
      $('.btn_register').removeClass('tabActive')
      $('.btn_login').addClass('tabActive')
  });
   $('.btn_login').click(function(){
      $('.btn_register').removeClass('tabActive')
      $('.btn_login').addClass('tabActive')
      });
       $('.btn_register').click(function(){
      $('.btn_login').removeClass('tabActive')
      $('.btn_register').addClass('tabActive')
      });
      $('.close_btn i').click(function() {
      $('.userModal').removeClass('isVisible');
   });
})