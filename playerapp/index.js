
var counter = 0
function AppPlayerDetails() {
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const country = document.getElementById("country").value
    const score = document.getElementById("score").value
    
    const container = document.getElementById("container")
    const innerDiv = document.getElementById("innerDiv")
    if(firstName==""||lastName==""||country==""||score==""){
        innerDiv.innerHTML = ""
        innerDiv.innerHTML = " <p>please input data </p> "
      
    }else{
        innerDiv.innerHTML = ""
        container.innerHTML += `
        <div id="div${counter}">
        <table>
        <tr id="tr${counter}">
            <td id="NameRow">${firstName+" " + lastName}</td>
            <td id="countryRow">${country}</td>
            <td id="scoreRow${counter}">${score}</td>
            <td><button onclick="DeleteElem(${counter})" id="del${counter}">  <img src="./6861362.png" alt=""> </button></td>
            <td><button onclick="plusFive(${counter})" id="plusFive${counter}">+5</button></td>
            <td><button onclick="subFive(${counter})" id="subFive${counter}">-5</button></td>
        </tr>
     </table>
     </div>
        `
        
        counter = counter+1  
    }
}

function DeleteElem(counter) {
    const trDel = document.getElementById(`div${counter}`)
    console.log(trDel);
    trDel.innerHTML= ""
}

function plusFive(counter) {
    console.log("hello");
    const score = document.getElementById(`scoreRow${counter}`)
    score.innerText = +score.innerText+5
}

function subFive(counter) {
    console.log("hello");
    const score = document.getElementById(`scoreRow${counter}`)
    score.innerText = +score.innerText-5
}