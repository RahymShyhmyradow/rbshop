import React from 'react'
import {motion} from 'framer-motion'
function SargytEtmek() {
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
            className='h-auto sm:h-screen flex flex-col pt-12 sm:pt-40 mb-10 container mx-auto'>
            <h2 className='my-3 text-2xl font-bold text-center sm:text-left'>Sargyt etmek</h2>
            <div className='bg-gray-200 p-4 py-8 rounded-md'>
                <div>
                    <h2 className='text-lg font-bold'>Sargyt Etmek</h2>
                    <li>Sargytlar günüň dowamynda islendik wagtda ýerine ýetirmek mümkindir.</li>
                    <li>Sargyt doly ýerine ýetirilenden soň operator size jaň edip, sargydy tassyklaýar.</li>
                    <li>Irdenki edilen sargytlar sagat 13:00-15:00 arasynda eltilip berilýär.</li>
                    <li>Günortandan soň edilen sargytlar 17:00-20:00 arasynda eltilýär.</li>
                    <li>Agşam 18:00-dan soňra edilen sargytlar ertesi 10:00-12:00 arasynda gowşurylýar.</li>
                    <li>Operatorymyz ähli sargytlary sagat 09:00-18:00 aralygynda tassyklaýar.</li>
                    <li>Sargydyňyz tassyklanmadyk ýagdaýynda ol hasaba alynmaýar we ýerine ýetirilmeýär.</li>
                    <li>Tassyklanan sargydyň eýesi 24 sagadyň dowamynda tapylmadyk halatynda ol güýjüni ýitirýär.</li>
                </div>
                <div className='my-5'>
                    <h2 className='text-lg font-bold'>Harytlary yzyna tabshyrmak</h2>
                    <li>Sargyt edilen haryt nädogry (ýerine başga haryt) ertilen ýadaýynda alman yzyna ugradyp bilýär.</li>
                    <li>Sargyt barlanyp alnandan soň töleg geçirilmedik ýagdaýynda yzyna alynýar.</li>
                    <li>Müşderi sargydy kabul edip alanyndan soňra harydyň gabyna, gutusyna, özine zeper ýetirilen halatynda ýa-da açylan ýagdaýynda haryt yzyna alynmaýar.</li>
                </div>
                <div>
                    <h2 className='text-lg font-bold'>Kepillik</h2>
                    <li>Sargyt edilen önümler ýokary hilde eltilip berilýär.</li>
                    <li>Eltilýän önümleriň abatlygyna rbshop güwä geçýär.</li>
                    <li>Elektronika harytlary öz ýanlary bilen gelýän kepillik depderçesine laýyklykda hereket edýär.</li>
                    <li>Kepillik depderçesindäki maglumatlary kurýerlerimiz doly we dogry görkezýär.</li>
                </div>
            </div>
        </motion.div>
    )
}

export default SargytEtmek
