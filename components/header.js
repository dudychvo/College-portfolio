class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header_container">
      <h2 class="logo"><img src="./image/logo.svg" alt="logo" height="50px"/></h2>
      <nav class="wrapper">
        <ul class="nav_link">
          <li class="zoom"><a href="./" class="nav_link_li" id="home">Home</a></li>
          <li class="zoom"><a href="./about.html" class="nav_link_li" id="about">About</a></li>
          <li class="zoom"><a href="./cv.html" class="nav_link_li" id="cv">CV</a></li>
          <li class="zoom"><a href="./skills.html" class="nav_link_li" id="skills">Skills</a></li>
          <li class="zoom"><a href="./units.html" class="nav_link_li" id="units">Units</a></li>
          <li class="zoom"><a href="./contact.html" class="nav_link_li" id="contact">Contact me</a></li>
        </ul>
        <ul class="social_link">
          <li class="zoom">
            <a href="https://github.com/dudychvo"><img src="./image/github.svg" alt="GitHub" width="{30}" height="{30}" /></a>
          </li>
          <li class="zoom">
            <a href="https://github.com/dudychvo"><img src="./image/email.svg" alt="Email" width="{30}" height="{30}" /></a>
          </li>
          <li class="zoom">
            <a href="https://github.com/dudychvo"><img src="./image/linkedin.svg" alt="LinkedIn" width="{30}" height="{30}" /></a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define("header-component", Header);
