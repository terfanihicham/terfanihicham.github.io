function ProjectCard(title, description, technologies){

return `

<div class="card">

<h3>${title}</h3>

<p>${description}</p>

<p><strong>Technologies :</strong> ${technologies}</p>

</div>

`;

}

function App(){

let projects = `

${ProjectCard(
"Jeu C++",
"Jeu console interactif avec logique, conditions et score.",
"C++"
)}

${ProjectCard(
"Découvrir le Maroc",
"Site web touristique présentant les villes marocaines.",
"HTML, CSS, JavaScript"
)}

${ProjectCard(
"CV Interactif",
"CV web responsive avec animations et dark mode.",
"HTML, CSS, jQuery"
)}

`;

document.getElementById("react-root").innerHTML = projects;

}

document.addEventListener("DOMContentLoaded", App);