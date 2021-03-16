// ==UserScript==
// @name         ZOTAC-CART-PAYPALSTART
// @namespace    KN4PS
// @version      1
// @description  Refreshes your Zotac cart every 10 seconds and launches paypal when item is in stock
// @author       KN4PS
// @match         https://www.zotacstore.com/us/checkout/cart/*
// @grant        none
// ==/UserScript==
const audio = new Audio("");
var $ = window.jQuery;
var numMinutes = 0.5; window.setTimeout("document.location.reload();", numMinutes*20*1000);


  $(document).ready(function() {
    var doc = $(document).find("button btn-proceed-checkout btn-checkout");
    doc.each(function() {
       if ($(this).text() == "PROCEED TO CHECKOUT") {
         $(this).click();

       }
    });
  });

(function() {
document.getElementsByClassName("button btn-proceed-checkout btn-checkout")[0].click();
    audio.play();
    window.open("https://store.zotac.com/paypal/express/start/", "_blank");
    window.open("https://youtu.be/5jjnYj6jXns");



})();