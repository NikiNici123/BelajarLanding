const API_LINK_VERO = "https://api.cms.zver.my.id/v1/"
let get_data = document.querySelector('#inputName')
let get_Url = document.querySelector('#inputURL')
let form_post = document.querySelector('#form_Post')
let form_delete = document.querySelector('#form_Delete')



getPrivilege().then(response => {  
    let createParentNode = () => {
        let ParentNode = document.createElement('div');
        ParentNode.id = `DataAPI`
        ParentNode.setAttribute('class', 'flex flex-col items-center')
        return ParentNode
    }

    let createChildNode_ID = (index) => {
        let elemenID = document.createElement('p');
        elemenID.textContent = response.data[index].id
        elemenID.id = "data_Id"
        return elemenID
    }
    
    let createInputType = (index) => {
        let elemenInput = document.createElement('input');
        elemenInput.type = "checkbox"
        elemenInput.id = `Data${index}`
        elemenInput.name = `Data${index}`
        elemenInput.value = index
        elemenInput.setAttribute('class', 'checkbox')
        return elemenInput
    }

    let createChildNode_name = (index) => {
        let elemenName = document.createElement('span')
        elemenName.textContent = response.data[index].name
        elemenName.id = "data_Name"
        return elemenName
    }

    let createChildNode_URL = (index) => {
        let elemenName = document.createElement('a')
        elemenName.textContent = response.data[index].url
        elemenName.id = "data_Url"
        return elemenName
    }
    for (let i = 0; i < response.data.length; i++) {
        let Grand_ParentNode = document.getElementById('listSomething')
        let inputType = createInputType(i)
        let ParentNode = createParentNode(i)        
        let childNode_ID = createChildNode_ID(i)
        let childNode_span = createChildNode_name(i)
        let Childnode_URL = createChildNode_URL(i)
        Grand_ParentNode.appendChild(ParentNode)
        ParentNode.appendChild(inputType)
        ParentNode.appendChild(childNode_ID)
        ParentNode.appendChild(childNode_span)
        ParentNode.appendChild(Childnode_URL)
    }
})
