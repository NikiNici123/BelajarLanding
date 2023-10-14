form_delete.addEventListener("submit", (e) => {
  e.preventDefault()
  let CheckboxValue = document.querySelectorAll("input[type=checkbox]")
  let data_id = document.querySelectorAll("#data_Id")
  let data_url = document.querySelectorAll("#data_Url")

  CheckboxValue.forEach((element,index) => {
    if (element.checked) {
      if (element.checked > 1) {
        for(let i = 0; i < element.checked.length ; i++) {
          Data_Delete(parseInt(data_id[index].textContent), data_url[index].textContent)
        }
      }
      else {
        Data_Delete(parseInt(data_id[index].textContent), data_url[index].textContent)
      }
    } 
  })
  setTimeout(() => window.location.reload(), 500)
})



