const whatsappNumber = "50683824713";
const form = document.querySelector("#quoteForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const nombre = data.get("nombre")?.trim() || "Cliente";
  const propiedad = data.get("propiedad") || "No indicado";
  const ubicacion = data.get("ubicacion")?.trim() || "No indicada";
  const mensaje = data.get("mensaje")?.trim() || "Quiero informacion sobre control de plagas.";

  const text = [
    "Hola Fumigadora Quepos, quiero cotizar un servicio.",
    "",
    `Nombre: ${nombre}`,
    `Tipo de propiedad: ${propiedad}`,
    `Ubicacion: ${ubicacion}`,
    `Detalle: ${mensaje}`
  ].join("\n");

  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});

const animatedElements = document.querySelectorAll(".reveal, .reveal-item");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animatedElements.forEach((element) => revealObserver.observe(element));
