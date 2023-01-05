
let i=1;

function hello(){
    const val=document.getElementById("input").value

    let item=document.createElement("li");
    item.innerHTML=val

    let button=document.createElement("button")
    button.innerText="delete"
    let div=document.createElement("div");
    div.setAttribute("class", "para")
    div.appendChild(item)
    div.appendChild(button)

    let list=document.getElementById("list")
    list.appendChild(div)

    button.addEventListener('click', (e)=>{
        e.path[1].remove();
    })


    i++;
}












// let i=1;
// function hello() {

//     const shopchart = document.getElementById("list").value

//     const div1 = document.createElement("div")
//     div1.classList.add("para");
//     console.log(div1);

//     const unlist = document.createElement("ul")

//     const list1 = document.createElement("li")
//     // console.log(list1);
//     const btn = document.createElement("button")
//     btn.innerText = "Delete"
//     btn.classList.add("btn1")


//     unlist.appendChild(list1)
//     list1.innerHTML = shopchart;
//     div1.appendChild(unlist);
//     div1.appendChild(btn)
//     document.body.appendChild(div1)

//     btn.addEventListener("click",(e)=>{
//         e.path[i].reomve();
//     })

// i++;
// }


