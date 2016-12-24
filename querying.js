//key: eb52fa619ac54058a45589896d9d0471
// Built by LucyBot. www.lucybot.com
//setting up variables..
//variables for search parameters
var apiKey = "eb52fa619ac54058a45589896d9d0471";

var queryTerm = "";

var numResults = 0;

var startYear = 0;

var endYear = 0;



//believe the following chunk will work for our URL stuff..for now..





var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
    'api-key': "eb52fa619ac54058a45589896d9d0471",

});


function runQuery(numArticles, queryURL) {
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(NYTData) {

    	// for (var i=0; i<NYTData.response.docs.length; i++){
    	// 	console.log(NYTData.docs[i].headline.main);
    	// }
    	


        console.log(url);
        console.log(NYTData);
        console.log(numResults)
    })

}




//function to get our search button to call the NYT data.. 
$('#searchButton').on('click', function() {
    console.log("im looking for data rn..")

    queryTerm = $('#inputSearch1').val().trim();
  

    var newURL = url + "&q=" + queryTerm;

    

    //add in the number of records
	numResults = $("#numberOfTerms1").val();

    //start year

    startYear = $("#startYear1").val().trim() 

    //end year
    endYear = $("#endYear1").val().trim() 

    if (parseInt(startYear)) {
    	startYear = startYear + "0101";
    newURL = newURL + "&begin_date=" + startYear;

}

    if (parseInt(endYear)) {
    	endYear = endYear + "0101";
    newURL = newURL + "&end_date=" + endYear;

}


    console.log(newURL);

    //send AJAX call the newly assembled URL
    runQuery(numResults, newURL);

    return false;
})



//lucybot code to save if needed..
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });

///variable to track number of articles

var articleCounter = 0;



//function for our AJAX call (maybe?)

// function runQuery(runArticles, queryURL) {
// 	//AJAX function
// 	$.ajax({
// 		url: url, method: 'GET'
// 	})
// }


//pseudo - code

//1/ retrieve user inputs and covert them to variables

//2/use those variables to run an ajx call to the new york times

//3/break down the NYT object into usables fields

//4/dynamically generate html content into the respective fields

//5/dealing with "edge cases" whcih means bugs or situations that are not intuitive.