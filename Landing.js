const menu = { 
    "type": "module",
    "Header" : [
        {
        "id" : "Project",
        "text" : "Project",
        "class" : "fi fi-rr-edit"
        }, 
        {
        "id" : "Hubungi",
        "text": "hubungi",
        "class" : "fi fi-br-phone-call"
        },
        {
            "id" : "Lokasi",
            "text" : "Lokasi",
            "class" : "fi fi-rr-marker"
        }, 
        {
            "id" : "Pap",
            "text" : "Pap",
            "class" : "fi fi-rr-shopping-cart"
        }],
    "Content2" : [
        {
        "id" : "AboutMe",
        "text" : "About Me"
        },
        {
        "id" : "AboutMeText",
        "text" : "Young female programmer, with much passion also single yet taken "
        }
    ]
}

const Link = "https://api.cms.zver.my.id/v1/"

let ImageofMeChanges = () => {
    let PositionImOfMe = 0
    let AboutText = document.querySelectorAll('.Images') 
    let ButtonNext = document.querySelector('#btnAbout')

    let hideImOfMe = ()  => {
        AboutText[PositionImOfMe].style.display = "block"
        for (let i = 0; i < AboutText.length; i++) {
            if (i !== PositionImOfMe) {
                AboutText[i].style.display = "none"
            }
        }
    }

    let control = () => {
        if (PositionImOfMe >= 0 && PositionImOfMe < AboutText.length) {
            hideImOfMe()
        }else if (PositionImOfMe < 0) {
            PositionImOfMe = AboutText.length
            hideImOfMe()
        }else if (PositionImOfMe === AboutText.length) {
            PositionImOfMe = 0
            hideImOfMe()
        }
    } 

    control()

    ButtonNext.addEventListener("click", () => {
        PositionImOfMe++;
        control()  
        console.log(PositionImOfMe);
    })
}

let buttonsDo = () => {

}

const Create_Header = () => {
    for(let i = 0; i<menu.Header.length;i++) {
        let IDParent = document.querySelector('#Header')
        let divParent = document.createElement('div')
        divParent.id = `Header${i}`
        divParent.setAttribute('class', 'group flex lg:place-self-center lg:flex-col gap-y-10')
        let elemen = document.createElement('i')
        elemen.setAttribute('class', ` ${menu.Header[i].class} group hidden border-slate-700 border-2 px-2 py-1 lg:px-5 lg:py-3  lg:block rounded-md hover:bg-slate-500 hover:border-white hover:text-red-300 hover:rounded-2xl hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300 ease-in-out`)
        elemen.setAttribute('id', menu.Header[i].id)
        IDParent.appendChild(divParent)
        divParent.appendChild(elemen)
        listInHeader(i, divParent.id)
    }
}

const listInHeader = (index,ParentID) => {
      let IDParent = document.querySelector(`#${ParentID}`)
      let elementUL = document.createElement('ul')
      elementUL.setAttribute('class', 'flex flex-row justify-center ')
      IDParent.appendChild(elementUL)
      let elementList = document.createElement('a')
      elementList.textContent = menu.Header[index].text
      elementList.setAttribute('class' , 'group hidden text-sm text-white absolute py-5 px-5 bg-black lg:group-hover:block lg:group-hover:bg-slate-500 lg:group-hover:border-white lg:group-hover:text-red-300 lg:group-hover:rounded-2xl lg:group-hover:transition-all' )
      elementUL.appendChild(elementList)
}

let scrollInto = (ButtonID, TargetClass) => {
    let ButtonProject = document.querySelector(`#${ButtonID}`)
    let targetDiv = document.querySelector(`.${TargetClass}`)
    ButtonProject.addEventListener('click', () => targetDiv.scrollIntoView())
}

const scroll_Function = () => {
    scrollInto('Project', 'Projects');
    scrollInto('Hubungi', 'ContactMe');
    scrollInto('Lokasi', 'Train');
}

Console_Show_Data = async () => {
    const Response = await fetch(`${Link}privilege`)
    const Response_JSON = await Response.json();
    if (Response_JSON.status === 200) {
        console.log("Read Sucess");
        console.log(Response_JSON.data);
    } else {
        console.log("Read failed");
    }
}

Show_Screen_data = async () => {
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
        elemenID.textContent = response.data[index].id
        return elemenID
    }

    let createChildNode_span = index => {
        let elemenName = document.createElement('span')
        elemenName.textContent = response.data[index].name
        return elemenName
    }

    for (let i = 0; i < response.data.length; i++) {
        let Grand_ParentNode = document.getElementById('listSomething')
        let ParentNode = createParentNode(i)        
        let childNode_P = createChildNode_P(i)
        let childNode_span = createChildNode_span(i)
        Grand_ParentNode.appendChild(ParentNode)
        ParentNode.appendChild(childNode_P)
        ParentNode.appendChild(childNode_span)
    }
}

async function Fetch_data(Fetch_Action) {
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

const Del_Data= (Name = "", url_Link = "") => {
    const DEL = {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "name" : `${Name}`,
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
        Fetch_data(Post_data(get_data.value, get_Url.value))
        setTimeout(() => window.location.reload(), 500)
    })
}


Show_Screen_data()
Create_Header()
ImageofMeChanges();
scroll_Function()
Form_Submit()
Console_Show_Data()





