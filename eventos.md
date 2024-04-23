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
    <h2>Próximos Eventos</h2>
    <div class="filtros">
      <h3>Filtros</h3>
      <div class="form-control">
        <label for="tipo-evento">Tipo de Evento:</label>
          <select id="tipo-evento" class="select-style">
            <option value="">Todos</option>
            <option value="conferencia">Conferencia</option>
            <option value="seminario">Seminario</option>
            <option value="taller">Taller</option>
          </select>
      </div>
      <div class="form-control" style="display: none;">
        <label for="fecha-evento">Fecha:</label>
        <input type="date" id="fecha-evento" class="input-style">
      </div>
          <button onclick="filtrarEventos()" class="btn-apply">Mostrar Resultados</button>
    <button onclick="limpiarFiltros()" class="btn-clear">Borrar Filtros</button>
    </div>
  </div>
  <div class="right-column">
    <ul class="eventos-list">
      {% for evento in eventos_ordenados %}
      <li class="evento-item"  data-tipo="{{ evento.tipo }}">
        <div class="evento-texto">
          <div style="display: flex; flex-direction: row;">
            <div class="date-box">
              <span style="font-size: 0.9em !important; margin-bottom: -20px; text-align: left;">{{ evento.date | date: "%b" | upcase }}</span>
              <br>
              <span style="text-align: left;">
              {{ evento.date | date: "%d" }}
              </span>
              {{ evento.date | date: "%Y" }}
            </div>
            <div style="padding-left: 15px; margin-top: -15px">
              <h3>{{ evento.title }}</h3>
              <div style="color: #292F3399; margin-top: -10px">
                {{ evento.subtitle }}
              </div>
            </div>
          </div>
          <br>
          <div class="div-limitada summary">
            {{ evento.summary }}
          </div>
          <br>
          <a href="{{ evento.url | prepend: site.baseurl }}"
            style="display: flex; align-items: center; color: #E00F18; font-size: 18px; font-weight: 700; line-height: 26px;">
            Ver más
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6 12.5L8 7.9L9.4 6.5L15.4 12.5L9.4 18.5L8 17.1L12.6 12.5Z" fill="#E00F18" />
            </svg>
          </a>
        </div>
        {% if evento.image %}
        <div class="evento-imagen">
          <img src="{{ evento.image | prepend: site.baseurl }}" alt="{{ evento.title }}">
        </div>
        {% endif %}
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
