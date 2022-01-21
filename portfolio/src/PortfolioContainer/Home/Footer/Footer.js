import React from 'react'
import './Footer.css'
import '../../../assets/Home/shape-bg.png'

export default function Footer() {
    var bg = require('../../../assets/Home/shape-bg.png')
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img 
                    src={bg}
                    alt='no internet connection'
                />
            </div>
        </div>
    )
}