function image() {
  var x = document.getElementById("portrait");
  x.innerHTML =
    '<img src="/Image/moi' + Math.floor(Math.random() * 3 + 1) + '.PNG" >';
  console.log(x.innerHTML);
  setTimeout(image, 8000);
}

image();
