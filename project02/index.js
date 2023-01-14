const subheading = document.getElementById("subheading");
console.log(subheading);
subheading.innerText = `Country we have ${countries_data.length} countries`

const graph = document.getElementById("graphTitle")
graph.innerText = "Top 10 most populated countries in world"

const sortdata = countries_data.sort(function (a, b) {
    return b.population - a.population;
})

// console.log(sortpopulation);
let totalpopulation = 0;
for (let i = 0; i < countries_data.length; i++) {
    totalpopulation += sortdata[i].population;
}


const clear = document.getElementById("graphcontainer")

function hello() {
    clear.innerHTML = ""
    graph.innerText = "Top 10 most populated countries in world"

    for (let i = 0; i < 10; i++) {
        const onediv = document.createElement("div")
        onediv.classList.add("onediv")
        const countryname = document.createElement("p")

        countryname.innerText = `${i + 1}. ${sortdata[i].name}`
        onediv.appendChild(countryname)
        countryname.classList.add("countryname")
     

        const percentMaindiv = document.createElement("div")

        const percentagediv = document.createElement("div")

        percentagediv.classList.add("percentdiv")

        const percentage = (sortdata[i].population / totalpopulation) * 100
        percentagediv.style.width = `${percentage}%`

        percentagediv.style.backgroundColor = "#E9A709"

        percentagediv.innerText = percentage.toFixed(1) + "%"
         // percentMaindiv.appendChild(percentagediv)
        const graghdiv = document.getElementById("graphcontainer");



        onediv.appendChild(percentagediv)
        percentMaindiv.appendChild(percentagediv)
        percentMaindiv.classList.add("percentaindiv")
        onediv.appendChild(percentMaindiv)


        const populationdiv = document.createElement("div");

        populationdiv.classList.add("populationdiv")

        populationdiv.innerText = sortdata[i].population
        onediv.appendChild(populationdiv)

        graghdiv.appendChild(onediv)

    }
}



function buttontwoclick() {
    clear.innerHTML = " "

    graphTitle.innerText = "10 most spoken languages in world"

    const languageArr = []

    for(let i=0; i<countries_data.length; i++){
        languageArr.push(countries_data[i].languages)
    }

    const flattedLanguagesArray = languageArr.flat()

    const languageCount = {}

    flattedLanguagesArray.map((ele)=>{
        languageCount[ele] = (languageCount[ele] || 0) + 1
    })

    const objArr = Object.entries(languageCount)
    console.log(objArr);
    const sortedArray = objArr.sort((a,b)=>{
        return b[1] - a[1] 
    })


    for(let i=0; i<10; i++){

        const topTenValuesFronSortedArray = sortedArray[i]
        
        const onediv = document.createElement("div")
        onediv.classList.add("onediv")
        const countryname = document.createElement("p")

        countryname.innerText =topTenValuesFronSortedArray[0]
        onediv.appendChild(countryname)
        countryname.classList.add("countryname")
     

        const percentMaindiv = document.createElement("div")

        const percentagediv = document.createElement("div")

        percentagediv.classList.add("percentdiv")

        const percentage = (topTenValuesFronSortedArray[1]/sortedArray.length)*100
        percentagediv.style.width = `${percentage}%`

        percentagediv.style.backgroundColor = "#E3A704"

        percentagediv.innerText = percentage.toFixed(1) + "%"

        const graghdiv = document.getElementById("graphcontainer");



        onediv.appendChild(percentagediv)
        percentMaindiv.appendChild(percentagediv)
        percentMaindiv.classList.add("percentaindiv")
        onediv.appendChild(percentMaindiv)


        const populationdiv = document.createElement("div");

        populationdiv.classList.add("populationdiv")
        populationdiv.innerText =  topTenValuesFronSortedArray[1]
        onediv.appendChild(populationdiv)

        graghdiv.appendChild(onediv)
    }
  
}



