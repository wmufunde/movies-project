/* THIS IS THE JS FILE FOR THE www.themoviedb.org WEBSITE API */

// MY GLOBAL VARIABLES
var title
var genre
var releaseYear
var summary
var actors 
var languages // What languges is the movie in?
var status // Is this movie releases or still in production?


//HERE ARE MY EVENT LISTENERS

var myList = document.getElementById("getList");

myList.addEventListener("click", loadMyData, false);



var getGenre = document.getElementById("genre");

var getYear = document.getElementById("year"); 

// End of my Event Listeners

function loadMyData() {
    
    
    var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
console.log(xhr);
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
      
    
        var sourceData = JSON.parse(xhr.responseText);
        console.log(sourceData);
      
      
        var source = document.getElementById("genre");
        
        for (var i = 0; i < sourceData.genres.length; i++) {
            console.log(i);
				 
				optionID = sourceData.genres[i].id;
				var optionName = sourceData.genres[i].name;
				 
            
				var option = document.createElement("option");
				option.innerHTML = optionName;
				option.setAttribute("value", optionID);
				option.setAttribute("name", optionName);
				source.appendChild(option);
            
            console.log(optionName);
        }
      
      
      var releaseDateSource = document.getElementById("releaseDate");
      
      for (var i = 0; i < sourceData.results.length; i++) {
            console.log(i);
				 
				optionID = sourceData.results[i].id;
				var optionName = sourceData.results[i].name;
				 
            
				var option2 = document.createElement("option");
				option2.innerHTML = optionName;
				option2.setAttribute("value", optionID);
				option2.setAttribute("name", optionName);
				source.appendChild(option2);
            
            console.log(optionName);
        }
    
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=310b34be8b73b53760a3b7a405c9fb85");

xhr.send(data);
    
    
    
    
    
    
    /*//alert("hello");
    var myRequest = new XMLHttpRequest();
    //myRequest.withCredentials = true;
    console.log(myRequest);
    myRequest.open("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=310b34be8b73b53760a3b7a405c9fb85", true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData);
            //myList = document.getE
        }
        
        myRequest.send();
    }*/
}
       /* var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
      
    function loadGenreName() {
        var sourceData = JSON.parse(xhr.responseText);
        console.log(sourceData);
        var source = document.getElementById("genre");
        
        for (var i = 0; i < sourceData.genres.length; i++) {
            console.log(i);
				 
				//optionID = sourceData.genres[i].id;
				var optionName = sourceData.genres[i].name;
				 
            
				var option = document.createElement("option");
				option.innerHTML = optionName;
				option.setAttribute("value", optionID);
				option.setAttribute("name", optionName);
				source.appendChild(option);
            
            console.log(optionName);
				 
			  	
		
        
        
        
        
        }
        loadGenreName();
    }
  }
});

xhr.open("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=310b34be8b73b53760a3b7a405c9fb85");

xhr.send(data);*/
/* ---------------------------------------------------------------------------- 
YOUTUBE API for trailer */