import React from 'react'
import axios from "axios";
import Link from 'next/link';


const getCars = async()=>{
    try {
        const res = await axios.get('http://localhost:4002/cars',{
            next: {
                revalidate:0
            }
        });
        return res.data; // Retourne les données de la réponse
      } catch (error) {
        console.error('Error fetching cars:', error);
        return null; // Retourne un tableau vide en cas d'erreur
      }
}


async function Carfetch() {

    const cars = await getCars();
    
  return (
    <div className='flex flex-col gap-8'>
        {cars.map((car)=>(
            <>
            <div key={car.id}>
                <p>
                    {car.name}
                </p>
                <p>
                    {car.price}
                </p>
                <img src={car.source} alt="Voiture" width={200} className='object-cover' />
                <Link href={`/car/${car.id}`}>
                Aller à la {car.name}
                </Link>
            </div>
            </>
        ))}
    </div>
  )
}

export default Carfetch