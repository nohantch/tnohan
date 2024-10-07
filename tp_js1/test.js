function test_age(){
    let age = prompt("Quelle est votre age ?");
    if (age<18)
    {
        document.write("attention accès refusé, vous êtes mineur"); 
        document.body.style.backgroundColor ="red";
    }
    else
    {
        document.write("OK, vous êtes majeur");
        document.body.style.BackgroundColor ="green";
    }

}

function affichage(){

let prenom = prompt("saisir votre prénom");
let nom = prompt("saisir votre nom");
document.write("<div style='border:5px solid blue; width:400px; height:300px; margin:auto; font-size:2em;'>");
document.write("bonjour   "+ prenom + "    " + nom);
document.write("</div>");
}

function test_couleur() {
    let couleur = prompt("donnez une couleur")
    if (couleur == "rouge") {
        document.body.style.backgorundColor = "red"
    }
    else if (couleur == "bleu") {
        document.body.style.backgroundColor = "blue"
    }
    else if (couleur == "vert") {
        document.body.style.backgroundColor = "green"
    }
    else {
        document.write("couleur non comprise")
    }
}

function calcul_moyenne() {
    var n1 = prompt("Donner la prmière note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number (n3);
    
    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3; 

    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne<10)
        {
            document.write("vous n'êtes pas admis"); 
            
        }
        else if (moyenne < 14)
        {
            document.write("OK, vous êtes admis passable");
            
        }
        else 
        { 
            document.write("vous êtes admis bien");
        }
    
}