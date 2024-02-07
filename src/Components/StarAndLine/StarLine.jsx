import React, { Component } from 'react';
import style from './StarLine.module.css'
class StarLine extends Component {
    render() {
        return (
            <>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className={`${style.lineLeft}`}></div>
                    <div className={`${style.star}`}>

                    <i className="fa-solid fa-star "></i>
                    </div>
                    <div className={`${style.lineRight}`}></div>
                    </div>   
            </>
        );
    }
}

export default StarLine;