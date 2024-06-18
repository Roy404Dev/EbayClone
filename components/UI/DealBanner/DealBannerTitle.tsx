import React from 'react'

const DealBannerTitle = ({children}: {children: React.ReactNode}) => {
  return (
    <h2 className='text-2xl font-bold mb-4'>
      {children}
    </h2>
  )
}

export default DealBannerTitle