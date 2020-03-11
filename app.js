//Displays a Giphy matching the search term in the user input-box.

async function getGiphy() {
  event.preventDefault();

  let $searchBoxVal = $(".search-term").val();
  let response = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${$searchBoxVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );

  //Appends the GIPHY that was semi-randomly generated.

  let num = Math.round(Math.random() * 10)
  let embedGiphy = response.data.data[num]["embed_url"]
  $("#giph-container").append(`<iframe src="${embedGiphy}">`);
}

// Removes all displayed giphs from the page.

function removeGiphys() {
  $("#giph-container").empty();
}

function waitForDomToLoad() {
//Eventlistener for the submit and remove buttons.
  $(".add-btn").on("click", getGiphy);
  $(".remove-btn").on("click", removeGiphys);

}

$(waitForDomToLoad);