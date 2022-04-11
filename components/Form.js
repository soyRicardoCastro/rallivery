import '../scss/form.css'
import { images } from '../constants'

export function Form(item) {
  return item.innerHTML = `
  <div class="form__cont" id='no-m'>
  <h3 class="form__header">
    Registra la tua attivita su <span>Rallivery</span>
  </h3>
  <p class="form__p">
    Compila il formulario e sarai ricontattato per avere
  </p>
  <form action="">
    <div class="form__row">
      <label for="name">Name del attivita</label>
      <input type="text" id='name' placeholder="Comida de Pepe">
    </div>
    <div class="form__row">
      <label for="address">Indirizzo dell'attivita</label>
      <input type="text" id='address' placeholder="via italia, 12">
    </div>
    <div class="form__row">
      <label for="nameCognome">Nome e Cognome</label>
      <input type="text" id='nameCognome' placeholder="Guillermo">
    </div>
    <div class="form__row info">
      <div class='email'>
        <label for="email">Email</label>
        <input type="email" id='email'>
      </div>

      <div class='phone'>
        <label for="phone">Telefono</label>
        <input type="text" placeholder="2554102348" id='phone'>
      </div>
    </div>
    <div class="form__row">
      <label for="categoria">Categoria dell'attivita</label>
      <select name="categoria" id="categoria">
        <option value="1">Restaurante</option>
        <option value="1">Farmacia</option>
        <option value="1">Restaurante</option>
        <option value="1">Restaurante</option>
      </select>
    </div>
    <div class="form__footer">
      <div>
        <label class="container">
          <input type="checkbox" checked="checked">
          <div class="checkmark"></div>
        </label>
        <label for="check">
          <p>Proseguendo si da il consenso ai <a href="#">Termini e condizioni. </a>Inoltre si prega di controllare la nostra <a href="#">Privacy Policy</a> e <a href='#'>Cookie Policy.</a></p>
        </label>
      </div>
      <button type="submit">Invia</button>
    </div>
  </form>
</div>
  `
}

export function FormRallista(item) {
  return item.innerHTML = `
  <div class="form__cont">
  <h3 class="form__header">
    <span>Decidi quello che guadagni</span>
  </h3>
  <p class="form__p">
    Compila il formulario e candidati subito
  </p>
  <form action="">
    <div class="form__row">
      <label for="name">Name e Cognome</label>
      <input type="text" id='name' placeholder="Guillermo Quintero">
    </div>
    <div class="form__row">
      <label for="email">Email</label>
      <input type="email" id='email' placeholder='Guillermo@rallivery.com'>
    </div>
    <div class="form__row info">
      <div class="select-phone">
        <img src="${images.italia}" alt='Flag'>
        <p>+39</p>
      </div>
      <div class='phone-rallista'>
        <label for="phone">Telefono</label>
        <input type="text" placeholder="2554102348" id='phone'>
      </div>
    </div>
    <div class="form__row">
      <textarea placeholder='Qual e la tua citta di interesse' rows='2'></textarea>
    </div>
    <div class="form__footer">
      <div>
        <label class="container">
          <input type="checkbox" checked="checked">
          <div class="checkmark"></div>
        </label>
        <label for="check">
          <p>Proseguendo si da il consenso ai <a href="#">Termini e condizioni. </a>Inoltre si prega di controllare la nostra <a href="#">Privacy Policy</a> e <a href='#'>Cookie Policy.</a></p>
        </label>
      </div>
      <button type="submit">Inizia la candidatura</button>
    </div>
  </form>
</div>
  `
}