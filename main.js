var individualQuotes = [];
var arr = new Array(20)
var lastIndex = 0;

$.ajax({
  type: 'GET',
  url: 'https://raw.githubusercontent.com/BetweenBeltSizes/BRUCEQUOTES/master/the_quotes/myfile.txt',
  async: false
}).done(function (data) {

  individualQuotes = data.split('\n');
});

$('.get-quote-btn').on('click', function(){
  event.preventDefault();
  getNewQuote();
  randomImage();
  Image();
})

getNewQuote();
makeArray();
randomImage();

function getNewQuote() {
    var random = Math.floor(Math.random() * individualQuotes.length);
    $('#quote').text(individualQuotes[random]);
}

function makeArray() {
      for(let i=0; i<arr.length;i++){
          arr[i] = i + ".jpg";
          console.log(arr[i]);
      }
}

function randomImage() {
  var theImage = document.getElementById('myimage');
  var imgDir = 'bruce_pics/';
  var imgIndex = 0;


  if(arr.length > 1) {
    while(imgIndex == lastIndex) {
      imgIndex = Math.floor(Math.random() * arr.length);
    }

    lastIndex = imgIndex;

    var imgPath = imgDir + arr[imgIndex];

    theImage.src = imgPath;
    theImage.alt = arr[imgIndex];

  } else {
    return false;
  }
}


function Image() {
  var x = document.createElement("IMG");
  x.setAttribute("src", "bruce_pics/1.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}
