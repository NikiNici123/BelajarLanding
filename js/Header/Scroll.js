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

scroll_Function()