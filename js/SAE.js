let param = new URLSearchParams(location.search);
let nbr = param.get('nbr');

if (nbr && SAE[nbr]) {
    
    let sae = SAE[nbr];

    let AC= Object.entries(sae.AC)
        .map(([key, value]) => `<div>${key} : ${value}</div>`)
        .join("");

    let ressources = Object.entries(sae.ressources)
        .map(([key, value]) => `<div>${key} : ${value}</div>`)
        .join("");

    document.querySelector(".sae").innerHTML = `
        <div>
            <div class="sae-nbr">${nbr}</div>
            <div class="sae-titre">${sae.titre}</div>
            <div class="sae-description">${sae.description}</div>
            <div class="sae-compétences">${sae.compétences}</div>
            <div class="sae-AC">
                <div>Les Différentes AC :</div>
            </div>
                <a class="ac" href="../pdf/${nbr}.pdf" target="_blank">${AC}</a>
            <div class="sae-ressource">
                <div>Ressources :</div>
            </div>
                <div class="rsc">${ressources}</div>
            <div class="sae-semestre">Semestre : ${sae.semestre}</div>
        </div>
    `;
} 

else {
    document.querySelector(".sae").innerHTML = "<div>SAE introuvable</div>";
}


