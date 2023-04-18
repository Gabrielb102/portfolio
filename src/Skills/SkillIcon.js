import React from 'react'

const SkillIcon = ({name, imgSrc}) => {
  return (
    <div className='inline-block w-16 h-16 align-bottom bg-transparent m-2 '>
      <img src={imgSrc} alt={name} className='bg-transparent'/>
    </div>
  )
}

export default SkillIcon