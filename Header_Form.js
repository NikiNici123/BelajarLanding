const Link = "https://api.cms.zver.my.id/v1/"
let get_data = document.querySelector('#inputName')
let get_Url = document.querySelector('#inputURL')
let get_form = document.querySelector('#form_Post')
let del_form = document.getElementById('form_Delete')

let Console_Show_Data = async () => {
    const Response = await fetch(`${Link}privilege`)
    const Response_JSON = await Response.json();

    if (Response_JSON.status === 200) {
        console.log("Read Sucess");
        console.log(Response_JSON);
    } else {
        console.log("Read failed"); 
    }
}

getPrivilege().then(response => {  
    let createParentNode = () => {
        let ParentNode = document.createElement('div');
        ParentNode.id = `DataAPI`
        ParentNode.setAttribute('class', 'flex flex-col items-center')
        return ParentNode
    }

    let createChildNode_ID = (index) => {
        let elemenID = document.createElement('p');
        elemenID.textContent = index
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

const Del_Data= (ID = 0, url_Link = "") => {
    const DEL = {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            "id" : ID,
            "url" : `/${url_Link}`
        })
    }
    return DEL
}


// bikin 1 function khusus ngeload formPost formDel formPut
// Bikin CSS Class untuk show data, rapikan, bentuk supaya responsive speerti #Header.
// Yea~ 