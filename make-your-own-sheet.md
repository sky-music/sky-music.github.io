---
layout: default
---

# Make your own visual music sheet!

Here's a step by step guide how to create your own visual music sheet.

## Without Python

**If you do not want to customize the program, and you are not interested in getting the latest version, you have several options:**

1. Use the [website version](https://jmmelko.pythonanywhere.com/)
2. Use the Discord Bot version by typing `!song` in the [official tcg forum](https://discord.gg/thatskygame)
3. Download a binary executable:

	- [For MacOS](./binaries/SkyMusicSheetMaker_MacOS.zip)
	- For Windows (to be done)

*Please note that support is not provided for executables, so if the program crashes you are encouraged to try another option*
Then you can skip go (#write-your-music) learn how to type notes and to read music sheets.</a>

## Using Python

You will need Python >= 3.6 and a few addition packages. We have a [dedicated page](./install-python.html) to explain how to install Python.

Download the Sky Music Sheet Maker by clicking [Here](https://github.com/sky-music/sky-python-music-sheet-maker"). Click on the green "Clone or Download" button, then choose "Download ZIP".

For the sake of an example let's extract this to your Desktop.

Open Terminal on Mac or Linux, and enter the following command:

    cd ~/Desktop/sky-python-music-sheet-maker/src/skymusic

On Windows, open a console prompt (cmd.exe) and type:

    cd /d %homedrive%%homepath%\Desktop\sky-python-music-sheet-maker\src\skymusic

*(If you wish to store the folder elsewhere or change its name, please change the path in the above command accordingly).*

Still in the console, enter:

    python command_line_player.py

If you have installed our program using pip, simply type instead:

    skymusic

If nothing happens or you get an error, there's probably something wrong with your Python installation. Write down the error and contact us by Discord.

## Where files are stored

Input song files must be put in test_songs, 2 levels above the program, or inside your home user directory, inside 'skymusic'

## Write your music

 *We recommend typing out your notation in Notepad or similar before inputting into cmd/Terminal, as it's easier for you to fix any mistakes this way.*

For the benefit of this tutorial we'll use the most recognised ABC1-5 method, however you may find other supported notations [Here](./assets/images/notations.png), replace the notation in this guide accordingly.

<img src="./assets/images/Chart.jpg)

If you're unfamilliar with this chart or how it it reads please check out the [How to Read](./how-to-read.html) page.

_____________

Separate boxes by using a blank space, for example typing "B3 B4 B5" will produce:

<img src="./assets/images/notespaces.png)

_____________

Type letters with no space for a chord, for example typing "A1A3A5 B1B3B5" will produce:

<img src="./assets/images/chords.png)

_____________

Use . for blank notes, used to signify a pause in the song, for example typing "B4 . B5" will produce:

<img src="./assets/images/space.png)

*If using Jianpu notation please use 0 instead*

_____________

Use - for coloured notes, used to signify pressing buttons in a fast pace one after the other from light to dark colour, for example "A3-B1-B3-B5-C3" will produce:

<img src="./assets/images/colourednotes.JPG>

*If using Jianpu notation please use ^ instead*

_____________

To indicate a repeat section, use * directly followed by a number, for example "C1C3 *2" will produce:

<img src="./assets/images/Repeat.JPG>

_____________

Add a line break (press enter in Python or in your text editor) to separate song lines with an horizontal divider.

_____________

Use '#' to start a lyrics line. Type '#' again to split the lyrics and align words with the chords grid: 

    # #Last #Christ - #mas # #I #gave #you    #my #heart
    A1A3A5 B4 B4 B3 . C5 B4 B4 B5 B3

<img src="./assets/images/Comments.PNG>

You can also use '#' to add a header (section title), and format it using HTML tags. For instance:

     #&lt;h1 style="color:red;"&gt;Section 1&lt;/h1&gt;
 
 will produce a section title in big, bold, red letters. This will work with HTML output files but be ignored in other formats.
Use this with great caution as any error in these tags can break the whole HTML file. 

Tip 1: We usually find 8 boxes a row works best for a 16:9 aspect ratio (widescreen). Use line breaks to divide your song in rows.
Tip 2: In the Python command-line program do not press enter after a blank line as this will end the song. If you need a full blank line in the song use '.' for blank notes or enter a lyrics line with no text.

## Step 4 - Input your music!

With your music typed out, now simply copy and paste all of your notes into cmd/terminal after you've followed Step 2.
To end the song, press 'Enter' for a new line, then press 'Enter' again on the blank line.

You'll now be asked to input a recommended key (leave blank if unsure), the song title, original artist and who it was transcribed by (your name).

Your song will be saved in html format to the /songs_out/ folder where you saved the sky-python-music-sheet-maker folder.

## Finished Example

Let's look at the intro to [Can't help falling in love with you](./songs/Cant-Help-Falling-in-Love-Intro.html) by Elvis Presley.
Following the guide above, in CMD or Terminal we input:

    A1A3B3 . A3B2C2 . A3B1B3 . B4 B5
    A2B1C1 . A3A5B5 . A2A5B4 . A5 A4B1B3
    . A5B2B4 . B1B3B5 . B4 B5 C1
    A3A5B5 . A2A5B4 . A1A3B3 . . .

And out comes:

<img src="./assets/images/finishedexample.JPG>

## We would love to have your song on this website!
Join our (./discord.html)Discord</a> and send us the file so we can upload it here! We can also embed an accompanying video if you have one hosted somewhere.
All we ask is that you quality check your sheet before submitting, as others will be learning from it too.

## Going further: understanding input and output file formats

If you intend to use the visual sheets outside our website, you can export them to different file formats. PNG is recommended for quick sharing of songs to friends, but cannot be edited or stretched out. TXT formats are useful for sharing song notes.
Finally, the Sky-JSON recordings (text format) can be fed to the [SkyMusic website](http://sky-music.herokuapp.com), the Android [Sky Music](https://play.google.com/store/apps/details?id=com.herokuapp.sky_music.twa) app and to the Android Sky Studio app.


For input, besides text, the Visual Sheet Maker also accepts HTML Visual Sheets (only for sheets generated after July, 2020 1st). This way, you can generate a new version of a sheet if you have lost the song notes.
The program also accepts Sky-JSON recordings generated by SkyMusic and SkyStudio.


If you need any support or would like to ask questions you can join our )[Discord](./discord.html) server.
[Link to site repository](https://github.com/sky-music/sky-music.github.io)
