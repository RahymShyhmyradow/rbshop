import React from 'react'
import {motion} from 'framer-motion'
function Eltipbermek() {
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
            <h2 className='my-3 text-2xl font-bold text-center sm:text-left'>Eltip bermek we tolemek</h2>
            <div className='bg-gray-200 p-4 py-8 rounded-md'>
                <li>Eltip bermek hyzmaty Aşgabat şäher içinde, Büzmeýin we Änew şäheri aralygynda amala aşyrylýar</li>
                <li>Sargyt 100 manatdan geçse ähli nokatlara mugt eltilýär</li>
                <li>Sargyt 100 manada ýetmese, eltip beriş hyzmaty 20 manat bolýar</li>
                <li>18:00-dan soň edilen sargytlar ertesi gün gowşurylar</li>
                <li>Hyzmat amala aşyrylanda girizen salgyňyza we telefon belgiňize esaslanylýar</li>
                <li>Hasap fakturasyny kurýer size gowşurýar</li>
                <li>Harytlaryň nyrhy hasap fakturasynda görkezilýär</li>
                <li>Müşderi tölegi harytlary kabul edenden soňra ýerine ýetirýär</li>
                <li>Tölegi nagt we nagt däl görnüşinde amala aşyrmak mümkindir</li>
                <li>Sargytlar kabul edilip, töleg geçirileninden soň, harytlar yzyna alynmaýar</li>
            </div>
        </motion.div>
    )
}

export default Eltipbermek
