function toggleMenu()
{
    var menu = document.getElementById("menu")
    var icon = document.getElementById("icon")

    if (icon && menu && menu.style.display === "block")
    {
        menu.style.display = "none"
        icon.style.paddingBottom = "40px"
    }
    else if (icon && menu)
    {
        menu.style.display = "block"
        icon.style.paddingBottom = "0px"
    }
}