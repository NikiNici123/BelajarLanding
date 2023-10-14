const listInHeader = (index,ParentID,data) => {
    let IDParent = document.querySelector(`#${ParentID}`)
    let elementUL = document.createElement('ul')
    elementUL.setAttribute('class', 'flex flex-row justify-center ')
    IDParent.appendChild(elementUL)
    let elementList = document.createElement('a')
    elementList.textContent = data.Header[index].text
    elementList.setAttribute('class' , 'group hidden text-sm text-white absolute py-5 px-5 bg-black lg:group-hover:block lg:group-hover:bg-slate-500 lg:group-hover:border-white lg:group-hover:text-red-300 lg:group-hover:rounded-2xl lg:group-hover:transition-all' )
    elementUL.appendChild(elementList)
}