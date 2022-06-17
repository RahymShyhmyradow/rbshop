import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/main2.png'
import { TiPhone } from "react-icons/ti";
import appStore from '../../img/ios.svg'
import googlePlay from '../../img/android.svg'
function FooterMain() {
  return (
    <div className='pl-2 sm:pl-0 pb-20 container mx-auto grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-4 border-t py-4'>
      <div className='flex justify-center sm:justify-start mb-4 sm:mb-0'>
        <Link to='/' className='sm:w-1/2 w-1/3'><img src={logo} className='w-full' /></Link>
      </div>
      <div>
        <h1 className='text-xl font-bold'>Biz barada</h1>
        <ul>
          <li><Link to='/about'>Biz barada</Link></li>
          <li><Link to='/payment'>Eltip bermek we tölemek</Link></li>
          <li><Link to='/order'>Sargyt etmek</Link></li>
          <li><Link to='/faq'>Sorag-jogap</Link></li>
        </ul>
      </div>
      <div className='sm:my-0 my-2'>
        <h1 className='text-xl font-bold'>Ulanyş düzgünleri</h1>
        <ul>
          <li><Link to='/terms'>Ulanyş düzgünleri</Link></li>
          <li><Link to='/privacy'>Gizlinlik ýörelgesi</Link></li>
        </ul>
      </div>
      <div>
        <h1 className='text-xl font-bold text-green-400'>Telefon belgimiz:</h1>
        <ul>
          <li className='text-md flex items-center font-bold'><TiPhone /><p className='ml-1'>+993 64 22-20-17</p></li>
          <li className='text-md flex items-center font-bold'><TiPhone /><p className='ml-1'>+993 61 48-31-20</p></li>
          <li className='flex flex-col'>
            <p>Telefon üçin programalar:</p>
            <div className='flex mt-1'>
              <img src={appStore}  className='mr-2'/>
              <img src={googlePlay} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterMain
