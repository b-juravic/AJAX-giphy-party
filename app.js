//Displays a Giphy matching the search term in the user input-box.

async function getGiphy() {
  event.preventDefault();

  let resourceUrl = "http://api.giphy.com/v1/gifs/search";
  let $searchBoxVal = $(".search-term").val();
  let apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

  // Making axios get request using search box value and the provided api_key
  let response = await axios.get(resourceUrl, {params: {q: $searchBoxVal, api_key: apiKey}});

  // Making axios get request using querystring format. Same as above, but above is better! Don't have to worry about URL safe quote characters. Left here for reference.
    // let response = await axios.get(
    //   `http://api.giphy.com/v1/gifs/search?q=${$searchBoxVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    // );


  //Appends the GIPHY that was semi-randomly generated.

  let num = Math.round(Math.random() * 10)
  let embedGiphy = response.data.data[num]["embed_url"]
  $("#giph-container").append(`<iframe src="${embedGiphy}">`);
}

// Removes all displayed giphs from the page.

function removeGiphys() {
  $("#giph-container").empty();
}

// Created wait for DOM to load function so code critical to DOM load can be encapsulated and the waitForDomToLoad function can be wrapped in the jquery ready function(which will wait for DOM to load), while all other functionality remains outside for easier testing!!

function waitForDomToLoad() {
//Eventlistener for the submit and remove buttons.
  $(".add-btn").on("click", getGiphy);
  $(".remove-btn").on("click", removeGiphys);

}

$(waitForDomToLoad);