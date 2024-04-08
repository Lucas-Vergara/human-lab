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
  <ul class="noticia-list">
    {% assign meses = "enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre" |
    split: "," %}
    {% assign noticias_ordenadas = site.noticias | sort: 'date' | reverse %}
    {% for noticia in noticias_ordenadas limit:5 %}
    <li class="noticia-card">
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
