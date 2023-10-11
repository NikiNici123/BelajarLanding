async function getPrivilege() {
    const get_Data = await fetch(`${Link}privilege`);
    const response = await get_Data.json()
    return response
}
