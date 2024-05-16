---
layout: page
title: Contacto
permalink: /contacto/
breadcrumbs:
  - title: Inicio
    url: '/'
  - title: Contacto
    url: '/contacto/'
---

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ site.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/contacto.css' | prepend: site.baseurl }}">
</head>

<div class="contacto-container">
  <div class="left-column">
    <div>
    Para ponerte en contacto con nosotros, completa el formulario.
    </div>
    <br>
    <div style="color: #e00f18">
    </div>
  </div>
  <div class="right-column">
    <section class="formcarry-container">
      <h2>
        Completa este formulario y te responderemos a la brevedad
      </h2>
      <form action="https://formspree.io/f/mdoqybnk" method="POST" enctype="multipart/form-data">
        <div class="formcarry-block">
          <label for="fc-generated-1-name">Nombre</label>
          <input type="text" name="name" id="fc-generated-1-name" placeholder="Nombre y Apellido" required />
        </div>
        <div class="formcarry-block">
          <label for="fc-generated-1-email">Email</label>
          <input type="email" name="email" id="fc-generated-1-email" placeholder="john@doe.com" required />
        </div>
        <div class="formcarry-block">
          <label for="fc-generated-1-message">Mensaje</label>
          <textarea name="message" id="fc-generated-1-message" placeholder="Ingrese su mensaje..." required></textarea>
        </div>
        <div class="formcarry-block">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  </div>
</div>
