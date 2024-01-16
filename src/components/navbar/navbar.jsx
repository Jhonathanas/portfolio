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
                <a href="#"><img src="/facebook.png"/></a>
                <a href="#"><img src="/instagram.png"/></a>
                <a href="#"><img src="/youtube.png"/></a>
                <a href="#"><img src="/dribbble.png"/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar