import * as React from 'react';

// ----------------------

function Header() {
    return (
        <header class="bsHeader">
            <nav class="navbar navbar-expand-lg navbar-light fixed-top">
                <div class="container"><a href="/products"><span class="navbar-brand"> <img src="https://app.wefin.in/wefin-logo.svg" alt="logo"
                    class="topbarLogo"/></span></a>
                    <div class="ccLogin dropdown"><button> <button aria-haspopup="true" aria-expanded="false"
                        id="dropdown-button-dark-example1" type="button" class="dropdown-toggle btn btn-secondary"><img
                            src="https://app.wefin.in/static/media/user.cc662d7c.svg" alt="" width="20px"
                            height="20px"/>Login</button></button></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;