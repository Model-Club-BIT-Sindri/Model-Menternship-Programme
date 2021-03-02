function Navbar() {
    if (window.innerWidth <= 1100) {
        $(".main-nav").css({"background": "#051037", "position": "relative"});
        $("#nav__nav").html(`
        <button
        class="navbar-toggler toggler-example"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="hamburger-icon" style=""><i class="fa fa-bars" aria-hidden="true"></i></span>
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <!-- Links -->
            <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="./index.html#about">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./index.html#apply">Apply</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
            </li>
            </ul>
            <!-- Links -->
        </div>
        `);
    }
    else {
        $(".main-nav").css({"background": "unset", "position": "fixed"});
        $("#nav__nav").html(`
        <div id="addNavLogo"></div>
        <div class="nav-comps">
            <ul>
            <li><a href="./index.html#about">About Us</a></li>
            <li><a href="./index.html#apply">Apply</a></li>
            <!--<li><a href="./index.html#sponsors">Sponsors</a></li>--!>
            <!--<li><a href="./team.html">Our Team</a></li>--!>
            <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>`);
    }
}
Navbar();
window.onresize = Navbar;

$(".main-nav").addClass("nav-scrolled");
$(".nav-comps").addClass("comp-scrolled");
$("#addNavLogo").html(
    `<div class="nav-logo">
            <a href="./index.html" class="scrollto"><img src="./img/bitlogo.png" style="height:50px;width:50px;""></a>
            <a href="./index.html" class="scrollto"><img src="./img/clogo.png" style="height:50px;width:50px;"></a>
    </div>`
);
