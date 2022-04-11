import { images } from '../constants'
import '../scss/footer.css'

const footer = document.querySelector('[data-footer]')

export default function Footer () {
  return footer.innerHTML = `
  <div>
    <figure>
      <a href='index.html'>
        <img src="${images.logoFooPng}" alt="Logo Rallivery" />
      </a>
    </figure>
    <p>
    &#169 2022 - Rallivery. Tutti i <br />
    diritti riservati.
    </p>
  </div>

  <div>
    <ul>
      <li>Categorie</li>
      <li><a href="#">Ristoranti</a></li>
      <li><a href="#">Supermercat</a></li>
      <li><a href="#">Farmacie</a></li>
      <li><a href="#">Florerie</a></li>
      <li><a href="#">Ferramente</a></li>
    </ul>
  </div>

  <div>
    <ul>
      <li>Informazione di Interesse</li>
      <li><a href="#">Termini e condizioni</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Cookie Policy</a></li>
      <li><a href="#">Contattaci</a></li>
    </ul>
  </div>

  <div>
    <ul>
      <li data-foo><a href="chisiamo.html">Chi siamo</a></li>
      <li><a href="rallista.html">Diventa Rallista</a></li>
      <li><a href="partner.html">Diventa Partner</a></li>
    </ul>
  </div>

  <div>
    <ul>
      <li>Portaci ovunque</li>
      <li>
        <figure>
          <a href="#"><img src="${images.google}" alt="Logo Google Play Store" /></a>
        </figure>  
      </li>
      <li>
        <figure>
          <a href="#"><img src="${images.apple}" alt="Logo App Store" /></a>
        </figure>  
      </li>
      <li data-social>Seguici su</li>
      <li>
        <a href="#">
          <img src="${images.instagram}" alt="Logo Instagram" />
        </a>
        <a href="#">
          <img src="${images.facebook}" alt="Logo Facebook" />            
        </a>
      </li>
    </ul>
  </div>
  `
}
