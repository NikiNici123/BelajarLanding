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


let newTry = "asdasd"
const coba = (element) => {
    if (element.target.style.background == "") {
        element.target.style.background = "red"
    }
    else if (element.target.style.background == "red") {
        element.target.style.background = ""
    }
   
}

// let AboutMeChanges = () => {
//     let PositionAboutMe = 0
//     let AboutText = document.querySelectorAll('.About_Text') 
//     let ButtonNext = document.querySelector('#btnAboutMe')

//     let hideAbout = ()  => {
//         AboutText[PositionAboutMe].style.display = "block"
//         for (let i = 0; i < AboutText.length; i++) {
//             if (i !== PositionAboutMe) {
//                 AboutText[i].style.display = "none"
//             }
//         }
//     }

//     let control = () => {
//         if (PositionAboutMe >= 0 && PositionAboutMe < AboutText.length) {
//             hideAbout()
//         }else if (PositionAboutMe < 0) {
//             PositionAboutMe = AboutText.length
//             hideAbout()
//         }else if (PositionAboutMe === AboutText.length) {
//             PositionAboutMe = 0
//             hideAbout()
//         }
//     } 

//     control()

//     ButtonNext.addEventListener("click", () => {
//         PositionAboutMe++;
//         control()  
//     })
// }

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

// let ProjectOfMeChanges = () => {
//     let PositionImOfMe = 0
//     let AboutText = document.querySelectorAll('.ListProject') 
//     let ButtonNext = document.querySelector('.AfterBtnProject')
//     let ButtonPrev = document.querySelector('.PreviousBtnProject')

//     let hideImOfMe = ()  => {
//         AboutText[PositionImOfMe].style.display = "block"
//         for (let i = 0; i < AboutText.length; i++) {
//             if (i !== PositionImOfMe) {
//                 AboutText[i].style.display = "none"
//             }
//         }
//     }

//     let control = () => {
//         if (PositionImOfMe >= 0 && PositionImOfMe < AboutText.length) {
//             hideImOfMe()
//         }else if (PositionImOfMe < 0) {
//             PositionImOfMe = AboutText.length
//             hideImOfMe()
//         }else if (PositionImOfMe === AboutText.length) {
//             PositionImOfMe = 0
//             hideImOfMe()
//         }
//     } 

//     control()

//     ButtonNext.addEventListener("click", () => {
//         PositionImOfMe++;
//         control()  
//     })
//     ButtonPrev.addEventListener("click", () => {
//         PositionImOfMe--;
//         control()  
//     })
// }

let buttonsDo = () => {

}
// AboutMeChanges();
ImageofMeChanges();
// ProjectOfMeChanges();

let section = document.querySelectorAll('section')



for(let i = 0; i<menu.Header.length;i++) {
    let elemen = document.createElement('p')
    let IDParent = document.querySelector('#Header')
    elemen.textContent = menu.Header[i].text
    elemen.setAttribute('class', 'textHeader')
    elemen.setAttribute('id', menu.Header[i].id)
    IDParent.appendChild(elemen)
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

createElementContent2()






scrollInto('Project', 'Projects');
scrollInto('Hubungi', 'ContactMe');
scrollInto('Lokasi', 'Gmaps');