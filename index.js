let greenButton = document.querySelector(".event-button");

greenButton.onclick = function () {

}

fetch('https://swapi.dev/api/people/1/').then(function(response) {
  if(response.status === 200){
      return response.text();
  }else{
      console.log('Подключения к сети нет ');
  }
}).then(function(result) {
  console.log(result);
});

  /* 
 fetch("https://swapi.dev/api/people/1/")
.then((res) => {
  document.getElementById("inquiry").innerHTML = res;
    if(res.ok) {
    return res.text();
  } 
    console.log(res);
  }).catch(error => {
    console.log(error)
  }) */


