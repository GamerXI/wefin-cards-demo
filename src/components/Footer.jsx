import * as React from 'react';
import '../style/style.css';

export default function Footer() {
    return (
        <footer class="footer-main">
            <div class="footer-second">
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginRight: '-25px',
                            marginLeft: '-25px',
                        }}
                    >
                        <div
                            style={{
                                flex: '0 0 100%',
                                maxWidth: '100%'
                            }}
                        >
                            <p>CIN No. U74999DL2021PLC378755 © Copyright owned by Neotec Enterprises Ltd. 2022</p>
                            <ul>
                                <li><a href="https://wefin.in/terms-of-use.html">Terms of Use</a> <span>|</span></li>
                                <li><a href="https://wefin.in/privacy-policy.html">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div><span class="footer-version">Version:0.1.5</span>
            </div>
        </footer>
    );
}