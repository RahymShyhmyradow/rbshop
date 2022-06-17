import React from 'react'
import {motion} from 'framer-motion'
function SoragJogap() {
  const logoVariants = {
    visible: {
        opacity: 1,
        transition: {
            delay: .5
        }
    },
    hidden: { opacity: 0 }
}
  return (
    <motion.div
    variants={logoVariants}
    initial='hidden'
    animate='visible'
    className='sm:h-screen h-auto flex flex-col pt-12 sm:pt-40 mb-10 container mx-auto'>
      <h2 className='my-3 text-2xl font-bold text-center sm:text-left'>Sorag-Jogap</h2>
      <div className='bg-gray-200 p-4 py-8 rounded-md'>
        <div>
            <h2 className='text-lg font-bold'>Sargytlar nädogry ýerine ýetirilende kime ýüz tutmaly?</h2>
            <li>Sargytlaryňyz nadogry yerine yetrilende, operatora ýüz tutup bilersiňiz.</li>
            <li>Operatorlarymyzyň nomerleri: +99364222017 +99361483120</li>
            <li>Operatorlar hepdäniň 7 güni 09:00-18:00 aralygynda hyzmat berýär.</li>
        </div>
        <div className='my-2'>
            <h2 className='text-lg font-bold'>Gijeki berlen sargytlar haçan gelip gowuşýar?</h2>
            <li>Sargytlaryňyz operator tarapyndan tassyklanandan soň, ertesi gün sagat 10:00 bilen 12:00 aralygynda eltilýär..</li>
        </div>
        <div>
            <h2 className='text-lg font-bold'>Täzeliklerden we arzanladyşlardan müşderiler nädip habarly bolmaly?</h2>
            <li>Web saýtymyzda täzelikler bölüminde size görünýändir.</li>
            <li>Imo: +9936422017- sosial tordan.</li>
            <li>Instagram: @rbshop -sosial saýtdan.</li>
        </div>
        <div className='my-2'>
            <h2 className='text-lg font-bold'>Sagatlaýyn eltip bermek hyzmaty barmy, öýde bolýan wagtymyza gabatlap getirip bilýäňizmi</h2>
            <li>Sargyt edeniňizde belläp bilersiňiz.</li>
        </div>
      </div>
    </motion.div>
  )
}

export default SoragJogap
