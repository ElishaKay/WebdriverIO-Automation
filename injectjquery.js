// Function for the post call: (this is how we'll send over the questions to the DB);

$.post( "http://localhost/api/drivingquestions", 
  { 'theQuestions': [ "Jon", "Susan" ] },
function(   data ) {
  console.log(data);
});





(function() {
  var el=document.createElement('div'),
   b=document.getElementsByTagName('body')[0];
   otherlib=false,
   msg='';
  el.style.position='fixed';
  el.style.height='32px';
  el.style.width='220px';
  el.style.marginLeft='-110px';
  el.style.top='0';
  el.style.left='50%';
  el.style.padding='5px 10px';
  el.style.zIndex = 1001;
  el.style.fontSize='12px';
  el.style.color='#222';
  el.style.backgroundColor='#f99';
  
  // more or less stolen form jquery core and adapted by paul irish
  function getScript(url,success){
 var script=document.createElement('script');
 script.src=url;
 var head=document.getElementsByTagName('head')[0],
  done=false;
 // Attach handlers for all browsers
 script.onload=script.onreadystatechange = function(){
   if ( !done && (!this.readyState
     || this.readyState == 'loaded'
     || this.readyState == 'complete') ) {
  done=true;
  success();
  script.onload = script.onreadystatechange = null;
  head.removeChild(script);
   }
 };
 head.appendChild(script);
  }
  getScript('https://code.jquery.com/jquery-latest.min.js',function() {
 if (typeof jQuery=='undefined') {
   msg='Sorry, but jQuery wasn\'t able to load';
 } else {
   msg='This page is now jQuerified with v' + jQuery.fn.jquery;
   if (otherlib) {msg+=' and noConflict(). Use $jq(), not $().';}
 }
 return showMsg();
  });
  function showMsg() {
 el.innerHTML=msg;
 b.appendChild(el);
 window.setTimeout(function() {
   if (typeof jQuery=='undefined') {
  b.removeChild(el);
   } else {
  jQuery(el).fadeOut('slow',function() {
    jQuery(this).remove();
  });
  if (otherlib) {
    $jq=jQuery.noConflict();
  }
   }
 } ,2500);
  }
})();