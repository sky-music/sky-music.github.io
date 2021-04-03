
window.addEventListener("load", function () {
    let style = `
        #buttonsWrapper{
            position:absolute;
            right:0;
            top:0;
            display:flex;
            flex-direction:column;
        }
        #buttonsWrapper button{
            background-color:rgb(53, 52, 52);
            font-size:1.2rem;
            color:white;
            margin:0.2rem;
            padding:0.8rem;
            border:none;
            border-radius:5px;
            cursor:pointer;
            text-align:left;
        }
        .redirect{
            color: #2879d0;
            font-size:1.5rem;
            position:absolute;
            right:1rem;
            top:1rem;
            font-weight:bold;
        }
    `
    let styleElement = document.createElement("style")
    styleElement.innerHTML = style
    let isV3Sheet = document.querySelectorAll("d1").length > 0
    let injectedHTML = `
        <div id="buttonsWrapper">
            <button id="downloadJSON" >
                Downlaod song as JSON
            </button>
            <button id="downloadHTML" >
                Download song as HTML
            </button>
            <button id="downloadPDF" >
                Print / Save as PDF
            </button>
        </div>
    
    
    `
    document.body.appendChild(styleElement)
    document.body.innerHTML += injectedHTML
    let downloadJSON = document.getElementById("downloadJSON")
    let downloadPDF = document.getElementById("downloadPDF")
    let downloadHTML = document.getElementById("downloadHTML")
    let buttonsWrapper = document.getElementById("buttonsWrapper")
    downloadJSON.addEventListener("click", function () {
        let tables = document.getElementsByTagName("table")
        let songNotes = []
        let timestamp = 200
        let bpm = 200
        let songName = document.title
        let bpmToMs = Math.floor(60000 / bpm)

        if (isV3Sheet) {
            console.log("v3 sheet")
            let temp = [...document.querySelectorAll(".line")]
            tables = []
            temp.forEach(e => tables.push(...e.children))
            for (let i = 0; i < tables.length; i++) {
                let notesContainer = tables[i]
                if (notesContainer.children.length > 10) {
                    timestamp += bpmToMs
                    let notes = notesContainer.children
                    if (!notesContainer.classList.contains("silent")) {
                        for (let j = 0; j < notes.length; j++) {
                            if (!["D1", "D2", "D3"].includes(notes[j].tagName)) {
                                let keyObj = {
                                    key: "1Key" + j,
                                    time: timestamp
                                }
                                songNotes.push(keyObj)
                            }
                        }
                    }

                }
            }


        } else {
            //V1 and V2
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
        }

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
    })

    downloadHTML.addEventListener("click", function () {
        let element = document.createElement('a');
        let clonedDom = document.documentElement.cloneNode(true)
        try {
            let navigation = clonedDom.querySelector("#navigation")
            navigation.innerHTML = "<a href='https://sky-music.github.io/' class='redirect'> Sky music </a>"
            clonedDom.querySelectorAll("script").forEach(script => {
                script.parentNode.removeChild(script)
            })
            let scriptContainer = clonedDom.querySelector("#buttonsWrapper")
            scriptContainer.parentElement.removeChild(scriptContainer)
        } catch (e) {
            console.log(e)
        }

        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(clonedDom.innerHTML));
        element.setAttribute('download', document.title + ".html");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    })

    downloadPDF.addEventListener("click", function () {
        buttonsWrapper.style.display = "none"
        window.print()
        buttonsWrapper.style.display = "flex"
    })




    function download(data, fileName) {
        let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, "\t"));
        let dlAnchorElem = document.createElement("a")
        dlAnchorElem.setAttribute("href", dataStr);
        dlAnchorElem.setAttribute("download", fileName + ".txt");
        dlAnchorElem.click();
        dlAnchorElem.remove()
    }




    let helpText = `
    After the download:
    1/ go to https://sky-music.herokuapp.com
    2/ Press 'manage recordings'
    3/ Import the text file
    4/ Listen to your song being played!
    `
  downloadJSON.setAttribute("title", helpText)


})
