import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          view_in_ar
        </span>
        Inicio
      </a>
      <a href="IOT.html">
        <span
          class="material-icons">
          stars
        </span>
        Prueba IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);