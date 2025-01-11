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
            <div class="sae-nbr">
                <a class="retour" href="listeSAE.html">
                <div class="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 12H6M12 5l-7 7 7 7"/></svg>
                </div>
                </a>
                <div class="sae-centre">
                    <div>${nbr}</div>
                </div>
            </div>
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


