
const Link = "https://api.cms.zver.my.id/v1/"

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

let Show_Screen_data = async () => {
    const get_Data = await fetch(`${Link}privilege`);
    const response = await get_Data.json()

    let createParentNode = (index) => {
        let ParentNode = document.createElement('div');
        ParentNode.id = `Data${index}`
        ParentNode.setAttribute('class', 'flex flex-col items-center')
        return ParentNode
    }

    let createChildNode_P = (index) => {
        let elemenID = document.createElement('p');
        elemenID.textContent = index
        return elemenID
    }
    
    let createInputType = (index) => {
        let elemenInput = document.createElement('input');
        elemenInput.type = "checkbox"
        elemenInput.id = index
        elemenInput.setAttribute('class', 'text-sm')
        return elemenInput
    }

    let createChildNode_span = index => {
        let elemenName = document.createElement('span')
        elemenName.textContent = response.data[index].name
        return elemenName
    }

    for (let i = 0; i < response.data.length; i++) {
        let Grand_ParentNode = document.getElementById('listSomething')
        let inputType = createInputType(i)
        let ParentNode = createParentNode(i)        
        let childNode_P = createChildNode_P(i)
        let childNode_span = createChildNode_span(i)
        Grand_ParentNode.appendChild(ParentNode)
        ParentNode.appendChild(inputType)
        ParentNode.appendChild(childNode_P)
        ParentNode.appendChild(childNode_span)
    }
}

let Data_Template = async (Fetch_Action) => {
    const Response = await fetch(`${Link}privilege`, Fetch_Action)
    const Response_JSON = await Response.json();
    console.log(Response_JSON);
    if (Response_JSON.status === 201) {
        console.log("input sucess");
        console.log(Response_JSON);
    } else {
        console.log("data failed");
    }
}

const Post_data= (Name = "", url_Link = "") => {
    const POST = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "name" : `${Name}`,
            "url" : `/${url_Link}`
        })
    }
    return POST
}

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

const Form_Submit = ()=> {
    let get_form = document.querySelector('#form')
    let get_data = document.querySelector('#inputName')
    let get_Url = document.querySelector('#inputURL')
    get_form.addEventListener('submit', (e) => {
        e.preventDefault();
        Data_Template(Post_data(get_data.value, get_Url.value))
        setTimeout(() => window.location.reload(), 500)
    })
}

let Form_Delete = async (Fetch_Action) => {
    const Response = await fetch(`${Link}privilege`, Fetch_Action)
    const Response_JSON = await Response.json();
    console.log(Response_JSON);
    if (Response_JSON.status === 201) {
        console.log("input sucess");
        console.log(Response_JSON);
    } else {
        console.log("data failed");
    }
}


Show_Screen_data()
Form_Submit()
Console_Show_Data()