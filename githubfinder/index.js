const inputbox = document.getElementById("input")
const profiledata = document.getElementById("profileContainer")


async function hello2() {
    // const inputValue = inputbox.value
    const res = await fetch("https://api.github.com/users")
    console.log(res);
    const data = await res.json()
    // console.log(data);
    profiledata.innerHTML = ""
    data.map((ele) => {
        // console.log(ele);
        const username = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        profiledata.innerHTML += `<div class="containerdiv"><img src=${avatar} </div>
        <div class="insidediv"> <h3>${username}</h3>
        <a href=${profile} target="_blanck"> view profile</a>`
    })
}
hello2()


async function hello() {
    const inputValue = inputbox.value
    const res = await fetch(`https://api.github.com/search/users?q=${inputValue}`)
    const data = await res.json()
    // console.log(data);
    profiledata.innerHTML = ""
    data.items.map((ele) => {
        // console.log(ele);
        const username = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        profiledata.innerHTML += `<div class="containerdiv"> <img src=${avatar} </div>
        <div class="insidediv"> <h3>${username}</h3>
        <a href=${profile}> view profile</a>`
    })
}

function clean() {
    profiledata.innerHTML = ""
    // console.log("click");
    inputbox.value=""

 }
