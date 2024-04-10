---
layout: page
title: Noticias
permalink: /noticias/
breadcrumbs:
  - title: Inicio
    url: '/'
  - title: Noticias
    url: '/noticias/'
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | prepend: site.baseurl }}">
  <link rel="stylesheet" href="{{ '/assets/css/noticias.css' | prepend: site.baseurl }}">
  <link rel="stylesheet" href="{{ '/assets/css/home.css' | prepend: site.baseurl }}">
</head>
{% assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" | split: "," %}

# Noticias más recientes

  <div style="display: flex; justify-content: space-between;">
  </div>
    {% assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" |
    split: "," %}
    {% assign noticias_ordenadas = site.noticias | sort: 'date' | reverse %}
  <ul class="noticia-list">
    {% for noticia in noticias_ordenadas %}
    <li class="noticia-card{% if forloop.index > 4 %} hidden{% endif %}">
      {% if noticia.image %}
      <img src="{{ noticia.image | prepend: site.baseurl }}" alt="{{ noticia.title }}"
        class="noticia-img">
      {% endif %}
      <div style="padding: 20px; display: flex; flex-direction: column; justify-content: space-between; flex: 1;">
        <div style="font-size: 18px; font-weight: 700; line-height: 26px;">
          {{ noticia.title }}
        </div>
        <a href="{{ noticia.url | prepend: site.baseurl }}" style="color: #E00F18; align-self: flex-end;">
          {% assign mes = noticia.date | date: "%-m" | minus: 1 %}
          {{ noticia.date | date: "%-d de" }} {{ meses[mes] }} de {{ noticia.date | date: "%Y" }}
        </a>
      </div>
    </li>
    {% endfor %}
  </ul>
  {% if noticias_ordenadas.size > 4 %}
  <div class="center-title" style="font-size: 18px;">
    <span style="color: #E00F18; border-bottom: 2px solid #E00F18; cursor: pointer">
    Cargar más noticias
    </span>
    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: -7px; margin-right: -8px; margin-left: -5px">
      <path d="M12.6 12.5L8 7.9L9.4 6.5L15.4 12.5L9.4 18.5L8 17.1L12.6 12.5Z" fill="#E00F18" />
    </svg>
  </div>
  {% endif %}

  <script src="{{'/assets/js/noticias.js' | prepend: site.baseurl }}"></script>
