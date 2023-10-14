const coba_Menu = async () => {
    const panggil = await fetch("Data/menu.json")
    const response = await panggil.json()
    return response
}