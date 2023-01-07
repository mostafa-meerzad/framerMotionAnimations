import React from 'react'
import { motion } from 'framer-motion';

const BoxTwo = () => {
  return (
    
    <motion.div className='box' whileTap={{scale:.9}} whileDrag={{borderRadius:20}} drag dragConstraints={{left:40, right:40, bottom:40, top:40}} />       
  )
}

export default BoxTwo