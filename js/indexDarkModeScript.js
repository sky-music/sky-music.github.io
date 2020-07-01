let sideBar = document.getElementById("sidebar")
let toggleDarkModeBtn = "<div id='darkModeBtn' style='background-color:#121212; font-size:1.5em; height:2em;color:white;" +
    "border-radius:4px; display: flex; align-items: center; justify-content: center; margin-bottom:5px;'>Turn on dark mode 🌙</div>"
sideBar.innerHTML = toggleDarkModeBtn + sideBar.innerHTML
document.getElementById("darkModeBtn").addEventListener("click", function () {
    let contentWrapper = document.getElementById("content-wrapper")
    let sidebar = document.getElementById("sidebar")
    let darkModeBtn = document.getElementById("darkModeBtn")
    if (contentWrapper.style.backgroundColor != "rgb(18, 18, 18)") {
        sidebar.style = "background: #121212; color: lightgray;"
        contentWrapper.style = "background: #121212; color: lightgray;"
        darkModeBtn.innerHTML = "Turn on white mode ☀️"
        darkModeBtn.style.background = "#f2f2f2"
        darkModeBtn.style.color = "#121212"
        localStorage.setItem("darkMode", true)
    } else {
        sidebar.style = ""
        contentWrapper.style = ""
        darkModeBtn.innerHTML = "Turn on dark mode 🌙"
        darkModeBtn.style.background = "#121212"
        darkModeBtn.style.color = "lightgray"
        localStorage.setItem("darkMode", false)
    }
})
if (localStorage.getItem("darkMode") == "true") document.getElementById("darkModeBtn").click()