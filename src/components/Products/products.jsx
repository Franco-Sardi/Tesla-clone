import React from 'react';
import Product from "../Product/product";
import "../Products/products.css";
import Model3 from "../Assets/Model-3.jpg"
import ModelXImage from "../Assets/Model-X.jpg"
import Cybertruck from "../Assets/cybertruck.jpg"
import PowerWall from "../Assets/Power-wall.avif"
import TeslaCharger from "../Assets/TeslaCharger.avif"
import SolarPanels from "../Assets/solarpanels.avif"


const products = [
  {
    id: 1,
    image: Model3,
    title: 'Model 3',
    description: 'Buy Model 3',
    price: "40.240",
},
{
  id: 2,
  image: ModelXImage,
  title: 'Model X',
  description: 'Buy Model X',
  price: "43.990",
},
  {
    id: 3,
    image: Cybertruck,
    title: 'CyberTruck',
    description: "Reserve your Cybertruck now.",
    price: "49.900",
  },
  {
    id: 4,
    image: PowerWall,
    title: 'Power Wall',
    description: 'Buy this revolutionary technology NOW',
    price: "10.900",
  },
  {
    id: 5,
    image: TeslaCharger,
    title: 'Tesla Charger',
    description: 'Buy this potent charger for your cars.',
    price: "3.000",
  },
  {
    id: 6,
    image: SolarPanels,
    title: 'Solar Panels',
    description: 'Start the change Now, Use clean energy',
    price: "20.000",
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}