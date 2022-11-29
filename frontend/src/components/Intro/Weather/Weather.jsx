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
import About_weather_img from '../About_img/about__weather_img.jpg';
import About_weather_img1 from '../About_img/About_weather_img1.jpg';
import About_weather_img2 from '../About_img/About_weather_img2.jpg';
import About_weather_img3 from '../About_img/About_weather_img3.jpg';
import About_weather_img4 from '../About_img/About_weather_img4.jpg';
import About_weather_img5 from '../About_img/About_weather_img5.jpg';

const Weather = () => {
  return (
    <div className="container1">
      <div className="head__overview__background">
        <div className="head__overview__nav">
          <a style={{ color: ' aliceblue' }}>Home</a>
          <h5><KeyboardArrowRightIcon /></h5>
          <a style={{ color: ' aliceblue' }}>Thời tiết Đà Nẵng</a>
          <h5><KeyboardArrowRightIcon /></h5>
        </div>
        <div className="head__overview__intro">
          <h2>Thời tiết Đà Nẵng</h2>
          <h5 style={{ color: 'white' }}> on th11 12 2022</h5>
          <a style={{ display: 'block' }} href=""><KeyboardArrowDownIcon
            style={{
              fontSize: '50px',
              margin: '0 auto',

            }} /></a>

        </div>
      </div>
      <Row>
        <Col sm={2}></Col>
        <Col sm={7}>
          <div className="body__overview__img" style={{ paddingTop: '5rem' }}>
            <img src={About_weather_img} alt="overview" style={{ width: '40vw', height: '50vh' }} />
          </div>
          <div className="body__overview__content">
            <i>Thời tiết Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa điển hình, nhiệt độ cao và ổn định.</i>
            <p>Đà Nẵng nằm trong vùng khí hậu nhiệt đới gió mùa, nhiệt độ cao và ít biến động. Nhiệt độ trung bình hàng năm khoảng 25,6ºC, cao nhất là tháng 6 (29,2ºC), thấp nhất là tháng 2 (21,2ºC). Riêng vùng rừng núi Bà Nà ở độ cao gần 1.500m có nhiệt độ trung bình từ 17ºC đến 20ºC. Độ ẩm không khí trung bình hàng năm là 83,4%. Lượng mưa trung bình hàng năm là 1.355mm, cao nhất là tháng 10 với 266mm, thấp nhất là tháng 2 với 7mm.</p>
            <p>Thời tiết Đà Nẵng là nơi chuyển tiếp đan xen giữa khí hậu miền Bắc và miền Nam, với tính trội là khí hậu nhiệt đới ở phía Nam. Mỗi năm có 2 mùa rõ rệt: mùa khô từ tháng 1 đến tháng 7 và mùa mưa kéo dài từ tháng 8 đến tháng 12, thỉnh thoảng có những đợt rét mùa đông nhưng không đậm và không kéo dài.</p>
            <div className="body__overview__img" style={{ paddingTop: '3rem' }}>
              <img src={About_weather_img1} alt="overview" style={{ width: '40vw', height: '50vh' }} />
              <center><i style={{ fontSize: '0.8rem' }}>Nhiệt độ không khí trung bình các tháng (ºC)</i></center>
            </div>
            <div className="body__overview__img" style={{ paddingTop: '3rem', paddingBottom:'3rem' }}>
              <img src={About_weather_img2} alt="overview" style={{ width: '40vw', height: '50vh' }} />
              <center><i style={{ fontSize: '0.8rem' }}>Lượng mưa trung bình các tháng (mm)</i></center>
            </div>
            <b><i>Một số gợi ý khi đi du lịch Đà Nẵng các tháng trong năm:</i></b>
            <div className="body__overview__img" style={{ paddingTop: '3rem' }}>
              <img src={About_weather_img3} alt="overview" style={{ width: '40vw', height: '100%' }} />
              
            </div>
            <ul>
              <li><p>Cuối tháng 12 – cuối tháng 3: Thời tiết Đà Nẵng các tháng này mát mẻ và dễ chịu, thi thoảng còn có cơn mưa xuân. Đây là thời điểm lý tưởng nhất để du xuân cho gia đình, các đặp đôi và bạn bè. Thời điểm này giá các dịch vụ thuê khách sạn, ăn uống được cho là bình ổn nhất năm. Trang phục khi đi tháng này thường đồ vintage, váy, quần dài không quá dày. Lưu ý nên mang thêm áo khoác tránh buổi tối sẽ se se lạnh.</p></li>
            </ul>
            <p>Các sự kiện thường niên diễn ra trong thời gian này có thể kể đến như: Bắn pháo hoa chào năm mới dịp tết nguyên đán, đường hoa 2 bên bờ sông Hàn và các tuyến phố của Đà Nẵng, Lễ hội hoa tulip tại Sun World Bà Nà Hills, Lễ hội chào năm mới tại Asia Park Công Viên Châu Á, Lễ vía Thần Tài đầu năm tại Khu du lịch núi Thần Tài, Lễ hội Quán Thế Âm – Ngũ Hành Sơn…</p>
            <div className="body__overview__img" style={{ paddingTop: '3rem' }}>
              <img src={About_weather_img4} alt="overview" style={{ width: '40vw', height: '100%' }} />
              
            </div>
            <ul>
              <li><p>Đầu tháng 4 – giữa tháng 9: Với nhiệt độ trung bình từ 28-30°C (thường ít mưa và bão) nên thời tiết rất đẹp, thích hợp cho những chuyến du lịch biển, nghỉ dưỡng hoàn hảo. Đây được xem là thời gian cao điểm của du lịch Đà Nẵng.</p></li>
            </ul>
            <p>Ngoài ra, các sự kiện”đinh” và đặc sắc thường diễn ra trong thời điểm này như: Lễ hội tuyệt vời Đà Nẵng với nhiều hoạt động biển hấp dẫn, Lễ hội pháo hoa Quốc tế Đà Nẵng, Cuộc thi Marathon Quốc tế Đà Nẵng…</p>
            <div className="body__overview__img" style={{ paddingTop: '3rem' }}>
              <img src={About_weather_img5} alt="overview" style={{ width: '40vw', height: '100%' }} />
              
            </div>
            <ul>
              <li><p>Giữa tháng 9 – cuối tháng 12: Đây là khoảng thời gian vừa chấm dứt cái nắng nóng oi bức Đà Nẵng, sẽ thi thoảng lác đác những cơn mưa rào. Việc xuất hiện các cơn mưa rào chỉ độ 1-2 tiếng lại tạnh sẽ không ảnh hưởng nhiều đến chuyến đi của bạn. Thời điểm này sẽ có các đợt kích cầu nên vé máy bay, dịch vụ lưu trú ăn uống rất hợp lý.</p></li>
            </ul>
            <p>Các trải nghiệm khi đi du lịch Đà Nẵng trong thời điểm này có thể kể đến: Khám phá kinh tế đêm Đà Nẵng, mua sắm, du lịch Mice, trải nghiệm các khu du lịch sinh thái, các quán cà phê đẹp tại Đà Nẵng.. hoặc các sự kiện như: Lễ hội Halloween tại các khu điểm du lịch, Lễ hội Noel…</p>






          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Weather