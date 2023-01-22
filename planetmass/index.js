const planets = [
        { planetName: "Sun", gravity: 274, image: "solar-flare.en-removebg-preview.png" },
        { planetName: "Moon", gravity: 1.62, image: "R-removebg-preview.png" },
        { planetName: "Mercury", gravity: 3.7, image: "louis-reed-hzp_aT02R48-unsplash-removebg-preview-removebg-preview.png" },
        { planetName: "Venus", gravity: 8.87, image: "R__6_-removebg-preview.png" },
        { planetName: "Earth", gravity: 9.8, image: "R__3_-removebg-preview.png" },
        { planetName: "Mars", gravity: 3.721, image: "R__5_-removebg-preview.png" },
        { planetName: "Jupiter", gravity: 24.79, image: "84786b880b1f25e4bba133aca28c83ca-removebg-preview.png" },
        { planetName: "Saturn", gravity: 10.44, image: "R__4_-removebg-preview (1).png" },
        { planetName: "Uranus", gravity: 8.87, image: "R__2_-removebg-preview.png" },
        { planetName: "Neptune", gravity: 11.15, image: "R__1_-removebg-preview.png" },
    
    
    ]



    
    
    planets.map((ele) => {
        const options = document.createElement("option")
        options.innerHTML = ele.planetName
        options.value = ele.gravity
        const selectPlanets = document.getElementById("selectPlanet")
        selectPlanets.appendChild(options)
    })
    
    function calculate() {
        const number = +document.getElementById("number").value

        if (number == "") {
            alert("Please enter the mass of an object")
        } else {
            const selectPlanets = document.getElementById("selectPlanet")
          
            const index = selectPlanets.selectedIndex
           
            // const selectoption = selectPlanets.options[index]
    
            const value = +selectPlanets.options[index].value

           
            const weight = number * value
         
            const weightOfObject = document.getElementById("para")

            weightOfObject.innerText = `The weight of ${planets[index].planetName} `

            const h = document.getElementById("h")
            h.innerText = weight.toFixed(2) + "N"

            const pimage = document.getElementById("img")
            pimage.src = planets[index].image
            pimage.style.width = "100%"
            pimage.style.height = "100%"
        }
    
    }