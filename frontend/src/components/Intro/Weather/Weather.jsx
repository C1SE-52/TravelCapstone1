import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import about__overview__img from '../About_img/about__overview__img.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import about__overview__img1 from '../About_img/about__overview__img1.jpg'
import StarSharpIcon from '@mui/icons-material/StarSharp';
import StarHalfSharpIcon from '@mui/icons-material/StarHalfSharp';

const Weather = () => {
  return (
    <div className="container1">
      <div className="head__overview__background">
                <div className="head__overview__nav">
                    <a style={{ color: ' aliceblue' }}>Home</a>
                    <h5><KeyboardArrowRightIcon /></h5>
                    <a style={{ color: ' aliceblue' }}>Về Đà Nẵng</a>
                    <h5><KeyboardArrowRightIcon /></h5>
                </div>
                <div className="head__overview__intro">
                    <h2>Về Đà Nẵng</h2>
                    <h5 style={{ color: 'white' }}> on th11 12 2022</h5>
                    <a style={{ display: 'block' }} href=""><KeyboardArrowDownIcon
                        style={{
                            fontSize: '50px',
                            margin: '0 auto',

                        }} /></a>

                </div>
            </div>
    </div>
  )
}

export default Weather