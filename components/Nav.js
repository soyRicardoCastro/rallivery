import { images } from '../constants'
const nav = document.querySelector('[data-nav]')

export default function Nav (color = 'blue') {
  return nav.innerHTML = `
    <nav class='nav ${color}'>
      <figure class='nav__logo'>
        <img src="${images.logoNavSvg}" alt="Logo Rallivery" />
      </figure>

      <ul>
        <li>
          <a href="#">Chi siamo</a>
          <a href="#">Diventa Rallista</a>
          <a href="#">Diventa Partner</a>
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
