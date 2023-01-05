const subheading=document.getElementById("subheading");
console.log(subheading);
subheading.innerText=`Country we have ${countries_data.length} countries`

const graph=document.getElementById("graphTitle")
graph.innerText="10 most populated countries in world"

const sortpopulation=countries_data.sort(function(a,b){
        return b.population - a.population;
})

// console.log(sortpopulation);


function buttononeclick(){
    graph.innerText="10 most populated countries in world"
}
function buttontwoclick(){
    graph.innerText="10 most spoken languages in world"
}





