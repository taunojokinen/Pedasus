import { useEffect } from 'react'
import '../App.css'

export default function About() {
  useEffect(() => {
    document.title = 'Pedasus Software – Tietoa meistä'
  }, [])

  return (
    <main>
      <article className='about'>
        <h2>Tietoa Pedasus Softwaresta</h2>

        <section>
          <h3>Ohjelmistoratkaisuja ihmisten ja tarpeiden ehdoilla</h3>
          <p>
            Pedasus Software on ohjelmistokehityksen osaaja. Meille ovat
            tunnusomaisia tekninen osaaminen, käytännönläheinen ajattelu ja
            asiakkaan tarpeiden ymmärtäminen.
          </p>
          <p>
            Toimiva ohjelmisto on ratkaisu, joka helpottaa arkea, selkeyttää
            toimintaa ja auttaa saavuttamaan tavoitteita.
          </p>
        </section>

        <section>
          <h3>Miten työskentelemme?</h3>
          <p>
            Aloitamme tutustumalla asiakkaan tarpeisiin. Haluamme ymmärtää,
            mitä ongelmaa ollaan ratkaisemassa ja millainen ratkaisu tuottaa
            todellista hyötyä.
          </p>
          <p>
            Arvostamme selkeää viestintää, yhteistyötä ja ratkaisuja, joita on
            mahdollista kehittää myös tulevaisuudessa.
          </p>
        </section>

        <section>
          <h3>Osaamisemme ja kiinnostuksen kohteemme</h3>
          <p>
            Olemme kiinnostuneita erityisesti verkkopalveluista,
            ohjelmistosovelluksista ja digitaalisten ratkaisujen
            kehittämisestä.
          </p>
          <p>
            Haluamme hyödyntää nykyaikaisia teknologioita
            tarkoituksenmukaisesti. Teknologia on meille väline, ei
            itseisarvo.
          </p>
        </section>

        <section className='about-contact'>
          <h3>Tutustutaan ja keskustellaan</h3>
          <p>
            Onko sinulla idea, kehitystarve tai ongelma, johon ohjelmisto
            voisi tarjota ratkaisun?
          </p>
          <p>
            Ota yhteyttä. Keskustellaan siitä, miten voisimme auttaa.
          </p>
        </section>
      </article>
    </main>
  )
}
