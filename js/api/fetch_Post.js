let Data_Post = async (Name, url_Link) => {
    const Response = await fetch(`${Link}privilege`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "name" : `${Name}`,
            "url" : `/${url_Link}`
        })
    })
    const Response_JSON = await Response.json();
    console.log(Response_JSON);
    if (Response_JSON.status === 201) {
        console.log("input sucess");
        console.log(Response_JSON);
    } else {
        console.log("data failed");
    }
}