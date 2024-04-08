---
layout: default
title: Noticias
permalink: /noticias/
extra_css: assets/css/noticias.css
---

{% assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" | split: "," %}

# Noticias

<div class="noticias-lista">
{% assign noticias_ordenadas = site.noticias | sort: 'date' | reverse %}
{% for noticia in noticias_ordenadas %}
  <div class="noticia-resumen">
    <h2><a href="{{ noticia.url }}">{{ noticia.title }}</a></h2>
    <p>
      {% assign mes = noticia.date | date: "%-m" | minus: 1 %}
      {{ noticia.date | date: "%-d de" }} {{ meses[mes] }} de {{ noticia.date | date: "%Y" }}
    </p>
    <p>{{ noticia.excerpt }}</p>
  </div>
{% endfor %}
</div>
