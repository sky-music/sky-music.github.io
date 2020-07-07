window.addEventListener("load", function () {
    let body = document.getElementsByTagName("body")[0]
    let downloadButton = document.createElement("div")
    downloadButton.style = "background-color:#121212; font-size:1.3em; height:1.5em;color:white; width:100%" +
        "border-radius:4px; display: flex; align-items: center; justify-content: center; cursor:pointer; margin-bottom:5px; padding:5px;"
    downloadButton.id = "downloadButton"
    downloadButton.innerHTML = "Download sheet"
    downloadButton.addEventListener("click", function () {
        let tables = document.getElementsByTagName("table")
        let songNotes = []
        let timestamp = 200
        let bpm = 200
        let songName = document.title
        let bpmToMs = Math.floor(60000 / bpm)
        for (let i = 1; i < tables.length; i++) {
            let cell = tables[i].children[0]
            timestamp += bpmToMs
            let noteNumber = 0
            for (let j = 0; j < 3; j++) {
                if (cell.children.length < 3) break
                let row = cell.children[j]
                for (let k = 0; k < 5; k++) {
                    let note = row.children[k]
                    if (note.children[0].classList[0] != "OFF") {
                        if(!note.children[0].children[0].classList.value.includes("unhighlighted")){
                            let keyObj = {
                                key: "1Key" + noteNumber,
                                time: timestamp
                            }
                            songNotes.push(keyObj)
                        }
                    }
                    noteNumber++
                }
            }
        }
        let exportObj = {
            name: songName,
            bpm: bpm,
            bitsPerPage: 16,
            pitchLevel: 0,
            songNotes: songNotes,
        }
        let exportArray = [exportObj]
        download(exportArray, songName)

        function download(inArray, fileName) {
            let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(inArray));
            let dlAnchorElem = document.createElement("a")
            dlAnchorElem.setAttribute("href", dataStr);
            dlAnchorElem.setAttribute("download", fileName + ".txt");
            dlAnchorElem.click();
            dlAnchorElem.remove()
        }
    })




    let toggleDarkModeBtn = document.createElement("div")
    toggleDarkModeBtn.style = "background-color:#121212; font-size:1.3em; height:1.5em;color:white; width:100%" +
        "border-radius:4px; display: flex; align-items: center; justify-content: center; cursor:pointer; margin-bottom:5px; padding:5px"
    toggleDarkModeBtn.innerHTML = "Turn on dark mode 🌙"
    toggleDarkModeBtn.id = "darkModeBtn"
    toggleDarkModeBtn.addEventListener("click", function () {
        let downloadSong = document.getElementById("downloadButton")
        if (body.style.backgroundColor != "rgb(18, 18, 18)") {
            body.style = "background: #121212; color: lightgray;"
            this.innerHTML = "Turn on light mode ☀️"
            this.style.background = "#f2f2f2"
            this.style.color = "#121212"
            downloadSong.style.background = "#f2f2f2"
            downloadSong.style.color = "#121212"
            let tables = document.getElementsByTagName("table")
            for (let i = 1; i < tables.length; i++) {
                if (!tables[i].classList.value.includes("silent") && !tables[i].classList.value.includes("voice") && !tables[i].classList.value.includes("repeat")) {
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
            downloadSong.style.background = "#121212"
            downloadSong.style.color = "lightgray"
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
    container.style = "position:absolute; right: 8px; top:8px; width:30%;"
    container.appendChild(toggleDarkModeBtn)
    container.appendChild(downloadButton)
    body.appendChild(container)
    if (localStorage.getItem("darkMode") == "true") document.getElementById("darkModeBtn").click()
})