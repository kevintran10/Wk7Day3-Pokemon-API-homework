// test js file to html
console.log('testing')

// set up database, *refer to class notes*
const form = document.querySelector('form')
form.addEventListener('submit', (searchPokemonEvent) => {
    searchPokemonEvent.preventDefault()
    const pokemonValue = form[0].value
    console.log(pokemonValue.value)
    form[0].value = ''
    pokemonData(pokemonValue)
})


const pokemonData = async (pokemonInfo) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo}`)
    const data = await response.json()
    console.log(data)
   
    
    const pokemonNameInfo = document.getElementsByClassName('pokemonName');
    document.body.append(pokemonNameInfo)
    const pokemonSprite = document.getElementsByClassName('pokmeonSprite');
    document.body.append(pokemonSprite)
    const pokemonAbility = document.getElementsByClassName('pokemonAbility')
    document.body.append(pokemonAbility)
}


// tried using this link for some guidance https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
// function showPokemonInfo(data) {
//     let table = 
//     `<tr>
//         <th>Name</th>
//         <th>Image Sprite</th>
//     </tr>`;

//     for (let info of data.list) {
//         table += 
//     `<tr>
//         <td>${info.name}</td>
//         <td>${info.sprite}</td>
//     </tr>`
//     }
//     document.getElementById("pokemon").innerHTML = table
// }
