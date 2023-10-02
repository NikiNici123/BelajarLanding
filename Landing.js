const menu = { 
    "type": "module",
    "Header" : [
        {
        "id" : "Project",
        "text" : "Project"
        }, 
        {
            "id" : "Hubungi",
            "text": "hubungi"
        },
        {
            "id" : "Lokasi",
            "text" : "Lokasi"
        }, 
        {
            "id" : "Pap",
            "text" : "Pap"
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
        let elemen = document.createElement('p')
        let IDParent = document.querySelector('#Header')
        elemen.textContent = menu.Header[i].text
        elemen.setAttribute('class', 'textHeader')
        elemen.setAttribute('id', menu.Header[i].id)
        IDParent.appendChild(elemen)
    }
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


const SOURCE_TRAINING_LANDING = "https://booking.kai.id/api/stations2"

async function FetchCertainData(key = "") {
    const response = await fetch(SOURCE_TRAINING_LANDING);
    const get = await response.json();
    return get[key].code;
}

async function CreateTrainDiv() {
    const trainChild = document.querySelector('#trainChild');
    let endpoint = 0;
    const totalKereta = 10;
    for (let index = 0; index < totalKereta; index++ ) {
        const createDiv = document.createElement('div');
        createDiv.id = `${index}`
        createDiv.setAttribute('class', 'flex flex-col flex-warp gap-10')
        
        for (let j = 0; j <= 1; j++) {
            const createH1 = document.createElement('h1');
            createH1.textContent = await FetchCertainData(endpoint) ;
            createDiv.appendChild(createH1);
            endpoint++;
        }
        trainChild.appendChild(createDiv)
    }
}


Header()
ImageofMeChanges();
CreateTrainDiv()
createElementContent2()
scrollInto('Project', 'Projects');
scrollInto('Hubungi', 'ContactMe');
scrollInto('Lokasi', 'Train');



