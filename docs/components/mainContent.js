export function loadmainContent() {
    return `
        <mainContent class="site-mainContent">
           <nav class="menu-scroll">
    <a href="index.html">Inicio</a>  <!--ocultando enlaces obsoletos barra navegación
    <a href="sobre_mi.html">Sobre mí</a>
    <a href="proyectos.html">Proyectos</a>
    <a href="galeria.html">Galería</a>
    <a href="contacto.html">Contacto</a>
    -->
    </nav>

  <section class="tabla-simple" align="center">
    <table align="center">
		<thead>
      <tr>
        <td width="50%"><img src="assets/imgs/miperfil_portada.jpeg" alt="mi selfie" width="100%" style="border-radius:12px" class="bloquear-imagen" oncontextmenu="return false;"/></td>
        <td align="left"> Bienvenid@<br>Yo soy el de la foto de la izquierda.<br><br>Yo he creado este sitio web.<br><br>
        <a href="#" id="openCV" class="btn_cv">Ver mi CV</a>
        <div id="cvModal" class="modal-overlay">
        <div class="modal-content">
        <span id="closeCV" class="modal-close">&times;</span>
        
        <iframe src="https://jmcl.website/docs/html/cv.html" width="100%" height="100%" style="border: none;"></iframe>
    </div>
</div>
</td>
      </tr>
	</thead>
    </table>
  </section>
<!--aquí había un carrusel para mostrar imágenes del SEO GESTIONANDO CONTENIDOS DIGITALES-->
  <section class="lista-simple">
    <ul>
    <li>
    </li>
 <li align="center"><font size="4px"> 
<b> Amantes de la música Spotify</b></font><br>
Sorpresa Mayúscula<br>
<font size="2px">una pequeña reliquia de Spotify</font>
</li>   
    
      <li align="center">

<iframe style="border-radius:12px" 
       src="https://open.spotify.com/embed/playlist/02pYoKCwLk6TOvfRxSe9vF?utm_source=generator&theme=0">
</iframe>
</li>

<li align="center"><font size="4px"> 
<b> Spotify:</b></font><br>
<font size="2px">en la actualidad</font>
</li>

      <li>
<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        align="center">
</iframe>


</li>

<li align="center">
<div id="ytplayer">

<iframe id="ytplayer" type="text/html" width="90%" height="150px"  style="border-radius:12px"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0">
</iframe>

</div>

      <li>
<!---articulo 3--->
</li>
    </ul>
  </section>
<!--tabla pre footer-->
  <section class="tabla-doble">
    <table>
		<thead>
      <tr>
        <td><img src="assets/imgs/enlace_instagram.png" alt="jmcl_eDigital Instagram" width="100%" style="border-radius:12px" class="bloquear-imagen" oncontextmenu="return false;"/></td>
        <td align="left">Puedes encontrarme en Instagram escaneando el QR o haciendo clic <a href="https://www.instagram.com/jmcl_edigital?igsh=bGpxbDdub2locDdo">
 aquí 
</a></td>
      </tr>
  <!--Tabla en proyecto formateando lo oculto al usuario
    <tr>
        <td><img src="img8.jpg" alt="Item 2" /></td>
        <td><a href="#">Texto 2</a></td>
      </tr>
      <tr>
        <td><img src="img9.jpg" alt="Item 3" /></td>
        <td><a href="#">Texto 3</a></td>
      </tr>
      <tr>
        <td><img src="img10.jpg" alt="Item 4" /></td>
        <td><a href="#">Texto 4</a></td>
      </tr>
      <tr>
        <td><img src="img11.jpg" alt="Item 5" /></td>
        <td><a href="#">Texto 5</a></td>
      </tr> -->
	</thead>
    </table>
  </section>
  
 <!--Estrategias de Identidad del SEO Controlar la imagen a través de su contenedor
  <div class="contenedor-tarjeta">
    <img src="tu-foto.jpg" alt="Mi foto de perfil">
</div>-->

  
 <!-- <h2>Ejemplo de imagen protegida</h2>

    <img src="tu-imagen.jpg" alt="Mi Foto" class="bloquear-imagen" oncontextmenu="return false;">

    <br><br>

    <div class="contenedor-foto">
        <img src="tu-imagen2.jpg" alt="Mi Foto Pro" class="bloquear-imagen" oncontextmenu="return false;">
    </div>
-->

        </mainContent>
    `;
}
