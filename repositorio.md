---
layout: page
title: Repositorio
permalink: /repositorio/
breadcrumbs:
  - title: Inicio
    url: '/'
  - title: Repositorio
    url: '/repositorio/'
---

<div class="repositorio-list">
  {% for item in site.data.repositorio %}
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
          <a href="{{ '/repositorio/' | append: item.archivo | prepend: site.baseurl }}" download style="color: red">
            Descargar
          </a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>
