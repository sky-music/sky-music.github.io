  window.addEventListener("load", function() {
    let body = document.getElementsByTagName("body")[0]
    let toggleDarkModeBtn = "<div id='darkModeBtn' style='background-color:#121212; font-size:1.3em; height:1.5em;color:white; position:absolute; right: 8px; top:8px;" +
        "border-radius:4px; display: flex; align-items: center; justify-content: center; margin-bottom:5px; padding:5px'>Turn on dark mode 🌙</div>"
    body.innerHTML += toggleDarkModeBtn
    let darkModeBtn = document.getElementById("darkModeBtn")
    document.getElementById("darkModeBtn").addEventListener("click", function () {
        if (body.style.backgroundColor != "rgb(18, 18, 18)") {
            body.style = "background: #121212; color: lightgray;"
            darkModeBtn.innerHTML = "Turn on white mode ☀️"
            darkModeBtn.style.background = "#f2f2f2"
            darkModeBtn.style.color = "#121212"
            let tables = document.getElementsByTagName("table")
            for (let i = 1; i < tables.length; i++) {
                if (tables[i].className != "voice") {
                    tables[i].firstChild.style.backgroundColor = "#323232"
                    tables[i].style = "border: solid 1.5px #666;"
                }
            }
            tables[0].style = "border: solid 1.5px #666;"
            localStorage.setItem("darkMode", true)
        } else {
            body.style = ""
            darkModeBtn.innerHTML = "Turn on dark mode 🌙"
            darkModeBtn.style.background = "#121212"
            darkModeBtn.style.color = "lightgray"
            let tables = document.getElementsByTagName("table")
            for (let i = 1; i < tables.length; i++) {
                if (tables[i].className != "voice") {
                    tables[i].firstChild.style.backgroundColor = ""
                    tables[i].style = ""
                }
            }
            tables[0].style = "border: solid 1.5px #black;"
            localStorage.setItem("darkMode", false)
        }
    })
    if (localStorage.getItem("darkMode") == "true") document.getElementById("darkModeBtn").click()
  });
