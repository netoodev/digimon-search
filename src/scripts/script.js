// Chamar a API

async function getDigimonsAPI() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json();
}



// Filtro de busca

async function filtroDigimons(digimonList, digimonId) {
    const digimon = await digimonList.find((monster) => monster.id === digimonId);

    return digimon;
}


// Renderizador

async function renderDigimons(digimon) {

    const imgDigimonElement = document.getElementById("img__digimon");

    imgDigimonElement.src = digimon.image;

    const txtDigimonElement = document.getElementById("t-name__digimon");

    txtDigimonElement.textContent = digimon.name;

    const hpDigimonElement = document.querySelector(".d-hp__int");
    const atkDigimonElement = document.querySelector(".d-atk__int");
    const defDigimonElement = document.querySelector(".d-def__int");

    hpDigimonElement.style.width = digimon.HP + '%';
    atkDigimonElement.style.width = digimon.ATK + '%';
    defDigimonElement.style.width = digimon.DEF + '%';

}



// Main

async function main() {
    const digimons = await getDigimonsAPI();

    const chooseDigimons = await filtroDigimons(digimons, 12);

    await renderDigimons(chooseDigimons);
}

main();