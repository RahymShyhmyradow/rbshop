import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      y: 0
    },
    out: {
      opacity: 0,
      y: '-10%'
    }
  }
  const transition={
    type:"spring",
    stiffness:20
  }
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      transition={transition}
      variants={pageTransition}
      style={{overflow:'hidden'}}
      className='sm:h-screen h-auto'>
      <div className='sm:h-screen h-auto container mx-auto pt-10'>
        <div className='h-full flex flex-col-reverse sm:flex-row items-center justify-center w-full'>
          <div className='flex flex-col px-3 pb-10 sm:pb-0 sm:w-1/3'>
            <h2 className='font-bold text-center sm:text-left text-2xl'>Biz barada</h2>
            <p>RBShop onlaýn market bolup, 2022-nji ýyldan bäri müşderilere söwdanyň tiz, ýeňil we amatly görnüşini hödürläp gelýär. Saýt alyjylaryň isleglerini kanagatlandyrmak üçin önümleriň görnüşlerini yzygiderli artdyrýar. Bu babatda marketimiz size kompyuter enjamlaryny, telefonlary we durli gornushli sagatlary giň görnüşde hödürleýär. Onlaýn dükanymyz iş ýerleriňize, öýleriňize ýa-da siziň islän salgyňyza eltip berip, wagtyňyzy tygşytlamaga ýardam eder. RBShop online markedi geljekde has-da kämilleşip, öňde goýan maksatlaryna ýetmek üçin okgunly we ýadawsyz zähmet çekýär.</p>
          </div>
          <img className='sm:w-1/2 sm:h-2/3 w-80' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOU7b8T0nkjDKmI6i_ZZeSidMLw4QbEqHdVA&usqp=CAU' />
        </div>
      </div>
    </motion.div>
  )
}

export default About
