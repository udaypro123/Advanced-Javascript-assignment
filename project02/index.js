const subheading=document.getElementById("subheading");
console.log(subheading);
subheading.innerText=`Country we have ${countries_data.length} countries`

const graph=document.getElementById("graphTitle")
graph.innerText="Top 10 most populated countries in world"

const sortdata = countries_data.sort(function(a,b){
        return b.population - a.population;
})

// console.log(sortpopulation);
let totalpopulation=0;
for(let i=0; i< countries_data.length; i++){
    totalpopulation +=  sortdata[i].population;
}


const clear=document.getElementById("graphcontainer")

function hello(){
    clear.innerHTML=""
    graph.innerText="Top 10 most populated countries in world"

    for(let i=0; i< 10 ; i++){
        const onediv = document.createElement("div")
        onediv.classList.add("onediv")
        const countryname=document.createElement("p")
        // onediv.style.display="flex";
        // onediv.style.height="fit-content"
        // onediv.style.alignItems="center"
        // onediv.style.justifyContent="center"

        countryname.innerText= sortdata[i].name
        onediv.appendChild(countryname)
        countryname.classList.add("countryname")
        // countryname.style.width="30%"
        
        const percentMaindiv=document.createElement("div")

        const percentagediv=document.createElement("div")

        percentagediv.classList.add("percentdiv")

        const percentage= (sortdata[i].population/totalpopulation)*100
        percentagediv.style.width=`${percentage}%`

        percentagediv.style.backgroundColor="#E9A709"
    
        
        percentagediv.innerText=percentage.toFixed(1);

       
        // percentMaindiv.appendChild(percentagediv)
        const graghdiv=document.getElementById("graphcontainer");



        onediv.appendChild(percentagediv)
        percentMaindiv.appendChild(percentagediv)
        percentMaindiv.classList.add("percentaindiv")
        // percentMaindiv.style.width="50%"
        // percentMaindiv.style.height="50px"
        onediv.appendChild(percentMaindiv)

        
        const populationdiv=document.createElement("div");

        populationdiv.classList.add("populationdiv")

        populationdiv.innerText=sortdata[i].population
        onediv.appendChild(populationdiv)

        graghdiv.appendChild(onediv)

    }
}





function buttontwoclick(){

    graph.innerText="Top 10 most spoken languages in world"

    clear.innerHTML=""
    graph.innerText="10 most populated countries in world"

    for(let i=0; i< 10 ; i++){
        const onediv = document.createElement("div")
        const countryname=document.createElement("p")
        // onediv.style.display="flex";
        // onediv.style.height="fit-content"
        // onediv.style.alignItems="center"

        countryname.innerText= sortdata[i].name
        // countryname.classList.add("countryname")
        onediv.appendChild(countryname)
        // countryname.style.width="30%"
        
        // const percentMaindiv=document.createElement("div")
        const percentagediv=document.createElement("div")
        percentagediv.classList.add("percentdiv")
        const percentage= (sortdata[i].population/totalpopulation)*100
        percentagediv.style.width=`${percentage}%`
        // percentagediv.style.height="30px"

        percentagediv.style.backgroundColor="#39A703"
       
        

        percentagediv.innerText=percentage.toFixed(2);

        // percentMaindiv.appendChild(percentagediv)
        const graghdiv=document.getElementById("graphcontainer");
        onediv.appendChild(percentagediv)
        graghdiv.appendChild(onediv)
}

}



