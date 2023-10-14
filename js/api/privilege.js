async function getPrivilege() {
    const get_Data = await fetch(`${API_LINK_VERO}privilege`);
    const response = await get_Data.json()
    return response
}
