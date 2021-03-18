let greenButton = document.querySelector(".event-button");

greenButton.onclick = function () {
  fetch("https://swapi.dev/api/people/1/")
  .then(res => {
    document.getElementById("inquiry").innerHTML = res;
      if(res.ok) {
      return res.text();
    } 
    }).then(data => {
      return data.text()
    }).catch(error => {
      console.log(error)
    })
}


  



