import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Paralax from "./components/paralax/paralax";
import Portofolio from "./components/portofolio/portofolio";
import Service from "./components/service/service";


const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>  
    </section>
    <section id="Service">
      <Paralax type="service" />
    </section> 
    <section>
      <Service />
    </section> 
    <section id="Portofolio">
    <Paralax type="portofolio"/>
    </section> 
    <Portofolio />
    <section id="Contact">
      <Contact/>
    </section>

  </div>;
};

export default App;
