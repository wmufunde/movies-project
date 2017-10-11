/* THIS IS THE JS FILE FOR THE www.themoviedb.org WEBSITE API */

// MY GLOBAL VARIABLES
var title;
var genre;
var releaseYear;
var summary;
var actors;
var languages; // What languges is the movie in?
var status; // Is this movie releases or still in production?


//HERE ARE MY EVENT LISTENERS

var myList = document.getElementById("getList");

//myList.addEventListener("onload", loadMyData, false);


var myYear = document.getElementById("getRelease");

//myYear.addEventListener("click", loadYear, false);



var getGenre = document.getElementById("genre");

var getYear = document.getElementById("releaseDate"); 

// End of my Event Listeners

function displayData(results, title, poster_path, overview)
{
   var div = document.createElement('div');
   div.setAttribute('results', Results);
   div.innerHTML = Title + '<br />' + Poster + Overview;
   document.body.appendChild(div);   
}

function loadMyData() {
    
    
    var data = "{}";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;
//console.log(xhr);
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
      
    
        var sourceData = JSON.parse(xhr.responseText);
        //console.log(sourceData);
      displayData(results, title, poster_path, overview);
      
      
        var source = document.getElementById("genre");
        
        for (var i = 0; i < sourceData.genres.length; i++) {
           // console.log(i);
				 
				optionID = sourceData.genres[i].id;
				var optionName = sourceData.genres[i].name;
				 
            
				var option = document.createElement("option");
				option.innerHTML = optionName;
				option.setAttribute("value", optionID);
				option.setAttribute("name", optionName);
				source.appendChild(option);
            
            
           //console.log(optionName);
            
       /*     // Get the seletcted option 
            function firstStep(element) {
    //Grab information from input element object
    //and place them in local variables
    var select_name = element.name;
    var option_value = element.value;
          var user_selection = element.options[element.selectedIndex].text
      console.log(user_selection);
        }*/
      
      
}
      
      
        }
    
  });


xhr.open("GET", "https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=310b34be8b73b53760a3b7a405c9fb85");

xhr.send(data);
}



    
    // 
    function loadYear() {
        var data = "{}";

var newxhr = new XMLHttpRequest();
newxhr.withCredentials = false;
        //console.log(newxhr);

newxhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  
      var sourceData = JSON.parse(newxhr.responseText);
        console.log(sourceData);
      
      
        var source = document.getElementById("releaseDate");
        
        for (var i = 0; i < sourceData.results.length; i++) {
            console.log(i);
				 
				optionID = sourceData.results[i].id;
				var optionName = sourceData.results[i].release_date;
				 
            
				var option = document.createElement("option");
				option.innerHTML = optionName;
				option.setAttribute("value", optionID);
				option.setAttribute("name", optionName);
				source.appendChild(option);
            
            console.log(optionName);
        }
  }
    
});
    
    newxhr.open("GET", "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=310b34be8b73b53760a3b7a405c9fb85");

newxhr.send(data);
    }

/* --------------------------------------------- On click show the data ------------------------------------------------ */

document.getElementById("search").addEventListener("click", displayData);

/* --------------------------------------------- Show Data Function ----------------------------------------------------- */
function displayData() {
    
}
    

/* ---------------------------------------------------------------------------- 
YOUTUBE API for trailer */