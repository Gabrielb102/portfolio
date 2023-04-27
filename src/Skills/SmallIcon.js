import React from 'react'

const SkillIcon = ({name, imgSrc}) => {
  return (
    <div className='inline-block w-7 h-7 bg-transparent m-1 '>
      <img src={imgSrc} alt={name} className='bg-transparent'/>
    </div>
  )
}

export default SkillIcon