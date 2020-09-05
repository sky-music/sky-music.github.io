---
layout: default
---

#Install Python

##Check if Python is already installed

First of all, let's check that Python is not already installed on your computer

Open a Windows console (cmd.exe) or a MacOS Terminal window (Terminal.app), and type:

```
python --version
python3 --version
```


1. If both commands work and return a version number >= 3.6, then Python 3 is correctly installed on your computer and you can start [making your own music sheet !](./make-your-own-sheet.html)
2. If both commands return a version number < 3.6, then you'll need to update your Python distribution
3. If both command work but return different version numbers, then in the following use the command name that returns the highest version number. Particularly if `python`returns `2.x.x`


##Choose your Python distribution

If you don't yet have Python 3 already installed on your computer you can download it by clicking [here](https://www.python.org/downloads/).
Unless you have a good reason for doing otherwise, you should download the "Windows x86-64 executable installer". Don't forget to check the box "Add Python to environment variables".

On Windows, you can also install a more complete version of Python known as [WinPython](https://sourceforge.net/projects/winpython/), and under Windows or MacOS [Anaconda](https://www.anaconda.com/products/individual). This is particularly important if you plan to do more Python stuff in the future.

On Apple's iOS, you can use [Pythonista](http://omz-software.com/pythonista/). On Android, you can try [Pydroid 3](https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=en_US).

##Install additionnal packages for the Music Sheet Maker

Once Python has been installed, you have two options:

1. Install our program once and for all, inside your Python distribution. This is a no-brainer option, if you don’t care about tweaking the code and future updates. To do this, <a href="#pipinstall">jump here.
2. Let our program rest on a separate folder. This is useful to easily update the code by overwriting with the last downloaded version. To do this, read further on. 


If you have installed the basic Python distribution, open a console window (cmd.exe or Terminal.app) and copy-paste these commands into the console (you can skip this step if you have WinPython, Anaconda, Pythonista, or Pydroid):

```
python -m pip install --upgrade pip
python -m pip install --upgrade pillow
pip install pyyaml
```

If you want to export your song in MIDI format, you have to install an additional package:

```
pip install mido==1.2.9
```

Finally, check your Python version by typing the following:

```
python --version
```

If the displayed Python version is < 3.8, please install this additional package:

```
pip install importlib_resources
``` 
  
*Using pip on Pythonista for iOS is a bit tricky, as it requires installing stash beforehand, so please contact us for assistance.*

##Install the Music Sheet Maker in your Python distribution (optional)

This installation method is the simplest, but  editing or updating the code will be a bit longer. In a console, navigate to the folder where you unzipped the Music Sheet Maker code, for instance:

```
cd ~/Desktop/sky-python-music-sheet-maker/src/skymusic
```

On Windows, paths are a bit different:
  
```
cd /d %homedrive%%homepath%\Desktop\sky-python-music-sheet-maker\src\skymusic
```
  
(If you wish to store the folder elsewhere or change it's name, please change this command accordingly afterwards).

Install our program and all required Python packages in one step by doing:

```
pip install .
```

The program can be now launched from any location simply by typing `skymusic` !

If you got an error with the last command, retry after doing first:

```
pip install setuptools
```
