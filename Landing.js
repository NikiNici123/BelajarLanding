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

let Key = 'kNtIMeMmkB7gWT0oQC6EzdJAeCTzbI49JFGRsi2cXgG6rGAj'

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
        let elemen = document.createElement('i')
        elemen.setAttribute('class', menu.Header[i].class+ " border-slate-700 border-2 px-2 py-1 lg:px-5 lg:py-3 rounded-md hover:bg-slate-500 hover:border-white hover:text-red-300 hover:rounded-2xl transition-all duration-300 ease-in-out")
        elemen.setAttribute('id', menu.Header[i].id)
        IDParent.appendChild(elemen)
    }
}

const listInHeader = () => {
    menu.Header.forEach((element, index) => {
       let IDParent = document.querySelector("#"+element.id)
       let elemen = document.createElement('') 
    });

}

// const HeaderChild = () => {
//     let IDParent = document.querySelector('#Project')
//     for
// }

let scrollInto = (ButtonID, TargetClass) => {
    let ButtonProject = document.querySelector(`#${ButtonID}`)
    let targetDiv = document.querySelector(`.${TargetClass}`)
    ButtonProject.addEventListener('click', () => targetDiv.scrollIntoView())
}

let createElementContent2 = () => {
    let Content2 = document.querySelector('#Content2')
    let createDiv = document.createElement('h1')


}


const SOURCE_TRAINING_LANDING = "api.cms.zver.my.id"

async function FetchCertainData(key = "") {
    const response = await fetch(SOURCE_TRAINING_LANDING);
    const get = await response.json();
    return log(get);
}

Header()
ImageofMeChanges();
// FetchCertainData()
createElementContent2()
scrollInto('Project', 'Projects');
scrollInto('Hubungi', 'ContactMe');
scrollInto('Lokasi', 'Train');



