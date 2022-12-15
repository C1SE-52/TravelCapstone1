import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className="container-page">
            <div className="main-footer">

                <div className="container1">
                    <div className="row">
                        {/* <div className="col">
                            <div className="footer-email">
                                <div className="footer-email-doc">
                                    <h1>ĐĂNG KÝ NHẬN BẢN TIN</h1>
                                    <h3>...và nhận các ưu đãi hấp dẫn khác</h3>
                                </div>
                                <div className="footer-email_type">
                                    <input className="c-checkbox" type="checkbox" id="checkbox" />
                                    <div className="c-formContainer">
                                        <form className="c-form" action="">
                                            <input
                                                className="c-form__input"
                                                placeholder="E-mail"
                                                type="email"
                                                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                                                required=""
                                            />
                                            <label className="c-form__buttonLabel" htmlFor="checkbox">
                                                <button className="c-form__button" type="button">
                                                    GỬI
                                                </button>
                                            </label>
                                            <label
                                                className="c-form__toggle"
                                                htmlFor="checkbox"
                                                data-title="NGAY ĐÂY"
                                            />
                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div> */}


                    </div>
                    <div className="row" style={{ paddingTop: '3rem', backgroundColor: '#2d2d2d', color: 'rgb(193, 193, 193)', height: '45vh', width:'100vw' }}>

                        <div className="col-sm-1"></div>
                        <div className="col">
                            <h4 style={{ display: 'inline-block' }}>VỀ CHÚNG TÔI</h4>
                            <div className="footer-line"></div>
                            <div className="footer-row-info1">
                                <h5>Đây là sản phẩm nhóm làm để giúp đỡ Du lịch Đà Nẵng</h5>
                                <h5>Hi vọng giúp làm Xúc Tiến Du Lịch Đà Nẵng</h5>
                                <h5>Tel: (84.236) 3.898.196 - Fax: (84.236) 3.812.029</h5>
                                <h5>Contact us: C1SE-52@gmail.com</h5>
                                <h5>from DaNang with love</h5>
                            </div>

                        </div>
                        <div className="col">
                            <h4 style={{ display: 'inline-block' }}>BÀI VIẾT MỚI</h4>
                            <div className="footer-line"></div>
                            <div className="footer-row-info2">
                                <a href="">Lên kế hoạch cho mùa lễ hội cuối năm cùng Altara Festive Season Packages</a>
                                <a href="">Season Greetings | Tưng bừng mùa lễ hội với 3 sự kiện nổi tiếng khắp Đà Nẵng tại khu nghỉ mát Furama Resort</a>
                                <a href="">Pullman Đà Nẵng: Tận hưởng mùa Lễ hội tại 1 trong 6 bãi biển đẹp nhất hành tinh</a>
                                <a href="">Tháng Mười Hai Rực Rỡ tại Shilla Monogram Quangnam Danang</a>
                            </div>
                        </div>
                        <div className="col">
                            <h4 style={{ display: 'inline-block' }}>TỪ KHÓA NỔI BẬT</h4>
                            <div className="footer-line"></div>
                            <div className="footer-row-info3">
                                <a href="">APEC 2017</a>
                                <a href="">Clipper race</a>
                                <a href="">Hội An</a>
                                <a href="">khuyến mãi</a>
                                <a href="">khám phá</a>
                            </div>
                        </div>
                        <div className="col-sm-1"></div>

                    </div>
                </div>
                <div style={{color: 'rgb(193, 193, 193)', backgroundColor:'#2d2d2d'}}>
                    &copy;{new Date().getFullYear()} Travel Intelligent Guide. All rights reserved. Made with love in Da Nang</div>
                

            </div>
        </div>

    )
}

export default Footer