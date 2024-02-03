import React from 'react'
import axios from "axios";
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const dynamicParams = true;

export const generateStaticParams = async()=>{
    const res = await axios.get('http://localhost:4002/cars/')
    const cars = res.data;

    return cars.map((car)=>({
        id:car.id
    }))
}

const getCar = async(id)=>{
    try {
        const res = await axios.get('http://localhost:4002/cars/' + id,{
            next: {
                revalidate:10
            }
        });

        
        
        return res.data; // Retourne les données de la réponse
      } catch (error) {
        console.error('Error fetching cars:', error);
        return null; // Retourne un tableau vide en cas d'erreur
      }

      
}




export default async function CarDetails({ params }) {
    const car = await getCar(params.id);

    const cars = await generateStaticParams(); // Obtenez la liste des voitures
    if(params.id > cars.length){
        notFound();
    }

    return (
        <main>
            <nav>
                <h2>Car detail</h2>
            </nav>
            <div>
                <h3>{car.name}</h3>
                <small>{car.price}</small>
                <Image src={car.source} alt='Voiture' height={200} width={200}/>
            </div>
        </main>
    );
}

