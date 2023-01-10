


function tip() {
    const input = document.getElementById("input").value
    // console.log(input);
    const val1 = document.getElementById("numpeople").value
    // console.log(val1);
    const service = document.getElementById("select").value
    // console.log(service);
    const spn = document.getElementById("span")
    // console.log(spn);
    const total = (input * service)/ (val1*100)
    // console.log(total);
    spn.innerHTML=`${total.toFixed(2)}`
}