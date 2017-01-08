$(document).ready(function() {
  $(document).on('keypress', '#news', function(event) {
    if (event.which === 13) {//this checks the key was an <enter>
      var input = $(this);
      var newsItem = input.val();
      console.log('News are: ' + newsItem);

      newsFunction();
    }
  });
});

function getGuardianNews(newsItem) {
  var url = 'https://content.guardianapis.com/search' + newsItem;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;
  console.log(data);

  showNews(xmlhttp);
}

function showNews(xmlhttp) {
  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var news = JSON.parse(json);
    var element = document.querySelector('#news-details');
    element.innerHTML = news.results;
  } else {
    var json = xmlhttp.responseText;
    var news = JSON.parse(json);
    var element = document.querySelector('#news-details');
    element.innerHTML = 'No news!';
  }
}

function newsFunction() {
    document.getElementById("news-details").innerHTML = "Hello World";
}
