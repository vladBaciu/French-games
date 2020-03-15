let cardTransitionTime = 500;

let $card = $('.play-area .grid-container .card .js-card')
let switching = false

$('#demo').click(flipCard)

function flipCard () {
   if (switching) {
      return false
   }
   switching = true
   
   $card.toggleClass('is-switched')
   window.setTimeout(function () {
      $card.children().children().toggleClass('is-active')
      switching = false
   }, cardTransitionTime / 2)
}


fetch('vbs.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
