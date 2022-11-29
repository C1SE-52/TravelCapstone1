import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Routes, Route, Link } from "react-router-dom";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import about__overview__img from '../About_img/about__overview__img.jpg';
import about__history__img from '../About_img/about__history_img.jpg';
import about__weather__img from '../About_img/about__weather_img.jpg';
import HistoryPage from '../History/History';
import WeatherPage from '../Weather/Weather';
import OverviewPage from '../Overview/Overview';
import './AboutDanang.css';

const AboutDanang = () => {
    return (
        <div className="section">
        
            <Col sm={8}>
                <Row>
                <Col sm={2}></Col>
                <Col sm={10}>
                <div>
                    <div className="headPage">
                        <div className="about__nav">
                            <a href="/">Home</a>
                            <div className="about__nav__icon--right"><KeyboardArrowRightIcon /></div>
                            <a href="">Về Đà Nẵng</a>
                        </div>
                        <h1 style={{ padding: '10px', color: 'rgb(74, 73, 73)' }}> Về Đà Nẵng</h1>
                        <div className="about__start">
                            <a href="">3 sao</a>
                            <a href="">4 sao</a>
                            <a href="">5 sao</a>
                            <a href="">Ẩm thực</a>
                            <a href="">APEC Viet Nam 2017 </a>
                            <a href=""> Bản Tin</a>
                        </div>
                    </div>
                    <hr />                  
                </div>      
                </Col>
                </Row>
                <Row className="about__block">
                <Col sm={2}></Col>
                <Col sm={7}>
                <div className="about__block__title" >
                        <a href="/thoitietdanang">Thời Tiết Đà Nẵng</a>
                    </div>
                    <div className="about__block__plus">
                        <div className="about__block__plus__day">
                            <h5>th11 12 2022</h5>

                        </div>
                        <div className="about__block__plus__comment">
                            <h5><ChatBubbleOutlineOutlinedIcon /></h5>
                            <h5>0</h5>
                        </div>
                    </div>
                    <div className="about__block__content">
                        Thời tiết Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa điển hình, nhiệt độ cao và ổn định. Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa, nhiệt độ cao và ít biến động. Nhiệt độ trung bình hàng năm khoảng 25,6ºC, cao nhất là tháng 6…
                    </div>
                    
                </Col>
                
               
                <Col sm={3}>
                    <div className="about__block__image">
                    <img src= {about__overview__img} alt="anh cau rong" />
                    </div>
                
                </Col>
                </Row>
                <Row className="about__block">
                <Col sm={2}></Col>
                <Col sm={7}>
                <div className="about__block__title" >
                    <a href="/tongquandanang">Tổng Quan Đà Nẵng</a>
                    </div>
                    <div className="about__block__plus">
                        <div className="about__block__plus__day">
                            <h5>th11 12 2022</h5>

                        </div>
                        <div className="about__block__plus__comment">
                            <h5><ChatBubbleOutlineOutlinedIcon /></h5>
                            <h5>0</h5>
                        </div>
                    </div>
                    <div className="about__block__content">
                    Đà Nẵng là thành phố lớn thứ 4 ở Việt Nam sau Thành phố Hồ Chí Minh, Hà Nội và Hải Phòng về đô thị hóa và phát triển kinh tế - xã hội. Nằm trên bờ Biển Đông có cửa sông Hàn, Đà Nẵng là một trong những thành phố cảng có vị trí chiến lược…
                    </div>
                    
                </Col>
                
               
                <Col sm={3}>
                    <div className="about__block__image">
                    <img src= {about__weather__img} alt="anh cau rong" />
                    </div>
                
                </Col>
                </Row>
                <Row className="about__block">
                <Col sm={2}></Col>
                <Col sm={7}>
                <div className="about__block__title" >
                    <a href="/lichsudanang">Lịch sử Đà Nẵng</a>
                    </div>
                    <div className="about__block__plus">
                        <div className="about__block__plus__day">
                            <h5>th11 12 2022</h5>

                        </div>
                        <div className="about__block__plus__comment">
                            <h5><ChatBubbleOutlineOutlinedIcon /></h5>
                            <h5>0</h5>
                        </div>
                    </div>
                    <div className="about__block__content">
                    Trong lịch sử dân tộc, Đà Nẵng được biết đến không chỉ là một thành phố cảng lớn nhất miền Trung Việt Nam mà còn là một địa danh gắn liền với công cuộc mở mang bờ cõi Đại Việt từ nhiều thế kỉ trước. Dấu vết của một cửa ngõ giao lưu quốc tế…
                    </div>
                    
                </Col>
                
               
                <Col sm={3}>
                    <div className="about__block__image">
                    <img src= {about__history__img} alt="anh cau rong" />
                    </div>
                
                </Col>
                </Row>
                
                </Col>
            <Col sm={4}>   </Col>
        
       {/* <Routes>
        <Route path='/tongquandanang' element={<OverviewPage/>}></Route>
        </Routes>  */}
    </div>

    )
}

export default AboutDanang