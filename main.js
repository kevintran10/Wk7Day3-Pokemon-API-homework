// set up database, *refer to class notes*
const form = document.querySelector('form')
form.addEventListener('submit', (searchPokemonEvent) => {
    searchPokemonEvent.preventDefault()
    const pokemonInputValue = form[0]
    console.log(pokemonInputValue.value)
    pokemonData(pokemonInputValue)
})

// https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
const pokemonData = async (pokemonInfo) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/{pokemonInfo}`)
    const data = await response.json()
    console.log(data)
}

function showPokemonInfo(data) {
    let table = 
    `<tr>
        <th>Name</th>
        <th>Image Sprite</th>
    </tr>`;

    for (let info of data.list) {
        table += 
    `<tr>
        <td>${info.name}</td>
        <td>${info.sprite}</td>
    </tr>`
    }
    document.getElementById("pokemon").innerHTML = table
}
