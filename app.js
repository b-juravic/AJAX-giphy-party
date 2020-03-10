// For example, here is what the AJAX request URL would look like for search term of “hilarious”: http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym. You can click on this URL and see the JSON you will get back. To view this in a nicer format, we highly recommend using the JSON Viewer chrome extension. This is also the data you should console.log when the form is submitted.

// Our Giphy API key: vsSyKWNnRWpjIrxhNiNYZICrVpLOhqzf

$(function() {

  async function getGiphy() {
    event.preventDefault();

    let $searchBoxVal = $(".search-term").val();
    let response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${$searchBoxVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);

    console.log("response", response);
  }

  $(".button").on("click", getGiphy);
});

