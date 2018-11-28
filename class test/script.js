function getHTTPObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e) {
        xhr = false;
      }
    }
  }
  return xhr;
}

function grabFile(file) {
  var request = getHTTPObject();
  if (request) {
    request.onreadystatechange = function() {
      parseResponse(request);
    };
    request.open("GET", file, true);
    request.send(null);
  }
}

function parseResponse(request) {
  if (request.readyState == 4) {
    if (request.status == 200 || request.status == 304) {
     
    
       var data = JSON.parse(request.responseText);
        var name = data.type.title;
        var f1 = data.type.f1;
        var f2 = data.type.f2;
         var f3 = data.type.f3;
         var f4 = data.type.f4;
         var image = data.type.image + ".jpg";
        
        
        document.getElementById("section").innerHTML = "<h3>"+name+"</h3><ol><li>" +f1 + "</li><li>" +f2 + "</li><li>" +f3 + "</li><li>" +f4 + "</li></ol><img src =  '"+ image +"';
       /*  var header = document.createElement("h2");
        var mailto=document.createElement("a");
        mailto.setAttribute("href", "mailto: "+email);
        
        var text = document.createTextNode(name);
        
        mailto.appendChild(text);
        header.appendChild(mailto);
        
        var link = document.createElement("a");
        link.setAttribute("href", website);
        var linktext = document.createTextNode(website);
        link.appendChild(linktext);
        var details = document.getElementById("details");
        while (details.hasChildNodes()){
            details.removeChild(details.lastChild);
        }
        details.appendChild(header);
        details.appendChild(link);*/
        
       
    }
  }
}