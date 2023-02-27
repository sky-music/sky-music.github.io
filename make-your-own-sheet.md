---
layout: default
---

# Make your own visual music sheet!

Here's a step by step guide how to create your own visual music sheet.

## Getting started (without Python)

**If you do not want to customize the program, and are not interested in getting the latest version, you have several options:**

1. Use the [website version](https://jmmelko.eu.pythonanywhere.com/)
2. Use the Discord Bot version by typing `!song` in the [official tgc forum](https://discord.gg/thatskygame)
3. Download a binary executable:

	- [For MacOS](/binaries/SkyMusicSheetMaker_MacOS.zip)
	- [For Windows](/binaries/SkyMusicSheetMaker_x64.zip)

*Please note that support is not provided for executables, so if the program crashes on your machine you are encouraged to try another option.*

Then you can skip [here](#write-your-music) to learn how to type notes and to read music sheets.

## Getting started with Python

You will need Python >= 3.6 and a few addition packages. We have a [dedicated page](/install-python.html) to explain how to install Python.

Download the Sky Music Sheet Maker by clicking [Here](https://github.com/sky-music/sky-python-music-sheet-maker). Click on the green "Code" button, then choose "Download ZIP".

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

**Where files are stored**

Input song files must be put in ‘test_songs’. This directory is placed 2 levels above the command_line_player.py script if you made a manual installation, or inside your home user directory, in a folder named 'skymusic/'.
Music sheets will be written in ’songs_out’.
If you want to use different folders, launch the program this way:

    python command_line_player.py --in_dir <path/to/input/dir/> --out_dir <path/to/output/dir>

A preferences file can be put at the same level than the songs directory, using YAML format (see the example furnished with the code to understand its syntax).

## Write your music
<a name="write-your-music"></a>
*We recommend typing out your notation in Notepad or similar before inputting into cmd/Terminal, as it's easier for you to fix any mistakes this way.*

For the benefit of this tutorial we'll use the most recognised ABC1-5 method, however the program supports several notations:

![notations](/assets/images/notations.png)

Note that for musical notations supporting octaves (such as English, Jianpu, and doremi), the starting octave is 1, by convention.
Typing a note name without octave (e.g. F) implicitely assumes that it belongs to the starting octave (e.g. F1).
So, to indicate that a note belongs to the next octave you will have to write it explicitly (e.g. F2).
With our convention, the full range of the instrument is C1-C3.
This convention is different from SkyStudio's which assumes that the instrument range is C4-C6.
However, the absolute range actually depends on the instrument type (piano, harp, flute, bass, etc), so nobody's right or wrong.
If you'd like to input notes using Sky Studio's convention, starting at octave 4, then at the question "Do you want to shift the pitch of your notes?" asked by the program, answer: "-3".

![chart](/assets/images/Chart.jpg)

If you're unfamilliar with this chart or how it it reads please check out the [How to Read](./how-to-read.html) page.

_____________

Separate boxes by using a blank space, for example typing "B3 B4 B5" will produce:

![notespaces](/assets/images/notespaces.png)

_____________

Type letters with no space for a chord, for example typing "A1A3A5 B1B3B5" will produce:

![chords](/assets/images/chords.png)

_____________

Use . for blank notes, used to signify a pause in the song, for example typing "B4 . B5" will produce:

![space](/assets/images/space.png)

*If using Jianpu notation please use 0 instead*

_____________

Use - for coloured notes, used to signify pressing buttons in a fast pace one after the other from light to dark colour, for example "A3-B1-B3-B5-C3" will produce:

![colourednotes](/assets/images/colourednotes.JPG)

*If using Jianpu notation please use ^ instead*

_____________

To indicate a repeat section, use * directly followed by a number, for example "C1C3 *2" will produce:

![repeat](/assets/images/Repeat.JPG)

_____________

Separate layers with `==`, immediatly followed by the layer name. A layer is a sheet section for a single instrument. Layers will be automatically created when importing JSON sheets from used by SkyMusic.

Add a line break (press enter in Python or in your text editor) to separate song lines with an thin grey horizontal divider.
If you need a darker break line, add a line using the Markdown codes: `--`, `__`

_____________

Use '#' to start a lyrics line. Type '#' again to split the lyrics and align words with the chords grid: 

    # #Last #Christ - #mas # #I #gave #you    #my #heart
    A1A3A5 B4 B4 B3 . C5 B4 B4 B5 B3

![comments](/assets/images/Comments.PNG)

You can also use '#' to add a section title, and format it using HTML tags. For instance:

     <h1 style="color:red;>Section 1</h1>
 
will produce a section title in big, bold, red letters. This will work with HTML output files but be ignored in other formats.
Use this with great caution as any error in these tags can break the whole HTML file. 

If you're not familiar with HTML, you can use basic Markdown formatting:

    # **Bold text**
    # *Slanted text*
    # #H1 header
    # ##H2 header

Finally, in the file header you can enter song metadata using '#$'. A standard header looks like this:

    #$Title: ~ We Wish You A Merry Christmas ~
    #$Author: popular
    #$Arranger, Transcriber: Arken#8524
    #$Musical key: C

Tip 1: We usually find 8 boxes a row works best for a 16:9 aspect ratio (widescreen). Use line breaks to divide your song in rows.
Tip 2: In the Python command-line program do not press enter after a blank line as this will end the song. If you need a full blank line in the song use '.' for blank notes or enter a lyrics line with no text.

## Start from an existing sheet to improve it

If you want to improve a published sheet, you can retrieve the notes two ways:

* by opening the HTML file in a text editor and look for the tag called `<div id='ascii'>`. It should contain the notes in ABC1-5 format (except for old sheets published before July 2021).

* by feeding an HTML sheet to the Visual Sheet Maker. It should read the notes of the 'ascii' tag and export them as TXT, in ABC1-5 and English CDEFGAB formats.

## Finish your sheet!

With your music notes typed out, now simply copy and paste all of your notes into cmd/terminal after you've followed Step 2.
To end the song, press 'Enter' twice.

You'll now be asked to input a recommended key (leave blank if unsure), the octave shift (leave blank if unsure), the song title, original artist and who it was transcribed by (your name). For midi output you will be asked the song tempo in beats per minutes (leave blank if you don't need it).

Your song will be saved in several formats including HTML, the format that is used on this website.

## Finished Example

Let's look at the intro to [Can't help falling in love with you](/songs/Cant-Help-Falling-in-Love-Intro.html) by Elvis Presley.
Following the guide above, in CMD or Terminal we input:

    A1A3B3 . A3B2C2 . A3B1B3 . B4 B5
    A2B1C1 . A3A5B5 . A2A5B4 . A5 A4B1B3
    . A5B2B4 . B1B3B5 . B4 B5 C1
    A3A5B5 . A2A5B4 . A1A3B3 . . .

And out comes:

![finished example](/assets/images/finishedexample.JPG)

server.

## How to print or save as PDF

If you use your web browser to print the sheet (or convert it to PDF using a a virtual printer), make sure to select the "background graphics" options in the "more settings" panel of the print window.
This options is called "Backround images" in Firefox.

[<img src="./assets/images/print_options.jpg" height="200" />](./assets/images/print_options.jpg)

You could also consider changing the sheet layout when generating it (default is 16/9), especially if you intend to print in portrait mode.

## We would love to have your song on this website!
Join our [Discord](/discord.html) and send us the file so we can upload it here! We can also embed an accompanying video if you have one hosted somewhere.
All we ask is that you quality check your sheet before submitting, as others will be learning from it too.

## Going further: file formats and Sky Studio compatibility

For input, the Visual Sheet Maker accepts the following formats:

- text files (with individual note names as explained above)
- JSON files (ending with .json, .json.txt or sometimes just .txt), as generated by the [Sky Music website](https://specy.github.io/skyMusic/) (Manage Recordings->Song->Export song) and the Sky Studio iOS/Android mobile app.
- MIDI files
- HTML Visual Sheets (only for sheets generated after July, 2020 1st). This way, you can generate a new version of a visual sheet if you found mistakes in it.

As output, PNG is recommended for quick sharing of songs with friends over forums, but cannot be edited or stretched out.

## Going even further: customizing the Python program

The command-line program can be called with arguments to customize the names of the songs directory, as well as reading from a preference file with default answers to questions asked by the program,
as well as the possibility to generate a temporary song link at our [partner website](https://specy.github.io/skyMusic/).
To activate these options, please refer to the README on the [code repository](https://github.com/sky-music/sky-music.github.io).


If you need any support or would like to ask questions you can join our [Discord](/discord.html) server.
