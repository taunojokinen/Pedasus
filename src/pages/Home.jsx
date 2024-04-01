import React from 'react'
import '../App.css'


export default function home() {
  return (
    <content>
        <article>
          <div id='justify'>
            <h1>Tervetuloa kotisivullemme! </h1>
              <div >
                <p>Tarjoamme asiakkaillemme laadukkaita ja innovatiivisia ohjelmistoratkaisuja. 
                  Pedasus Softwaren asiantunteva tiimi on erikoistunut kehittämään räätälöityjä ohjelmistoja, jotka vastaavat asiakkaidemme 
                  ainutlaatuisiin tarpeisiin ja odotuksiin.</p>
              </div>
              <div>
                <p>Olemme sitoutuneet asiakastyytyväisyyteen ja laatuun. Pyrimme jatkuvasti tarjoamaan parhaita mahdollisia ratkaisuja 
                  asiakkaillemme. Olipa kyseessä sitten sovelluskehitys, web-sovellukset, mobiilisovellukset tai muut ohjelmistoprojektit, voit luottaa 
                  Pedasus Softwaren ammattitaitoon ja luotettavuuteen.</p>
              </div>
              <div>
                <p>Ota yhteyttä meihin jo tänään, niin autamme sinua saavuttamaan liiketoimintatavoitteesi tehokkaasti ja luotettavasti. 
                 </p>
              </div>
        </div>
      </article>
      <article>
        <div>
            <img src="./images/mirja.jpg" alt="Pedasus Software" class= "center" />
            <div  id='kuva'> 
              <p>
                Mirja Pirinen, Senior Partner <br />
                040 - 7021062<br />
                mirja.pirinen@hotmail.com
              </p> 
            </div>    
        </div>
      </article>
      <article>
        <div>
            <img src="./images/tauno.jpg" alt="Pedasus Software" class= "center" />  
            <div id='kuva'>
              <p>
                Tauno Jokinen, Senior Partner <br />
                050 - 4087097<br />
                tauno.jokinen@gmail.com
              </p>
            </div>    
        </div>
      </article>
    </content>
  )
}
