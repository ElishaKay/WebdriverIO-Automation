setInterval(e=>{
  

  document.querySelectorAll('.search-result__actions--primary.button-secondary-medium.m5').forEach(btn=> {
    if(btn.innerHTML.indexOf('Connect')==-1){
      btn.parentNode.removeChild(btn);
    };
  });

  var btn= document.querySelectorAll('.search-result__actions--primary.button-secondary-medium.m5')[0];
  
  if(btn==null){
    document.querySelector("button.next").click();
    return false;
  };
  btn.click();
  var s= btn.getAttribute('aria-label');
  s= s.replace('Connect with ', '')
  s= s.substring(0, s.indexOf(' '));
  s= s.replace(/\s/g,'');
  setTimeout(e=> {
	var comment= document.querySelector('div.modal-wormhole-content > div > section > div > div.send-invite__actions > button.button-secondary-large');
        comment.click(); 
        setTimeout(e=>{
                var textarea= document.querySelector('.send-invite__custom-message.mb3.ember-text-area.ember-view');
                textarea.value= "Hey "+s+", I'd be honored if we could connect here on LinkedIn :)";
                var send= document.querySelector('div.send-invite__actions > button.button-primary-large.ml1');
                send.click(); 
                btn.parentNode.removeChild(btn);
        }, 500);
  },500);
}, 2000);