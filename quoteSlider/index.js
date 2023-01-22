const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")


async function hello() {
    // console.log("hello");
    const res = await fetch("https://api.quotable.io/random")
   
    const data = await res.json();
    console.log(data);
    
    para1.innerText= `" ${data.content} "`
    para2.innerText= `~ ${data.author}`
}


