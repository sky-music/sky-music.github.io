---
layout: default
---

<h1>Install Python</h1>

<p>First of all, let's check that Python is not already installed on your computer</p>

<p>Open a Windows console (cmd.exe) or a MacOS Terminal, and type:</p>

<pre>
  <code>
python --version
python3 --version
  </code>
</pre>

<ol>
<li>If both commands work and return a version number > 3.7, then Python 3 is already installed on your computer and you can close this page</li>
<li>If both commands return a version number < 3.7, then you'll need to update your Python distribution/li>
<li>If both command work but return different version numbers, then in the following use the command name that returns the highest number. Particularly if `python`returns `2.x.x`<li>
</ol>

<p>If you don't yet have Python 3 already installed on your computer you can download it by clicking <a href="https://www.python.org/downloads/" target="_blank">here</a>.
Unless you have a good reason for doing otherwise, you should download the "Windows x86-64 executable installer". Don't forget to check the box "Add Python to environment variables".</p>

<p>Once installed, open cmd (Command Prompt) on Windows, or Terminal on Mac. Then copy and paste these commands into the console:</p>
<pre>
  <code>
python3 -m pip install --upgrade pip
python3 -m pip install --upgrade pillow
pip install mido==1.2.9
pip install pyyaml
  </code>
</pre>

<p>Then, type the following command:</p>
<pre>
  <code>
python3 --version
  </code>
</pre>

<p>If the displayed Python version is < 3.8, please type this additional command:</p>
<pre>
  <code>
pip install importlib_resources
  </code>
</pre>

<p>On Windows, you can also install a more complete version of Python known as <a href="https://sourceforge.net/projects/winpython/">WinPython</a>, and under Windows or MacOS <a href="https://www.anaconda.com/products/individual">Anaconda</a>. In this case the <i>pip</i> commands must be typed in the console of the Spyder code editor. Only <i>mido</i> has to be installed (for generating Midi files), and <i>importlib_resources</i> only if the Python version is < 3.8.</p>

<p>On Apple's iOS, you can use <a href="http://omz-software.com/pythonista/">Pythonista</a>. On Android, you can try <a href="https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=en_US">Pydroid 3</a>.
