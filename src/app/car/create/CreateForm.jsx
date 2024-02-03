'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function CreateForm() {
    const [name,setname] = useState("");
    const [price,setPrice] = useState(null);
    const [faussesource,setfaussesource] = useState("");
    const [isLoading,setIsloading] = useState(false);
    const source = "/Images/" + faussesource + ".jpg";

    const handleSubmit = async(e) => {
        e.preventDefault();
        setIsloading(true);
        const car = {
            name,price,source
        }

        const res = await fetch("http://localhost:4002/cars/",{
            method: "POST",
            headers : {"Content-Type":"application/json"},
            body: JSON.stringify(car)
        })

        if (res.status === 201){
            router.refresh();
            router.push('/car');
        }
    }

  return (
    <form className='w-1/2' onSubmit={handleSubmit}>
        <label htmlFor="">
            <span>
                name :
            </span>
            <input type="text" required onChange={(e)=>setname(e.target.value)} value={name} />
        </label>
        <label htmlFor="">
        <span>
                Price :
            </span>
            <input type="text" required onChange={(e)=>setPrice(e.target.value)} value={price} />
        </label>
        <label htmlFor="">
        <span>
                Path of the Image
            </span>
            <input type="text" required onChange={(e)=>setfaussesource(e.target.value)} value={faussesource} />
        </label>
        <button className='' disabled={isLoading}>
            {isLoading && <span>Adding ...</span>}
            {!isLoading && <span>Add car</span>}
        </button>
    </form>
  )
}
