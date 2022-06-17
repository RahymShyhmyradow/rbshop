import React from 'react'
import {motion} from 'framer-motion'
function UlanylyshDuzguni() {
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
      <h2 className='my-3 text-2xl font-bold text-center sm:text-left'>Ulanylysh duzgunleri</h2>
      <div className='bg-gray-200 p-4 py-8 rounded-md'>
        <li>Ulanyjy, Hyzmatlary hasaba almazdan we ulanmaga başlamazdan ozal düzgünler bilen doly tanyşmaga borçly. Hyzmatlaryň ulanylmagy düzgünleriň doly we şertsiz kabul edilmegini aňladýar.Düzgünler Saýtyň ulanyjylarynyň özara gatnaşygy üçin bitewi prosedurany kesgitleýär.</li>
        <li>Pikirleriň ýeterlik, esaslandyrylan beýany kabul edilýär. Sahypanyň düzgünlerini bozýan habarlar administrasiýa tarapyndan öçürilip bilner we ulanyja gadagan edilip bilner.</li>
        <li>Ulanyjynyň adyndan iberilen maglumatlar üçin jogapkärçilik diňe ulanyjy. Administrasiýa, Hasabyňyzy üçünji taraplar ulanmagynyň öňüni almagy maslahat berýär.</li>
        <li>Sahypanyň düzgünlerini bozýan ýazgylar administrator tarapyndan öçürilip bilner we ulanyjy petiklenip biler</li>
        <li>Aragatnaşygyň çäginde ulanmak gadagandyr: biabraý sözler. Islendik görnüşdäki kemsitmeler. jyns, milli, dini we beýleki sebäplere görä. Spam, habarlaryň gaýtalanmagy, baş harplar bilen habar ýazylanda hyýanatçylyk. Prowokatiw hereket ("trolling" diýilýän zady goşmak bilen). Türkmenistanyň kanunçylygyna ters gelýän islendik maglumatyň ýerleşdirilmegi.</li>
        <li>Dolandyryşyň: "Dolandyryş tarapyndan redaktirlenen" belligi bilen Ulanyjylaryň habarlaryny redaktirlemek, pozmak we göçürmek hukugy bar. Habarlary redaktirlemekden başlap, ulanyjynyň hereketini nädogry hasaplaýan bolsa, ulanyjynyň hasabyny pozýança islendik sanksiýalary ulanyň.</li>
      </div>
    </motion.div>
  )
}

export default UlanylyshDuzguni
