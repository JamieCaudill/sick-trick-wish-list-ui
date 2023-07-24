// api-calls.js //

// fetch all tricks on page load and get them to display on the DOM

function getTricks() {
  fetch('http://localhost:3001/api/v1/trcks')
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  return response.json();
  })
}

export { getTricks }