import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
        {/* sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <span>yourbe</span>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100008739691164"><img src="/facebook.png"/></a>
                <a href="https://www.instagram.com/jonathan18_as?igsh=bWdoZm9mbGk3YTMx&utm_source=qr"><img src="/instagram.png"/></a>
                <a href="https://www.youtube.com/channel/UCDA1QQMFTB8_MCyxSMpR93g"><img src="/youtube.png"/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar