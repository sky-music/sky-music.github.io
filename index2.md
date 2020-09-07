---
layout: default
title: "index 2"
permalink: /index2.html
---

<p>A collection of fan made visual music sheets/tablature for songs to learn in <a href="https://thatskygame.com/">Sky: Children of the Light!</a></p>
<p>If you would like to <a href="./make-your-own-sheet.html">create your own music sheet</a> please check the links in side bar for a tutorial, amongst other useful links.</p>
Click a section to see a drop down list.

{% assign static_files = site.static_files | where: 'extname', '.html' %}
{% for coll in site.collections %}
{% assign coll_dir = 'songs/' | append: coll.label %}
{% if coll.label != 'posts' %}
<details>
  <summary><font size="5"><img src="{{ site.baseurl | escape }}/assets/images/categories/{{ coll.label }}/{{ coll.label }}.png"> {{ coll.label | capitalize }} </font></summary>
  <ul>
  {% for file in static_files %}
     {% if file.path contains coll_dir %}
    <li><a href="/songs/{{ file.path | escape }}">{{ file.basename | replace: "_", " " | replace: "-", " "}}</a> </li>
  {% endif %}
{% endfor %}
  </ul>
</details>
{% endif %}
{% endfor %}


