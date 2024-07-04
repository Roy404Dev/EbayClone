import Image from 'next/image'
import React from 'react'

type BannerCardType = {
  image_path: string | null;
  title: string | null;
}

export const BannerCard = ({image_path, title}: BannerCardType) => {
  //BannerCard Actions
  const handleDelete = () => {
    //Revalidate and mutate
  }
  return (
    <div className='grid gap-2'>
      <Image height={150} width={165} alt='bannerCard' src={image_path || "#"} className='outline-4 outline-emerald-500 rounded-lg outline p-2 bg-gray-100'/>
      <span className='font-bold text-black'>{title ?? "untitled"}</span>
      {/* Actions  */}
      <div className="flex gap-2">
        <button className='bg-blue-600 font-bold rounded-lg cursor-pointer px-4 py-2 text-white text-sm'>Modify</button>
        <button className='bg-red-600 font-bold rounded-lg cursor-pointer px-4 py-2 text-white text-sm'>Delete</button>
      </div>
    </div>
  )
}
