import React, { Component } from 'react';
import style from './StarDark.module.css'
class StarDark extends Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className={`${style.lineLeft}`}></div>
                    <div className={`${style.StarDark}`}>

                    <i className="fa-solid fa-star "></i>
                    </div>
                    <div className={`${style.lineRight}`}></div>
                    </div>   
            </>
        );
    }
}

export default StarDark;