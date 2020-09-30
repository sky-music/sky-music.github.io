---
layout: default
title: "Sky Music Sheets"
permalink: /index.html
---

<p>A collection of fan made visual music sheets/tablature for songs to learn in <a href="https://thatskygame.com/">Sky: Children of the Light!</a></p>
<p>If you would like to <a href="./make-your-own-sheet.html">create your own music sheet</a> please check the links in side bar for a tutorial, amongst other useful links.</p>
<p>Click a section to see a drop down list.</p>
{% assign static_files = site.static_files | where: 'extname', '.html' %}
{% for coll in site.collections %}
{% assign coll_dir = 'songs/' | append: coll.label %}
{% if coll.label != 'posts' %}
<details>
  <summary><font size="5"><img src="{{ site.baseurl | escape }}/assets/images/categories/{{ coll.label }}/{{ coll.label }}.png" width="33" height="33"> {{ coll.label | capitalize | replace: "_", " " }} </font></summary>
  <ul>
  {% for file in static_files %}{% if file.path contains coll_dir %}
    <li><a href="{{ file.path | escape }}">{{ file.basename | replace: "__", " - " | replace: "_", " "}}</a></li>
  {% endif %}{% endfor %}
  </ul>
</details>
{% endif %}
{% endfor %}

<p>&nbsp;</p>
<p>Have you found a song with a single typo mistake? You can ask for correction,
provided that you send us an annotated screenshot to indicate where the typo is, and a reference video or sound file with the time code (hh:mm:ss) at which the note is played.
If the song contains many errors, you are encouraged to <a href="./make-your-own-sheet.html">submit your own version.</a></p>



