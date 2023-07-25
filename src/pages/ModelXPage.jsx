import React from 'react'
import ModelSections from '../components/ModelSections/ModelSections'
import ModelXImage from "../components/Assets/Model-X.jpg"
import ModelSectionsNoText from '../components/ModelSectionsNoText/ModelSectionsNoText'
import ModelX2 from "../components/Assets/Model-X2.jpg"
import ImageGrid from '../components/ImageGrid/ImageGrid'
import ModelX1 from "../components/Assets/modelX1.avif"
import ModelX3 from "../components/Assets/ModelX2.avif"

const featureItems = [
    {title: '670 Horsepower', description: '773 lb-ft (torque)'},
    {title: '2.8s 0-100', description: '250 km/h (máximo)'},
    {title: '547km', description: 'Autonomy'},
    {title: '$43.990', description: 'Price'},
  
  ]
export default function ModelXPage() {
  return( 
    <div className='container'>
        <section className='section' id="section3">
        <ModelSections
            header={"Model X"}
            description={"Explore Inventory"}
            backgroundImage={ModelXImage}
            featureItems={featureItems}
        />
        </section>
        <section className='section'>
          <ModelSectionsNoText backgroundImage={ModelX2} />
        </section>
        <section className='section2'>
          <ImageGrid 
          image1={ModelX1}
          image2={ModelX3}
          title1={" Stay Connected"}
          text1={" Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging."}
          title2={" Sublime Sound"}
          text2={" A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best listening experience wherever you are."}

          />
        </section>
    </div>
)
}