const input=document.getElementById("input")
// const container=document.getElementById("container")
const containerpara=document.getElementById("para")

async function hello(){
    const inputvalue=input.value

    const res = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${inputvalue}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
    // console.log(res);

    const datainformation= await res.json()
    console.log(datainformation);

    containerpara.innerHTML=`<p> ${datainformation[0].shortdef[0]}`
    
}