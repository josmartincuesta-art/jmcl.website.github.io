document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openCV");
    const closeBtn = document.getElementById("closeCV");
    const modal = document.getElementById("cvModal");

    // Abrir el modal
    openBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el salto de página del enlace
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
    });

    // Cerrar el modal desde la 'X'
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});
