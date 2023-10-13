form_post.addEventListener('submit', (e) => {
        e.preventDefault();
        Data_Post(get_data.value, get_Url.value)
        setTimeout(() => window.location.reload(), 5000)
    })



