function abrir() {
  document.getElementById("vent").style.display = "block"
  document.getElementById("telefono").style.display = "none"
}

document.getElementById("close").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("vent").style.display = "none"
    document.getElementById("telefono").style.display = "block"
  }, 500);

});

function open() {
  document.getElementById("ofer").style.display = "block"
  document.getElementById("mas").style.display = "none"
  console.log("1")
}

document.getElementById("toggle").addEventListener("click", function () {
  console.log("2")
  document.getElementById("ofer").style.display = "none"
  document.getElementById("mas").style.display = "block"
});



//   let box = document.querySelector('.ofertaCerrada'),
//       btn = document.querySelector('.toggle');
//       btn.addEventListener('click', function () {
//       box.classList.toggle('hidden');
//       }, true);