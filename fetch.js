document.getElementById('getDataButton').addEventListener('click', () => {
   fetch(`http://localhost:8889/getData`)
        .then(res=> res.json()
            .then(obj => {
                formList(obj)
            })
        )
})

function formList(obj) {
    const ul = document.getElementById('list')
    ul.innerHTML = ""
    for(let val in obj) {
        let li = document.createElement('li')
        li.innerText = val+': '+ obj[val]
        ul.appendChild(li)
    }
}
