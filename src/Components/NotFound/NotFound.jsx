import React, { Component } from 'react';
import img from '../../assests/imgs/notFound.jpg'
class NotFound extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={img} alt="" />
            </div>
        );
    }
}

export default NotFound;