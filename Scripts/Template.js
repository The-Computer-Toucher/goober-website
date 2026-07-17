class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top"> <!--! NAVBAR -->
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Goober-site</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sateillite info</a> <!--? satellite things like the db and recived data, and specific pages for certin satellites like NOAA-15/18/19 etc -->
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="Satdb.html">Satellite database</a></li>
                        <li><a class="dropdown-item" href="#">HF database </a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Research and investigation</a> <!--? this is where all the things like research for satellites and papers written about them -->
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">OSCAR-2 | Transit 5B-5 | Transit 5E-5 The identity of oldest functional satellite, 1964</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Software</a> <!--? this is for the software used and made for satellite tracking -->
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">3rd party software</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="About.html">About</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        `
    }
}

customElements.define("nav-bar", NavBar);

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
            <footer class="py-3 my-4 mt-auto"> <!--! FOOTER -->
            <ul class="nav justify-content-center border-bottom pb-3 mb-3"> 
                <li class="nav-item"><a href="Index.html" class="nav-link px-2 text-body-secondary">Home</a></li> 
                <li class="nav-item"><a href="https://github.com/Goober-site/goober-website" class="nav-link px-2 text-body-secondary">Report issues</a></li> 
                <li class="nav-item"><a href="https://pages.github.com/" class="nav-link px-2 text-body-secondary">GitHub Pages</a></li> 
                <li class="nav-item"><a href="https://github.com/logos" class="nav-link px-2 text-body-secondary">GitHub icons</a></li> 
                <li class="nav-item"><a href="https://getbootstrap.com/" class="nav-link px-2 text-body-secondary">Bootstrap</a></li> 
                <li class="nav-item"><a href="About.html" class="nav-link px-2 text-body-secondary">About</a></li> 
            </ul> 
            <p class="text-center text-body-secondary">&copy; 2025-2026 Goober-site, MIT License</p> 
            </footer>
        `
    }
}

customElements.define("site-footer", SiteFooter);
