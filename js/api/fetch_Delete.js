let Data_Delete = async (id, url_Link) => {
    const Response = await fetch(`${Link}privilege`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            "id" : id,
            "url" : `${url_Link}`
        })
    })
    const Response_JSON = await Response.json();
    console.log(Response_JSON);
    if (Response_JSON.status === 200) {
        console.log("input sucess");
        console.log(Response_JSON);
    } else {
        console.log("data failed");
    }
}