---
layout: page
title: Eventos
permalink: /eventos/
extra_css: assets/css/eventos.css
breadcrumbs:
  - title: Inicio
    url: '/'
  - title: Eventos
    url: '/eventos/'
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | prepend: site.baseurl }}">
  <link rel="stylesheet" href="{{ '/assets/css/eventos.css' | prepend: site.baseurl }}">
  <link rel="stylesheet" href="{{ '/assets/css/home.css' | prepend: site.baseurl }}">
</head>

{% assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" | split: "," %}
{% assign eventos_ordenados = site.eventos | sort: 'date' | reverse %}

<div class="eventos-container">
  <div class="left-column">
    <p>Aquí va la breve explicación de los eventos.</p>
    <div class="filtros">
      <h3>Filtrar Eventos</h3>
      <label for="tipo-evento">Tipo de Evento:</label>
      <select id="tipo-evento" onchange="filtrarEventos()">
        <option value="">Todos</option>
        <option value="conferencia">Conferencia</option>
        <option value="seminario">Seminario</option>
        <option value="taller">Taller</option>
      </select>
      <label for="fecha-evento">Fecha:</label>
      <input type="date" id="fecha-evento" onchange="filtrarEventos()">
    </div>
  </div>
  <div class="right-column">
    <ul class="eventos-list">
      {% for evento in eventos_ordenados %}
      <li class="evento-item" data-tipo="{{ evento.tipo }}" data-fecha="{{ evento.date | date: "%Y-%m-%d" }}">
        {% if evento.image %}
        <img src="{{ evento.image | prepend: site.baseurl }}" alt="{{ evento.title }}">
        {% endif %}
        <div>
          <h3>{{ evento.title }}</h3>
          <a href="{{ evento.url | prepend: site.baseurl }}">
            {% assign mes = evento.date | date: "%-m" | minus: 1 %}
            {{ evento.date | date: "%-d de" }} {{ meses[mes] }} de {{ evento.date | date: "%Y" }}
          </a>
        </div>
      </li>
      {% endfor %}
    </ul>
    {% if eventos_ordenados.size > 4 %}
    <div class="ver-mas-eventos">
      <span>Ver otros eventos anteriores</span>
    </div>
    {% endif %}
  </div>
</div>

<script src="{{ '/assets/js/eventos.js' | prepend: site.baseurl }}"></script>
