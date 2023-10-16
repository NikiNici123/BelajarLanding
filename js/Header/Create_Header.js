
fetch_Menu().then(menu => {
    for(let i = 0; i<menu.Header.length;i++) {
        let IDParent = document.querySelector('#Header')
        let divParent = document.createElement('div')
        divParent.id = `Header${i}`
        divParent.setAttribute('class', 'group flex lg:place-self-center lg:flex-col gap-y-10')
        let elemen = document.createElement('a')
        elemen.textContent = menu.Header[i].text
        elemen.setAttribute('class', `group px-2 py-1 text-gray-400 lg:px-5 lg:py-3 lg:block rounded-md hover:border-white hover:text-slate-950 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 ease-in-out`)
        elemen.setAttribute('id', menu.Header[i].id)
        IDParent.appendChild(divParent)
        divParent.appendChild(elemen)
        // listInHeader(i, divParent.id, menu)
    }
})

