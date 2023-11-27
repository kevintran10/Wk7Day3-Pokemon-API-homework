// set up database, *refer to class notes*
const form = document.querySelector('form')
form.addEventListener('submit', (searchPokemonEvent) => {
    searchPokemonEvent.preventDefault()
    const pokemonInputValue = form[0]
    console.log(pokemonInputValue.value)
    pokemonData(pokemonInputValue)
})


const pokemonData = async (pokemonInfo) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/{pokemonInfo}`)
    const data = await response.json()
    console.log(data)
}
