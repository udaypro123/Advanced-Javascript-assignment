function searchEmoji(){
    
    const table = document.getElementById("tableData")
    table.innerHTML = ""
    const input = document.getElementById("input").value
    const tagsArr=[]

    emojiList.map((ele)=>{
        if(ele.tags.includes(input)){
            tagsArr.push(ele)
            table.innerHTML += `<tr class="tablerow">
            <td id="EmojIcon">${ele.emoji}</td>
            <td id="emojiags">${ele.aliases}</td>
            <td id="emojiname">${ele.description}</td>
            <tr>`
        }
    })
 
}

function searchEmojiKeyup() {
    const table = document.getElementById("tableData")
    table.innerHTML = ""
    
    const input = document.getElementById("input").value
    const tagsArray = []
    emojiList.map((ele) => {
        ele.tags.map((element) => {
            if (element.startsWith(input)) {
                tagsArray.push(ele)
                table.innerHTML += `
                <tr class="tablerow">
                    <td id="emojiIcon">${ele.emoji}</td>
                    <td id="emojiTags">${ele.aliases}</td>
                    <td id="emojiname">${ele.description}</td>
                </tr>
            `
            }
        })
    })
}
