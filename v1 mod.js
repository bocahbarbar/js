// ==UserScript==
// @name mi.com v4 UPDATE BISMILAH LURD
// @namespace rhe
// @match *://*/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';
   
    var d = new Date();

    var skipInt;
    var skipInt2;
    var log=function(msg){
      // console.log (msg);
      console.log("Inject update lurdd " + msg + " " + d);
    };
// disini + CLOSE
    var skipAd1=function(){
        var skipbtn=document.querySelector(".btn-primary.J_state")||document.querySelector(".btn.btn-primary");
        if(skipbtn){
            skipbtn=document.querySelector(".btn-primary.J_state")||document.querySelector(".btn.btn-primary");
           log("skip...");
           skipbtn.click();
           if(skipInt) {clearTimeout(skipInt);}
           skipInt=setTimeout(skipAd1,1000);
         }else{
              log("checking...");
              if(skipInt) {clearTimeout(skipInt);}
              skipInt=setTimeout(skipAd1,1000);
         }
    };
//Byrhe-v1

    var skipAd=function(){
        var skipbtn2=document.querySelector(".btn.J_proBtn.btn-primary")||document.querySelector(".cart__footer-checkout")||document.querySelector(".btn.btn-primary")||document.querySelector(".bigtap-close.icon-close")||document.querySelector(".go-to-cart__button");
        if(skipbtn2){
            skipbtn2=document.querySelector(".btn.J_proBtn.btn-primary")||document.querySelector(".cart__footer-checkout")||document.querySelector(".btn.btn-primary")||document.querySelector(".bigtap-close.icon-close")||document.querySelector(".go-to-cart__button");
           log("skip...");
           skipbtn2.click();
           if(skipInt2) {clearTimeout(skipInt2);}
           skipInt2=setTimeout(skipAd,500);
         }else{
              log("checking...");
              if(skipInt2) {clearTimeout(skipInt2);}
              skipInt2=setTimeout(skipAd,500);
         }
    };

   

    skipAd1();
    skipAd();
  

})();
