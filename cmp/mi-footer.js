class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Tapia Ramirez Daniel Alejandro IC-51M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);