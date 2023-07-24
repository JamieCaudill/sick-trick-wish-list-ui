// api-calls.js //

// fetch all tricks on page load and get them to display on the DOM

function getTricks() {
  fetch('http://localhost:3001/api/v1/tricks')
  .then(response => response.json())
  .then(data => console.log(data))
}

export { getTricks }