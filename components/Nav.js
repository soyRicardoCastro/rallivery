import { images } from '../constants'
import '../scss/nav.css'

const nav = document.querySelector('[data-nav]')

export default function Nav (color = 'green') {
  return nav.innerHTML = `
    <nav class='nav ${color}'>
      <figure class='nav__logo'>
        <a href='index.html'><img src="${images.logoNavSvg}" alt="Logo Rallivery" /></a>
      </figure>

      <ul>
        <li>
          <a href="chisiamo.html">Chi siamo</a>
          <a href="#">Diventa Rallista</a>
          <a href="partner.html">Diventa Partner</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="#">Accedi</a>
          <a href="#" class='cta ${color}'>Registrati</a>
        </li>
      </ul>
    </nav>
  `
}
