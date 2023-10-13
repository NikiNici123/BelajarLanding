get_form.addEventListener('submit', (e) => {
        e.preventDefault();
        Data_Template(get_data.value, get_Url.value)
        setTimeout(() => window.location.reload(), 5000)
    })



