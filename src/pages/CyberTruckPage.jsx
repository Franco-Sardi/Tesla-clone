import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import CybertruckImage from"../components/Assets/cybertruck.jpg"
import ModelSectionsNoText from '../components/ModelSectionsNoText/ModelSectionsNoText'
import CybertruckImage2 from"../components/Assets/cybertruckImage2.webp"
import ImageGrid from '../components/ImageGrid/ImageGrid'
import cybertruckImage3 from "../components/Assets/cybertruckImage3.jpg"
import cybertruckImage4 from "../components/Assets/cybertruckImage4.jpg"


const featureItems = [
  {title: '805 Horsepower', description: '1033 lb-ft (torque)'},
  {title: '6.5s 0-100', description: '177 km/h (maximum)'},
  {title: '700km', description: 'Autonomy'},
  {title: '$49.900', description: 'Price'},

]
export default function CyberTruckPage() {
  return( 
    <div className='container'>
      <section className='section' id="section4">
        <ModelSections
            header={"CyberTruck"}
            description={"Explore Inventory"}
            backgroundImage={CybertruckImage}
            featureItems={featureItems}
        />
        </section>
        <section className='section'>
          <ModelSectionsNoText backgroundImage={CybertruckImage2} />
        </section>
        <section className='section'>
          <ImageGrid
          image1={cybertruckImage3}
          image2={cybertruckImage4}
          title1={" Futuristic Interior Unveiled"}
          title2={"Unrivaled Versatility"}
          text1={"Step into the future with the Tesla Cybertruck's revolutionary and spacious interior. Cutting-edge technology and sustainable luxury await."}
          text2={"Versatility meets innovation with Tesla Cybertruck's expansive truck bed, capable of carrying other vehicles and much more."}
          />
        </section>
    </div>
  )
}

