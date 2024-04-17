function filtrarEventos() {
  const tipo = document.getElementById('tipo-evento').value;
  const fecha = document.getElementById('fecha-evento').value;
  const eventos = document.querySelectorAll('.evento-item');

  eventos.forEach(evento => {
    const tipoEvento = evento.getAttribute('data-tipo'); // Asegúrate de que tus elementos li tengan este atributo
    const fechaEvento = new Date(evento.getAttribute('data-fecha')).toDateString(); // Asume formato de fecha en el atributo
    console.log(fechaEvento);
    console.log(new Date(fecha).toDateString());

    if ((tipo === "" || tipoEvento === tipo) && (fecha === "" || new Date(fecha).toDateString() === fechaEvento)) {
      evento.style.display = '';
    } else {
      evento.style.display = 'none';
    }
  });
}
