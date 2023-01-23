const firstname=document.getElementById("firstname")
const lastname=document.getElementById("lastname")
const email=document.getElementById("email")
const password=document.getElementById("password")
const number=document.getElementById("number")
const bio=document.getElementById("bio")



const firstnamepara=document.getElementById("firstnamepara")
const lastnamepara=document.getElementById("lastnamepara")
const emailpara=document.getElementById("emailpara")
const passwordpara=document.getElementById("passwordpara")
const numberpara=document.getElementById("numberpara")
const biopara=document.getElementById("biopara")

const error ={
    firstname:false,
    lastname:false,
    email:false,
    password:false,
    number:false,
    bio:false
}
function firstnamecheck() {
    if(firstname.value==="" || firstname.value.length<3 ||firstname.value.length>17 || /^[a-zA-Z\-]+$/.test(firstname.value)==false){
        // console.log("false");
        error.firstname=false
        firstnamepara.innerText="First name must be alphanumeric and contain 3-16 characters"
    }
    else{
        error.firstname=true
        // console.log("firstname");
        firstnamepara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()"  >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function lastnamecheck() {
    if(lastname.value==="" || lastname.value.length<3 ||lastname.value.length>17 || /^[a-zA-Z\-]+$/.test(lastname.value)==false){
        // console.log("false");
        error.lastname=false
        lastnamepara.innerText="Last name must be alphanumeric and contain 3-16 characters"
    }
    else{
        error.lastname=true
        // console.log("firstname");
        lastnamepara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function emailcheck() {
    if(email.value==="" ||  /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email.value)==false){
        // console.log("false");
        error.email=false
        emailpara.innerText="Email must be a valid address, e.g. example@example.com"
    }
    else{
        // console.log("firstname");
        error.email=true
        emailpara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function passwordcheck() {
    if(password.value==="" || password.value.length<6 || password.value.length>20 || [/[a-z]/,/[A-Z]/,/\d/,/\W/].filter(function(t){ return t.test(password.value); }).length > 2==false){
        // console.log("false");
        error.password=false
        passwordpara.innerText="Password must be alphanumeric (@,_and - are also allowed) and between 6-20 characters"
    }
    else{
        error.password=true
        // console.log("firstname");
        passwordpara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function numbercheck() {
    if(number.value==="" ||  /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(number.value)==false){
        // console.log("false");
        error.number=false
        numberpara.innerText="A valid Telephone number(11 digits and 333-333-3334)"
    }
    else{
        // console.log("firstname");
        error.number=true
        numberpara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}
function biocheck() {
    if(bio.value==="" ||  /^[a-z0-9\_]+$/.test(bio.value)==false){
        // console.log("false");
        error.bio=false
        biopara.innerText="Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters"
    }
    else{
        // console.log("firstname");
        error.bio=true
        biopara.innerText=""
    }
    if(error.firstname==true && error.lastname==true && error.email==true && error.password==true && error.number==true && error.bio==true ){
        const submit=document.getElementById("submit")
        submit.innerHTML=`<button onclick="alertme()" >${"Submit"}</button>`
    }
    else{
        const submit=document.getElementById("submit")
        submit.innerHTML=""
    }
}

function alertme() {
    alert("Your application is submitted successfully")
}