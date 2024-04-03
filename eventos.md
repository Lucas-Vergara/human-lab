---
layout: default
title: Eventos
permalink: /eventos/
extra_css: assets/css/eventos.css
---

# Eventos

<div class="eventos-lista">
{% assign eventos_ordenados = site.eventos | sort: 'date' | reverse %}
{% for evento in eventos_ordenados %}
  <div class="evento-resumen">
    <h2><a href="{{ evento.url }}">{{ evento.title }}</a></h2>
    <p>{{ evento.date | date: "%-d de %B de %Y" }}</p>
    <p>{{ evento.excerpt }}</p>
  </div>
{% endfor %}
</div>
