import Computer from './Components/brand/Computer';
import Phones from './Components/brand/Phones';
import Watches from './Components/brand/Watches';
import { useSelector } from "react-redux";
import FramerSlider from "./Components/FramerSlider";
import { motion } from 'framer-motion';
import './framer-style.css'
const App = () => {
  const theme = useSelector(state => state.theme.theme)
  const logoVariants = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    },
    hidden: { opacity: 0 }
  }
  return (
    <div
      className={!theme ? 'dark' : ''}>
      <div
        className="pt-10 dark:bg-gray-200 dark:text-gray-500">
        <motion.div
          className='container mx-auto'
          variants={logoVariants}
          initial='hidden'
          animate='visible'>
          <FramerSlider />
        </motion.div>
        <Computer />
        <Phones />
        <Watches />
      </div>
    </div >
  );
}

export default App;
