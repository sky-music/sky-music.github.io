---
layout: default
---

<h1>Install Python</h1>

<h2>Check if Python is already installed</h2>

<p>First of all, let's check that Python is not already installed on your computer</p>

<p>Open a Windows console (cmd.exe) or a MacOS Terminal window (Terminal.app), and type:</p>

<pre>
  <code>
python --version
python3 --version
  </code>
</pre>

<ol>
<li>If both commands work and return a version number >= 3.6, then Python 3 is correctly installed on your computer and you can start <a href="./make-your-own-sheet.html">making your own music sheet !</a></li>
<li>If both commands return a version number < 3.6, then you'll need to update your Python distribution</li>
<li>If both command work but return different version numbers, then in the following use the command name that returns the highest version number. Particularly if `python`returns `2.x.x`</li>
</ol>

<h2>Choose your Python distribution</h2>

<p>If you don't yet have Python 3 already installed on your computer you can download it by clicking <a href="https://www.python.org/downloads/" target="_blank">here</a>.
Unless you have a good reason for doing otherwise, you should download the "Windows x86-64 executable installer". Don't forget to check the box "Add Python to environment variables".</p>

<p>On Windows, you can also install a more complete version of Python known as <a href="https://sourceforge.net/projects/winpython/">WinPython</a>, and under Windows or MacOS <a href="https://www.anaconda.com/products/individual">Anaconda</a>. This is particularly important if you plan to do more Python stuff in the future.</p>

<p>On Apple's iOS, you can use <a href="http://omz-software.com/pythonista/">Pythonista</a>. On Android, you can try <a href="https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=en_US">Pydroid 3</a>.</p>

<h2>Install additionnal packages for the Music Sheet Maker</h2>

<p>Once Python has been installed, you have two options:
<ol>
<li>Install our program once and for all, inside your Python distribution. This is a no-brainer option, if you don’t care about tweaking the code and future updates. To do this, <a href="#pipinstall">jump here.</a></il>
<li>Let our program rest on a separate folder. This is useful to easily update the code by overwriting with the last downloaded version. To do this, read further on. </li>
</ol>

 <p> if you have installed the basic Python distribution, open a console window (cmd.exe or Terminal.app) and copy-paste these commands into the console (you can skip this step if you have WinPython, Anaconda, Pythonista, or Pydroid):</p>
<pre>
  <code>
python -m pip install --upgrade pip
python -m pip install --upgrade pillow
pip install pyyaml
  </code>
</pre>

<p>If you want to export your song in MIDI format, you have to install an additional package:</p>
<pre>
  <code>
pip install mido==1.2.9
  </code>
</pre>

<p>Finally, check your Python version by typing the following:</p>
<pre>
  <code>
python --version
  </code>
</pre>

<p>If the displayed Python version is < 3.8, please install this additional package:</p>
<pre>
  <code>
pip install importlib_resources
  </code>
</pre>

<p><i>Using pip on Pythonista for iOS is a bit tricky, as it requires installing stash beforehand, so please contact us for assistance.</i></p>

<h2>Install the Music Sheet Maker in your Python distribution (optional)</h2>

<p>This installation method is the simplest, but  editing or updating the code will be a bit longer. In a console, navigate to the folder where you unzipped the Music Sheet Maker code, for instance:</p>

<pre>
  <code>
cd ~/Desktop/sky-python-music-sheet-maker/src/skymusic
  </code>
</pre>

<p>On Windows, paths are a bit different:</p>
  
<pre>
  <code>
cd /d %homedrive%%homepath%\Desktop\sky-python-music-sheet-maker\src\skymusic
  </code>
</pre>
  
(If you wish to store the folder elsewhere or change it's name, please change this command accordingly afterwards).

<p>Install our program and all required Python packages in one step by doing:</p>
 <pre>
  <code>
pip install .
  </code>
</pre>

<p>The program can be now launched from any location simply by typing `skymusic` !</p>

<p>If you got an error with the last command, retry after doing first:</p>
<pre>
  <code>
pip install setuptools
  </code>
</pre>
