"use client"
import Link from 'next/link'
import React from 'react'

const Aside = () => {
  return (
    <aside className='bg-blue-950 h-screen p-4'>
      <div className="">
        <ul className='grid gap-4'>
          <li><Link href="/admin/dashboard" className='text-white cursor-pointer '>Dashboard</Link></li>
          <li><Link href="/admin/products" className='text-white cursor-pointer '>Products</Link></li>
          <li><Link href="/admin/categories" className='text-white cursor-pointer '>Categories</Link></li>
          <li><Link href="/admin/users" className='text-white cursor-pointer '>Users</Link></li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside