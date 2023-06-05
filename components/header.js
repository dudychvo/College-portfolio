class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header_container">
        <h2 class="logo"><a href="/">Dudych</a></h2>
        <nav class="wrapper">
          <ul class="nav_link">
            <li><a href="/">Home</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/tech.html">Tech Stack</a></li>
            <li><a href="/projects.html">Projects</a></li>
            <li><a href="/contact.html">Contact</a></li>
          </ul>
          <ul class="social_link">
            <li>
              <img src="./image/github.svg" alt="GitHub" width="{30}" height="{30}" />
            </li>
            <li>
              <img src="./image/email.svg" alt="Email" width="{30}" height="{30}" />
            </li>
            <li>
              <img src="./image/linkedin.svg" alt="LinkedIn" width="{30}" height="{30}" />
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
