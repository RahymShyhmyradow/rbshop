import React from 'react'
import {motion} from 'framer-motion'
function GizlinlikYorelgesi() {
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
      <h2 className='my-3 text-2xl font-bold text-center sm:text-left'>Ulanyş düzgünleri</h2>
      <div className='bg-gray-200 p-4 py-8 rounded-md'>
        <li>Bu gizlinlik syýasaty, rbshop Hyzmatlaryny ulananyňyzda ulanyjynyň şahsy maglumatlaryny geçirmek, ýygnamak, saklamak we gaýtadan işlemek üçin şertleri kesgitleýär.</li>
        <li>Şahsy maglumatlaryňyzyň howpsuzlygyny üpjün etmek üçin, rbshop bilen siziň bilen kanuny taýdan baglaşylan şertnama.</li>
        <li>Ulanyjy, Hyzmatlary hasaba almazdan we ulanmaga başlamazdan ozal bu syýasat bilen doly tanyşmaga borçly. Hyzmatlaryň ulanylyşy, bu syýasaty Ulanyjy tarapyndan doly we şertsiz kabul edilmegi aňladýar.</li>
        <li>rbshop duýdurmazdan üýtgeşmeler girizip biler. Üýtgeşmeleri we goşmaçalary yzygiderli barlamak maslahat berilýär.</li>
        <li>Bize berýän maglumatlaryňyzy ýygnaýarys. Hyzmatlary ulanmak üçin zerur maglumatlar. Bu maglumat bolmasa käbir hyzmatlar mümkin bolmaz.</li>
        <li>Maglumatlaryňyzy rbshop hyzmatlary bilen üpjün etmek üçin ulanýarys. Maglumatyňyz hasabyňyzy gurmak, habarlaşmagy aňsatlaşdyrmak, goldaw bermek, programmalaryň we beýleki platformalaryň aýratynlyklaryna girmek we hyzmatlarymyzy gowulandyrmak üçin ulanylýar. rbshp hasabyňyzy barlamak we goramak, emlägi dolandyrmak we mahabat materiallaryny ibermek üçin jübi telefon belgiňiz ýa-da e-poçta salgyňyz ýaly üpjün edýän aragatnaşyk kanallaryňyzy ulanýar.</li>
        <li>Hasaba alyş maglumatlary. Hyzmatlarymyza ýazylanyňyzda, adyňyzy, e-poçta salgyňyzy we telefon belgiňizi goşmak bilen käbir maglumatlary soraýarys.</li>
        <li>rbshop, şahsy maglumatlary gaýtadan işlenende zerur kanuny, guramaçylyk we tehniki çäreleri görýär ýa-da şahsy maglumatlary goramak üçin alynýandygyny üpjün edýär.</li>
        <li>rbshop bu syýasaty durmuşa geçirmek ýa-da üýtgetmek bilen baglanyşykly soraglaryňyzy we teklipleriňizi kabul edýär. Teklipleriň ýa-da soraglaryň hemmesi: info@rbshop.com</li>
      </div>
    </motion.div>
  )
}

export default GizlinlikYorelgesi
