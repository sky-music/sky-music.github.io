---
layout: default
title: "index 2"
permalink: /index2.html
---

<p>A collection of fan made visual music sheets/tablature for songs to learn in <a href="https://thatskygame.com/">Sky: Children of the Light!</a></p>
<p>If you would like to <a href="./make-your-own-sheet.html">create your own music sheet</a> please check the links in side bar for a tutorial, amongst other useful links.</p>
Click a section to see a drop down list.


{% for coll in site.collections %}
{% if coll.label != 'posts' %}
<details>
  <summary><font size="5"><img src="{{ site.baseurl | escape }}/assets/images/categories/{{ coll.label }}/{{ coll.label }}.png"> {{ coll.label }} </font></summary>
  <ul>
  {% for file in coll.files %}
    <li><a href="/songs/{{ file.path | escape }}">{{ file.basename }}</a> </li>
  {% endfor %}
  </ul>
</details>
{% endif %}
{% endfor %}


