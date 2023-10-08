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

const Header = () => {
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

let createElementContent2 = () => {
    let Content2 = document.querySelector('#Content2')
    let createDiv = document.createElement('h1')


}



let AUTHKEY = ""
let AUTHREFRESH = ""
let endpoint = ""

const Link = "https://api.cms.zver.my.id/v1/"

async function Show_data() {
    const Response = await fetch(`${Link}privilege`)
    const Response_JSON = await Response.json();
    if (Response_JSON.status === 200) {
        console.log("Read Sucess");
        console.log(Response_JSON);
    } else {
        console.log("Read failed");
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
    const Get = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "name" : `${Name}`,
            "url" : `/${url_Link}`
        })
    }
    return Get
}

const Form_Submit = ()=> {
    let get_form = document.querySelector('#form')
    let get_data = document.querySelector('#inputName')
    let get_Url = document.querySelector('#inputName')
    get_form.addEventListener('submit', (e) => {
        e.preventDefault();
        URL_input = get_Url.value;
        Name_input = get_data.value;
        Fetch_data(Post_data(Name_input, URL_input))
        Show_data()
        setTimeout(() => window.location.reload(), 500)
    })
}

Form_Submit()
Show_data()
Header()
ImageofMeChanges();
// FetchCertainData()
createElementContent2()
scrollInto('Project', 'Projects');
scrollInto('Hubungi', 'ContactMe');
scrollInto('Lokasi', 'Train');



