import React from "react"
import Badges from "./Badges"

const About = () => {
  return (
    <>
      <div className='jumbotron' style={{ backgroundColor: "#212121" }}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-7 px-5'>
              <h1 className='display-4 text-danger pb-3'>RÓLUNK</h1>
              <p className='lead text-white'>
                Hogy kik vagyunk, és miért alakultunk, az nem másnak, mint
                egyrészt az egyre növekvő igény a külföldi munkalehetőségek
                iránt, másrészt a megbízható munkaközvetítő irodák hiányának
                köszönhető, de az igazat megvallva, inkább az utóbbi.
              </p>
              <p className='lead text-white'>
                Cégünk fő célja munkát biztosítani mindazon munkavállalók,
                illetve keresők számára, akik külföldön, egész pontosan
                Hollandián belül szeretnének elhelyezkedni. Cégünk jól tudja,
                hogy mindenki számára a biztonság, a stabilitás, a megbízhatóság
                a legfontosabb, éppen ezért úgy döntöttünk, ezek lesznek
                számunkra a legfontosabb célkitűzések a munkaközvetítés során.
              </p>
              <p className='lead text-white'>
                Igyekszünk mindig szem előtt tartani a Te elvárásaidat és
                érdekeidet, valamint ezeket figyelembe véve munkát biztosítani a
                számodra. Cégünk teljes erőbedobással azon dolgozik, hogy a
                jelentkezésedtől számítva, egészen a tényleges munka
                megkezdéséig maximálisan mindenben támogasson.
              </p>
            </div>
            <div className='col-lg-5 p-3'>
              <img
                className='img-fluid pb-3'
                src='https://images.pexels.com/photos/3184352/pexels-photo-3184352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='team'
              />
              <hr className='bg-danger mx-5' />
              <p className='text-white text-center'>
                Működésünk egyik legfontosabb alapelve amellett, hogy mindig
                törvényesen járunk el,{" "}
                <span className='text-danger'>
                  hogy soha semmilyen körülmények között nem számolunk fel
                </span>{" "}
                közvetítési díjat!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Badges />
    </>
  )
}

export default About
