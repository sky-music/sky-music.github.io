---
layout: default
---

<h1>Make your own visual music sheet!</h1>

<p>Here's a step by step guide how to create your own visual music sheet.</p>
If you would like to contribute a finished sheet to this website please join our <a href="./discord.html">Discord</a> server by clicking  <a href="./discord.html">Here</a>

<h2>Python Method</h2>

<h3>Step 1 - Install Python</h3>
If you don't yet have Python 3 already installed on your computer you can download it by clicking <a href="https://www.python.org/downloads/" target="_blank">Here</a>

<p>Once installed, open cmd (Command Prompt) on Windows, or Terminal on Mac, and copy and past these commands:</p>
<pre>
  <code>
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade pillow
pip install mido==1.2.9
  </code>
</pre>
    
<h3>Step 2 - Run Python Music Sheet Maker</h3>
Download our Sky Music Sheet Maker by clicking <a href="https://github.com/sky-music/sky-python-music-sheet-maker" target="_blank">Here</a>. Click on the green "Clone or Download" button, then choose "Download" ZIP".

For the sake of examples let's extract this to your Desktop.

<p>Open cmd on Windows, or Terminal on Mac, and enter the following command:</p>
    ```yml
cd Desktop/sky-python-music-sheet-maker-master/python
    ```
    
(If you wish to store the folder elsewhere or change it's name, please change this command accordingly afterwards).

<p>While still in cmd on Windows, enter:</p>
    ```yml
command_line.py
    ```
<p>OR if still in terminal on Mac, enter:</p>
    ```yml
python3 command_line.py
    ```
<h3>Step 3 - Write your music</h3>
We recommend typing your notation out in Notepad or similar before inputting into cmd/Terminal, as it's easier for you to fix any mistakes this way.

<p>We'll use the ABC1-5 method to input songs.</p>
<img src="./assets/images/ABC15.jpg">
If you're unfamilliar with this chart or how it will output, please see the <a href="./how-to-read.html">How to Read</a> page.

<p>Seperate boxes by using a blank space, for example typing "B3 B4 B5" will produce:</p>
<img src="./assets/images/notespaces.png">

<p>Type letters next to each other for a chord, for example typing "A1A3A5 B1B3B5" will produce:</p>
<img src="./assets/images/chords.png">

<p>Use . for blank notes, used to signify a pause in the song, for example typing "B4 . B5" will produce:</p>
<img src="./assets/images/space.png">

<p>Use - for coloured notes, used to signify pressing buttons in a fast pace, for example "A3-B1-B3-B5-C3" will produce:</p>
<img src="./assets/images/colourednotes.JPG">

<p>Tip 1: We usually find 8 boxes a row works best.</p>
Tip 2: Do not use a blank line as this will end the song. If you need a blank line in the song use . for blank notes.

<h3>Step 4 - Input your music!</h3>
With your music typed out, now simply copy and paste all of your notes into cmd/terminal after you've followed Step 2.
To end the song, press 'Enter' for a new line, then press 'Enter' again on the blank line.

You'll now be asked to input a recommended key (leave blank if unsure), the song title, original artist and who it was transcribed by (your name).

Your song will be saved in html format to the /songs_out/ folder where you saved the sky-python-music-sheet-maker folder.

<h2>We would love to have your song on this website!</h2>
<p>Join our <a href="./discord.html">Discord</a> and send us the file so we can upload it here! We can also embed an accompanying video if you have one hosted somewhere.</p>
All we ask is that you quality check your sheet before submitting, as others will be learning from it too.


If you need any support or would like to ask questions you can join our <a href="./discord.html">Discord</a> server by clicking <a href="./discord.html">Here</a>









