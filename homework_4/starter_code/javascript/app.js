$(document).ready(function() {
  console.log("hello world")
  //checking functionality


  $( ".submit-btn" ).click(function(event) {
    event.preventDefault();
    //keeps clicks from navigating away from page
    console.log("Without the variable city: "+$(".city-type").val());
    //chekcs 

    function removeCityClass() {
      $("body").removeClass("sf")
      $("body").removeClass("nyc")
      $("body").removeClass("la")
      $("body").removeClass("austin")
      $("body").removeClass("sydney")
      //prevents stacking. provides clean slate after
      //each entry by user
    }

    var city = $(".city-type").val()
    if (city.toLowerCase() == "san francisco" || city.toLowerCase() == "sf" || city.toLowerCase() == "bay area"){
      removeCityClass();
      $("body").addClass ("sf")
    }
    else if (city.toLowerCase() == "new york" || city.toLowerCase() == "new york city" || city.toLowerCase() == "nyc"){
      removeCityClass();
      $("body").addClass ("nyc")
    }
    else if (city.toLowerCase() == "los angeles" || city.toLowerCase() == "la" || city.toLowerCase() == "lax"){
      removeCityClass();
      $("body").addClass ("la")
    }
    else if (city.toLowerCase() == "austin" || city.toLowerCase() == "atx"){
      removeCityClass();
      $("body").addClass ("austin")
    }
    else if (city.toLowerCase() == "sydney" || city.toLowerCase() == "syd"){
      removeCityClass();
      $("body").addClass ("sydney")
    }
    // else {
    //
    // }
    console.log("With the variable city: " + city);
    //checks
    //$(".city-type").reset();

  });
//create if, if else, if conditionals to control flow

//these should be a function
//if ("city-type"=== "New York" , "New York City" , "NYC"")
//display nyc.jpg


//||

//if (city-type === "San Francisco" , "SF" , "Bay Area")
//display sf.jpg

//||

//if (city-type==="Los Angeles" "LA" "LAX"
//display la.jpg

//||

//if (city-type=== "Austin" "ATX")
//dispaly austin.jpg

//||

//if (city-type= "Sydney", "SYD")
//dispay sydnesy.jpg



//write 6 lines of pseudocode and display them in javascript

//get first element of attribude name using $.attr ()
//The .attr() method gets the attribute value for only the first
//element in the matched set.
})
