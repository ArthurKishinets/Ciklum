$(document).ready(function(){var e,t,o;t=$(".products .store_sub").height(),$(".products li").hover(function(){e=$(".products li:hover .inner_menu").height(),o=e>t?e:t,e<t?(o=t,$(".products li:hover .inner_menu").css({height:t})):$(".products .store_sub").css({height:o})},function(){})});