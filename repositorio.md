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
        <div class="contenedor-texto-titulo">
          {{ item.titulo }}
        </div>
        <div>
          {{ item.resumen }}
        </div>
        <br>
        <a href="{{'/repositorio/' | append: item.archivo | prepend: site.baseurl }}" download style="color: red">
          Descargar
        </a>
      </div>
    </div>
  {% endfor %}
</div>
