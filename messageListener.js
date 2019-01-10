//MUST ADD THIS TO index.html -> <meta property="next" content="next sequence number"/>


window.addEventListener("message", receiveMessage, false);

/*function receiveMessage(event)
{
  if (event.origin !== "https://antocr.github.io")
    return;

  else {
  	console.log(event.origin);
  }
}*/

function receiveMessage(event)
{
	if (event.origin == "https://antocr.github.io"){
		let elem = document.getElementsByTagName('iframe')[0];
		elem.contentWindow.postMessage(document.head.querySelector("[property~=next][content]").content, '*');
	}	
}

   /* window.addEventListener("message", receiveMessage, false);

function receiveMessage(event)
{
  if (event.origin == "https://antocr.github.io")
    console.log("si");

    else
        console.log(event.origin);


}*/