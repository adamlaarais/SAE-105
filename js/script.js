Object.keys(SAE).forEach(function (cles) {
    document.querySelector(".accueil").innerHTML += "<a class='clique' href='SAE.html?nbr=" + cles + "'> <div class='styleSAE'>" + cles + "</div> </a>";
});