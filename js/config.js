import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          perm_identity
        </span>
        Inicio
      </a>
      <a href="IOT.html">
        <span
          class="material-icons">
          verified
        </span>
        Prueba IoT
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);