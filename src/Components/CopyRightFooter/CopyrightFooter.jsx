import React from 'react'
import style from './CopyrightFooter.module.css'
export default function CopyrightFooter() {
  return (
    <div className={` ${style.bgFooter} text-center  text-white`}>
        <p>Copyright  <span><i class="fa-regular fa-copyright"></i></span> Your Website 2021</p>
    </div>
  )
}
