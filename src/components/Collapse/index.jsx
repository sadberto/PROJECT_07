import PropTypes from 'prop-types';
import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import './Style/desktop.scss';
import './Style/mobile.scss';


export default function Collapse({text , title}) {
   const [isOpen , setIsOpen] = useState(false)

    return isOpen ? (
      <div className='propos-open'>
        <div className='propos-open__box'>
           <p>
            {text}
           </p>
          <div className='propos'>
            <div className='propos__box'> 
            <h3>{title}</h3>
            <button onClick={()=> setIsOpen(false)}><BiChevronUp/></button>
            </div>
          </div>
        </div>
      </div>
    ): (
      <div className='propos-close'>
      <div className='propos-close__box'>
        <div className='propos'>
          <div className='propos__box'> 
          <h3>{title}</h3>
          <button onClick={()=> setIsOpen(true)}><BiChevronDown/></button>
      </div>
      </div>

      </div>
     
    </div>
    )
      
}

Collapse.prototype = {
  text : PropTypes.number,
  title: PropTypes.string,
}