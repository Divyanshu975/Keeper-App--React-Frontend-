import React from "react";

let year=new Date().getFullYear();
function Footer(){
    return <div className="footer-div">
        <footer className="footer-content">
            <p>Divyanshu Kumar <span>&copy;</span> {year}</p>
        </footer>
    </div>
    
}

export default Footer;