class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="mainHeader" id="mainHeader">
        <div class="logo">
            <img src="logo ac stopzjarrit no background.png" alt="">
        </div>
        <div class="nav" >
            <a href="/Mirseardhje.html" >Mirëseardhje</a>
            <a href="/rrethNesh.html" class="headerSelectedRrethNesh">Rreth Nesh</a>
            <a href="/Shërbimet.html" class="headerSelectedSherbimet">Shërbimet</a>
            <a href="/Galeria">Galeria</a>
            <button id="menuBars" ><i class="fa-solid fa-bars fa-2xl menuBars"></i></button>

            </div>
            
                <div id="menu" class="popUpNav">
                    <a href="/Mirseardhje.html" >Mirëseardhje</a>
                    <a href="/rrethNesh.html" class="headerSelectedRrethNesh">Rreth Nesh</a>
                    <a href="/Shërbimet.html" class="headerSelectedSherbimet">Shërbimet</a>
                    <a href="/Galeria">Galeria</a>
                </div>
                
                <div id="showNav"></div>
            
        </div>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer>
        <div class="footnav">
            <a href="/Mirseardhje.html">mirëseardhje</a>
            <a href="/RrethNesh.html" class="selectedRrethNesh">Rreth Nesh</a>
            <a href="/Shërbimet.html" class="selectedSherbimet">Shërbimet</a>
            <a href="/Galeria">Galeria</a>
        </div>
    </footer>`
    }
}
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);