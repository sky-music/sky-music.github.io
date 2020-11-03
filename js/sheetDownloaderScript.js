window.addEventListener("load", function () {
    let body = document.getElementsByTagName("body")[0]
    let downloadButton = document.createElement("div")
    let downloadPdf = document.createElement("div")
    let style = "background-color:#121212; font-size:1.3em; height:1.5em;color:white; width:100%" +
        "border-radius:4px; display: flex; align-items: center; justify-content: center; cursor:pointer; margin-bottom:5px; padding:5px;"

    downloadButton.style = style
    downloadPdf.style = style
    downloadPdf.innerHTML = "Print / Save as PDF"
    downloadPdf.addEventListener("click", function () {
        let iframe = document.querySelector("iframe")
        let container = this.parentElement
        if (iframe !== null) iframe.style.display = "none"
        container.style.display = "none"
        window.print()
        if (iframe !== null) iframe.style.display = "block"
        container.style.display = "block"
    })
    downloadPdf.id = "downloadPdf"
    downloadButton.id = "downloadButton"
    downloadButton.innerHTML = "Download song recording"
    let toolTip = `
      After the download:
      1/ go to https://sky-music.herokuapp.com
      2/ Press 'manage recordings'
      3/ Import the text file
      4/ Listen to your song being played!
    `
    downloadButton.setAttribute("title", toolTip)
    downloadButton.addEventListener("click", function () {
        let tables = document.getElementsByTagName("table")
        let songNotes = []
        let timestamp = 200
        let bpm = 200
        let songName = document.title
        let bpmToMs = Math.floor(60000 / bpm)
        for (let i = 1; i < tables.length; i++) {
            let cell = tables[i].children[0]
            if (cell.children.length > 2) timestamp += bpmToMs
            let noteNumber = 0
            for (let j = 0; j < 3; j++) {
                if (cell.children.length < 3) break
                let row = cell.children[j]
                for (let k = 0; k < 5; k++) {
                    let note = row.children[k]
                    if (note.children[0].classList[0] != "OFF") {
                        if (!note.children[0].children[0].classList.value.includes("unhighlighted")) {
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

        let helpText = "Go to https://sky-music.herokuapp.com/, press 'manage recordings' and import the text file, and listen to your song being played!"

        let exportObj = {
            name: songName,
            bpm: bpm,
            bitsPerPage: 16,
            pitchLevel: 0,
            helpText: helpText,
            songNotes: songNotes
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

    let container = document.createElement("div")
    container.id = "scriptContainer"
    container.style = "position:absolute; right: 8px; top:8px; width:30%;"
    if (document.getElementById("scriptContainer") == null) {
        body.appendChild(container)
    } else {
        container = document.getElementById("scriptContainer")
        if (body.style.backgroundColor != "rgb(18, 18, 18)") {
            downloadButton.style.background = "#121212"
            downloadButton.style.color = "lightgray"
            downloadPdf.style.background = "#121212"
            downloadPdf.style.color = "lightgray"
        } else {
            downloadButton.style.background = "#f2f2f2"
            downloadButton.style.color = "#121212"
            downloadPdf.style.background = "#f2f2f2"
            downloadPdf.style.color = "#121212"
        }
    }
    container.append(downloadButton, downloadPdf)
})
