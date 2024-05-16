---
layout: page
title: Artículos
permalink: /articulos/
breadcrumbs:
  - title: Inicio
    url: '/'
  - title: Artículos
    url: '/articulos/'
---

<div class="repositorio-list">
  {% for item in site.data.articulos %}
    <div class="repositorio-item">
      <div class="repositorio-item-contenedor-foto">
        <img src="{{ '/assets/images/' | append: item.imagen | prepend: site.baseurl }}" alt="imagen representativa" class="img-responsive">
      </div>
      <div class="contenedor-texto">
        <div style="color: red; font-weight: bold">
          {{ item.tipo }}
        </div>
        <h3>
          {{ item.titulo }}
        </h3>
        <div>
          {{ item.resumen }}
        </div>
        <br>
        {% if item.es_externo %}
          <a href="{{ item.archivo }}" target="_blank" style="color: red">
            Descargar
          </a>
        {% else %}
          <a href="{{ '/articulos/' | append: item.archivo | prepend: site.baseurl }}" download style="color: red">
            Descargar
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
