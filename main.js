// test js file to html
console.log('testing')




//grabbing data using .addEventListener()
const pokemonData = async () => {
    const pokemonInfo = document.getElementById("pokemonName").value.toLowerCase()

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInfo}`)
        const data = await response.json()
        console.log(data)

        const pokeName = data.name;
        const pokeSprite = data.sprites.front_shiny;
        const pokeSprite2 = data.sprites.back_default;
        const pokeAbility = data.abilities[0].ability.name;
        const pokeAbility2 = data.abilities[1].ability.name;
       

        const pokeDisplay = document.getElementById("pokemon-display");
        pokeDisplay.innerHTML = `
        <h3>...it's!... ${pokeName.toUpperCase()}</h3>
        <img src="${pokeSprite}" id="sprite-text">
        <img src="${pokeSprite2}" id="sprite-text">
        <div>Ability 1: ${pokeAbility.toUpperCase()}</div>
        <div>Ability 2: ${pokeAbility2.toUpperCase()}</div>
        `;
    } catch (error) {
        console.error("Pokemon doesn't exist:", error)
    }
}  







// pokemonSprite.textContent = data['sprites'][4];
// pokemonAbility.textContent = data['ability'][0];
    

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
