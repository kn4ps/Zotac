// ==UserScript==
// @name         ZOTAC-WISHLIST-ADDALLTOCART
// @namespace    KN4PS
// @version      1
// @description  Refreshes your Zotac wishlist every 10 seconds and adds any items come in stock to your cart
// @author       KN4PS
// @match        https://www.zotacstore.com/us/wishlist/*
// @grant        none
// ==/UserScript==
const audio = new Audio("");
var $ = window.jQuery;
var numMinutes = 0.5; window.setTimeout("document.location.reload();", numMinutes*20*1000);


  $(document).ready(function() {
    var doc = $(document).find("button btn-add");
    doc.each(function() {
       if ($(this).text() == "ADD ALL TO CART") {
         $(this).click();

       }
    });
  });

(function() {
document.getElementsByClassName("button btn-add")[0].click();
    audio.play();
    window.open("https://www.zotacstore.com/us/checkout/cart/", "_blank");
    window.open("https://youtu.be/5jjnYj6jXns");

})();