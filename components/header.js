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
            <li class="zoom"><a href="/" class="nav_link_li">Home</a></li>
            <li class="zoom"><a href="/about.html" class="nav_link_li">About</a></li>
            <li class="zoom"><a href="/tech.html" class="nav_link_li">Tech Stack</a></li>
            <li class="zoom"><a href="/projects.html" class="nav_link_li">Projects</a></li>
            <li class="zoom"><a href="/contact.html" class="nav_link_li">Contact</a></li>
          </ul>
          <ul class="social_link">
            <li class="zoom">
              <img src="./image/github.svg" alt="GitHub" width="{30}" height="{30}" />
            </li>
            <li class="zoom">
              <img src="./image/email.svg" alt="Email" width="{30}" height="{30}" />
            </li>
            <li class="zoom">
              <img src="./image/linkedin.svg" alt="LinkedIn" width="{30}" height="{30}" />
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
