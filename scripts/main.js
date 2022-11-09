let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute('src', 'images/firefox2.png');
      //alert('换了换了');
    } else {
      myImage.setAttribute('src', 'images/firefox.jpg');
      //alert('又换了又换了');
    }
}
