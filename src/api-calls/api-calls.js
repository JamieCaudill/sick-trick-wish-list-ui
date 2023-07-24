// api-calls.js //

// fetch all tricks on page load and get them to display on the DOM

function getTricks() {
  return fetch('http://localhost:3001/api/v1/tricks')
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`)
    }
  return response.json();
  })
}

export { getTricks }