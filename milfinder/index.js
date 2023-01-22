const input = document.getElementById("input")
const container = document.getElementById("container")

async function hello() {
    const inputvalue = input.value

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`)
    // console.log(res);

    const daatinformation = await res.json()
    // console.log(daatinformation.meals)
    // daatinformation.
    container.innerHTML=""
    daatinformation.meals.map((ele) => {
        // console.log(ele.strMealThumb);
        const src=ele.strMealThumb
        container.innerHTML += `<div class="mealDiv">
         <img src=${src} class="imga"> </div>`
    })
}