

    const para=document.getElementById("para")
    // console.log(para);
    const para2=document.getElementById("parachange")
    // console.log(para2);
    const secdiv=document.getElementsByClassName("seconddiv")
    secdiv[0].setAttribute("style", "display:none")
    // console.log(secdiv[0]);

    // console.log(para2);

    const spn=document.getElementById("span")
    // console.log(spn.innerHTML);

    document.addEventListener("keypress",(event)=>{
    para.innerText=""
    secdiv[0].removeAttribute("style", "display:none")
    para.innerText="You Press"
    spn.innerText=` ${event.key}`
    spn.setAttribute("style", "color:green")
    para2.innerText=`${event.keyCode}`
    para2.setAttribute("style", "color:green")
    
})


