---
layout: default
title: Noticias
permalink: /noticias/
extra_css: assets/css/noticias.css
---

# Noticias

<div class="noticias-lista">
{% assign noticias_ordenadas = site.noticias | sort: 'date' | reverse %}
{% for noticia in noticias_ordenadas %}
  <div class="noticia-resumen">
    <h2><a href="{{ noticia.url }}">{{ noticia.title }}</a></h2>
    <p>{{ noticia.date | date: "%-d de %B de %Y" }}</p>
    <p>{{ noticia.excerpt }}</p>
  </div>
{% endfor %}
</div>
