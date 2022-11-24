import React from "react";
import Container from "react-bootstrap/Container";
import { format } from "date-fns";
import { FaMailBulk } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import logo from "../../../../assets/images/logo.png";
import logomain from "../../../../assets/images/logomain.png";
import { BsCaretDownFill } from "react-icons/bs";
import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  const today = format(new Date(), `EEEE, dd-MM-yyyy`);
  return (
    <header className="header">
      <div className="header__top">
        <Container>
          <div className="header__top-container">
            <p>{today}</p>
            <div className="header__top-left">
              <ul>
                <li>
                  <FaMailBulk />
                  <span>travelcaps@gmail.com</span>
                </li>
                <li>
                  <BiPhoneCall />
                  <span>012345678</span>
                </li>
                <li>
                  <MdPlace />
                  <span>Đà Nẵng</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="header__bot">
        <Container>
          <div className="header__bot-container">
            <div className="header__bot-logo">
              <img src={logo} alt={logomain} />
            </div>
            <div className="header__bot-category">
              Chọn khu vực <BsCaretDownFill />
            </div>
            <ul className="menu">
              <li className="menu-item">
                <a href="/" className="menu-link active">
                  Trang chủ
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Giới thiệu
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Điểm du lịch
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Trải nghiệm
                </a>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <div className="header__bot-auth">
              <div className="btn btn__primary">Login</div>
              <div className="btn btn__primary">Signup</div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
