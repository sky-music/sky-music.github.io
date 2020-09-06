---
layout: default
title: "index 2"
permalink: /index2.html
---

<p>A collection of fan made visual music sheets/tablature for songs to learn in <a href="https://thatskygame.com/">Sky: Children of the Light!</a></p>
<p>If you would like to <a href="./make-your-own-sheet.html">create your own music sheet</a> please check the links in side bar for a tutorial, amongst other useful links.</p>
Click a section to see a drop down list.


{% for coll in site.collections %}
<details>
  <summary><font size="5"><img src="{{ coll.directory | escape }}/logo.png"> {{ coll.name }} </font></summary>
  <ul>
  {% for file in coll.files %}
    <li><a href="{{ coll.directory | escape }}{{ file.path | escape }}">{{ file.basename }}</a> </li>
  {% endfor %}
  </ul>
{% endfor %}


<h1>Index of all HTML files in /</h1>
  <ul>
    {% for url in site.html_pages %}
    <li><a href="{{ site.baseurl | escape }}{{ url.path | escape }}">{{ url.path | escape }}</a> </li>
    {% endfor %}
  </ul>
