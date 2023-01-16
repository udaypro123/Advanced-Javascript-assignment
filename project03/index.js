
const totalCountry = document.getElementById("totalcountry")
totalCountry.innerText = `total number of countries ${countries_data.length}`



const countryname = []

countries_data.map((ele) => {
    countryname.push(ele.name.toLowerCase())

})
// console.log(countryname);

function startingword() {
    console.log("hello");

    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    // console.log(countryCardContainer);
    const inputele = document.getElementById("inputvalue")
    inputele.setAttribute("onkeyup", "startingword()")

    const input = document.getElementById("inputvalue").value
    const matchedCountries = []

    countryname.map((ele) => {
        const value = ele.startsWith(input.toLowerCase())
        if (input == "") {
            countryCardContainer.innerHTML = ` <div class="card"><p>please enter a word</p> </div>`
        } else {

            if (value) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
                <div class="card">
                    <p>${ele}</p>
                </div>
                `
                const totalcountry = document.getElementById("para3")
                totalcountry.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }
    })

}



function seachwithanyword() {

    console.log("hello");
    const countryCardContainer = document.getElementById("countryCardContainer")
    countryCardContainer.innerHTML = ""
    const inputele = document.getElementById("inputvalue")
    inputele.setAttribute("onkeyup", "seachwithanyword()")
    const input = document.getElementById("inputvalue").value
    const matchedCountries = []


    countryname.map((ele) => {
        const hello = ele.includes(input.toLowerCase())
        if (input == "") {
            countryCardContainer.innerHTML = `
                <div class="card">
                    <p>please enter a word</p>
                </div>
                `
        } else {
            if (hello) {
                matchedCountries.push(ele)
                countryCardContainer.innerHTML += `
            <div class="card">
                <p>${ele}</p>
            </div>
            `
                const totalcountry = document.getElementById("totalcountry")
                totalcountry.innerText = `Number of countries starting with ${input} are ${matchedCountries.length}`
            }
        }

    })

}





