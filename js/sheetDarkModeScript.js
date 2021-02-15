window.addEventListener("load", function () {
    let body = document.getElementsByTagName("body")[0]
    let toggleDarkModeBtn = document.createElement("div")
    toggleDarkModeBtn.style = "background-color:#121212; font-size:1.3em; height:1.5em;color:white; width:100%" +
        "border-radius:4px; display: flex; align-items: center; justify-content: center; cursor:pointer; margin-bottom:5px; padding:5px"
    toggleDarkModeBtn.innerHTML = "Turn on dark mode 🌙"
    toggleDarkModeBtn.id = "darkModeBtn"

    toggleDarkModeBtn.addEventListener("click", function () {
        let downloadPdf = document.getElementById("downloadPdf")
        let downloadSong = document.getElementById("downloadButton")
        if (body.style.backgroundColor != "rgb(18, 18, 18)" || body.style.backgroundColor == "") {
            body.style = "background: #121212; color: lightgray;"
            this.innerHTML = "Turn on light mode ☀️"
            this.style.background = "#f2f2f2"
            this.style.color = "#121212"
            if (downloadSong != null) {
                downloadSong.style.background = "#f2f2f2"
                downloadSong.style.color = "#121212"
                downloadPdf.style.background = "#f2f2f2"
                downloadPdf.style.color = "#121212"
            }
            let tables = document.getElementsByTagName("table")
            for (let i = 1; i < tables.length; i++) {
                if (!tables[i].classList.value.includes("silent") && !tables[i].classList.value.includes("voice") && !tables[i].classList.value.includes("repeat") && !tables[i].classList.value.includes("num")) {
                    tables[i].style.backgroundColor = "#323232"
                    tables[i].style = "border: solid 1.5px #666;"
                } else {
                    tables[i].style.border = "solid 1.5px transparent"
                }
            }
            tables[0].style = "border: solid 1.5px #666;"
            localStorage.setItem("darkMode", true)
        } else {
            body.style = ""
            this.innerHTML = "Turn on dark mode 🌙"
            this.style.background = "#121212"
            this.style.color = "lightgray"
            if (downloadSong != null) {
                downloadSong.style.background = "#121212"
                downloadSong.style.color = "lightgray"
                downloadPdf.style.background = "#121212"
                downloadPdf.style.color = "lightgray"
            }
            let tables = document.getElementsByTagName("table")
            for (let i = 1; i < tables.length; i++) {
                if (tables[i].className != "voice") {
                    tables[i].style.backgroundColor = ""
                    tables[i].style = ""
                }
            }
            tables[0].style = "border: solid 1.5px black;"
            localStorage.setItem("darkMode", false)
        }
    })
    let container = document.createElement("div")
    container.id = "scriptContainer"
    container.style = "position:absolute; right: 8px; top:8px; width:30%;"
    if (document.getElementById("scriptContainer") == null) {
        body.appendChild(container)
    } else {
        container = document.getElementById("scriptContainer")
    }
    //to make it the first element since the scripts are loaded asynchronously
    container.insertBefore(toggleDarkModeBtn, container.firstChild);
    if (localStorage.getItem("darkMode") == "true") document.getElementById("darkModeBtn").click()
})