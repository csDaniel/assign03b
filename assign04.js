// assign04.js

function requestGist() {
  var xmlhttp;
  if(window.XMLHttpRequest) {
    // modern browsers
    xmlhttp = new XMLHttpRequest();
  } else {
    // korea :(
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  
  // allow page to load while waiting to connect to the database.
  xmlhttp.onreadystatechange = function() {
    // 4 = request is finished, 200 = status ok (404 is page not found)
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // save the response
        var response = xmlhttp.responseText;
        // store it locally for easier parsing
        localStorage.setItem('gistList', response);
        // place request here for asynchronous loading
        // print out the materials
        loadGistList();
    }
  }
  // url = https://api.github.com/gists
  var url = 'https://api.github.com/gists'
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  
}

function loadGistList() {
  var gistObj = JSON.parse(localStorage.getItem('gistList'));
  // test the contents to ensure we have the correct information
  console.log(JSON.stringify(gistObj));
  
  //gistObj is a clump of data. I want to sort and print
  var outputLL = document.getElementById('outputList');
    
  //  gistReq---description
  //        |---url

  
  var gistObjSize = 5;
  // print off to main list
  for (var i = 0; i < gistObjSize; i++) {
    // container for all members
    var uList = document.createElement('div');
    uList.setAttribute('id', 'currentList');
    
    // button for eventListener
    var favClick = document.createElement('div');
    favClick.setAttribute('id', 'favClick');
    favClick.textContent = "Favorite";
  
    
    // 2 data members
    var gistUrl = document.createElement('p');
    var gistDesc = document.createElement('p');
    // gistUrl.textContent = gistObj[i].url;
    gistUrl.innerHTML = '<a href="'+ gistObj[i].url +'">' + gistObj[i].url +'</a>';
    gistDesc.textContent = gistObj[i].description;

    // attaching members to div
    uList.appendChild(gistDesc);
    uList.appendChild(gistUrl);
        
    // adding a favorite button to prompt a function to switch columns
    favClick.addEventListener("click", function() {
      var newList = this;
      makeFavorite(newList);});      
    
    uList.appendChild(favClick);
    // attaching div to outputList
    outputLL.appendChild(uList);
  }  
}

function makeFavorite(newFav) {
  
  var parent = newFav.parentNode;
  var allFavorites = document.getElementById('favoriteList');

  // remove old div object
  var oldButton = newFav
  parent.removeChild(oldButton);
  
  // spawn new div object to transfer div
  var unfavClick = document.createElement('div');
  unfavClick.setAttribute('id', 'unfavClick');
  unfavClick.textContent = "Un-favorite";
  unfavClick.addEventListener("click", function() {
    var newList = this;
    removeFavorite(newList);});
  // attach div to parent div
  parent.appendChild(unfavClick); 

  // add item to favorites column
  allFavorites.appendChild(parent);  
}

function removeFavorite(oldFav) {

  var parent = oldFav.parentNode;
  var allOutput = document.getElementById('outputList');

  // remove old div object
  var oldButton = oldFav
  parent.removeChild(oldButton);

  // spawn new div object to transfer the div
  var favClick = document.createElement('div');
  favClick.setAttribute('id', 'favClick');
  favClick.textContent = "Favorite";
  // adding a favorite button to prompt a function to switch columns
  favClick.addEventListener("click", function() {
    var newList = this;
    makeFavorite(newList);});      
  // attach div to parent  
  parent.appendChild(favClick); 

  // add item to favorites column
  allOutput.appendChild(parent);  
}






  
  