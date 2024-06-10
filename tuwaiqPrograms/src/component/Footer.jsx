import logo from './logo-tu.png';
import logo2 from './logoscy.png';
import LinkedIn from './linkedin-icon.png';
import Snapchat from './snapchat-icon.png';
import YouTube from './youtube-icon.png';
import Twitter from './twitter-icon.png';
import Discord from './discord-icon.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container2">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footersection">
          <ul>
            <li><a href="#">شارك كمدرب</a></li>
            <li><a href="#">حول الأكاديمية</a></li>
          </ul>
        </div>
        <div className="footersection">
          <ul>
            <li><a href="#">سياسة الخصوصية</a></li>
            <li><a href="#">الشروط والأحكام</a></li>
          </ul>
        </div>
        <div className="footersection">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com"><img src={LinkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://www.snapchat.com"><img src={Snapchat} alt="Snapchat" /></a></li>
            <li><a href="https://www.youtube.com"><img src={YouTube} alt="YouTube" /></a></li>
            <li><a href="https://www.twitter.com"><img src={Twitter} alt="Twitter" /></a></li>
            <li><a href="https://www.discord.com"><img src={Discord} alt="Discord" /></a></li>
          </ul>
          <h1 className="TuwaiqAcademy">@TuwaiqAcademy</h1>
        </div>
        <div className="footer-logo">
          <img src={logo2} alt="Logo 2" />
        </div>
      </div>
      <div className="copy">
        <p>&copy; جميع الحقوق محفوظة لأكاديمية طويق 2024</p>
      </div>
    </footer>
  );
}

export default Footer;

