const input = document.getElementById("input")
const lowerpart = document.getElementById("lowerpart")
const recipeInstructions = document.getElementsByClassName("recipeInstructions")


async function hello() {
    lowerpart.innerHTML = ""
    const inputvalue = input.value
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputvalue}`)
    
    const data = await res.json();

    if (data.meals) {

        data.meals.map((ele) => {

            const imgsrc = ele.strMealThumb
            const description = ele.strMeal
            const id = ele.idMeal



            lowerpart.innerHTML += `<div id="lowerpartMain">
        <div id="lowerpart1"> <img src="${imgsrc}" id="img1" > </div>
        <div id="lowerpart2"> ${description} </div>
        <div id="lowerpart3"> <button onclick="helloo(${id})" > Get Recipe</button>  </div>
        </div>`

        })
    } else {
        lowerpart.innerHTML = `<div class="para"> Sorry, we didn't find any meal! </div>`
    }
}


async function helloo(id) {

    // recipeInstructions.innerHTML=""

    // recipeInstructions[0].classList.add("showdiv")

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const data = await response.json()
    data.meals.map((element) => {

        const youtube = element.strYoutube
        // console.log(youtube);
        const instruction = element.strInstructions
        const category = element.strCategory
        const thumb = element.strMealThumb
        const meal = element.strMeal
        recipeInstructions[0].innerHTML = `
            <div id="recipeInstructionsInsideDiv">

            <div class="instructionpart1" > <img src="./1828774-removebg-preview.png" alt="" onclick="closebtn()" ></div>

            <div class="instructionpart2"> ${meal} </div>
            <div class="instructionpart3"> <p> ${category} </p>  </div>
            <div class="instructionpart4">Instruction :</div>
            <div class="instructionpart5">${instruction} </div>
            <div class="instructionpart6"> <img src="${thumb}" alt=""></div>
            <div class="instructionpart7"><a href="${youtube}" target = "_blank"> Watch video</a></div>
            </div>`
    })
    // console.log(recipeInstructions);
    // recipeInstructions[0].classList.remove("recipeInstructions")
    recipeInstructions[0].classList.add("showdiv")

}


function closebtn(){
    recipeInstructions[0].classList.remove("showdiv")
}


