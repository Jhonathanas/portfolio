import { useRef } from 'react';
import './portofolio.scss'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';
const item=[
    {
        id:1,
        title:"Movie App",
        img:'/port1.png',
        demo: `https://jonamovie.netlify.app`,
        desc:'Web service about finding movie and the detail the every moviel'
    },
    {
        id:2,
        title:"Nike Landing Page",
        img:"/porto5.png",
        demo: 'https://jonike.netlify.app',
        desc:'Landing page about nike shoes with react framwork and tailwind'
    },
    {
        id:3,
        title:"Thread App",
        img:"/porto6.png",
        demo: 'https://myx-chat.netlify.app',
        desc:'Clone app thread and x with react with state management Redux'
    },
    {
        id:4,
        title:"TravelMate",
        img:"/capstone.png",
        demo: 'https://travelmate-frontend-pi.vercel.app',
        desc:'Our final project in dicoding SIB CYCLE 6 using React and Express ,me as role fullstack'
    },
    {
        id:5,
        title:"Employee",
        img:"/porto4.png",
        demo: 'https://github.com/Jhonathanas/Employees',
        desc:'Manage Employee Office Applications with Laravel and Filament'
    }
];

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:['start start', 'end start']
    });
    const redirectToDemo = (demoUrl) => {
        window.location.href = demoUrl;
    }        
    const y = useTransform(scrollYProgress, [0, 1], [-200,200])

    return <section>
        <div className='container'>
            <div className='wrapper'>
                <div className='imgContainer' ref={ref}>
                    <img src={item.img} alt='' />
                </div>
                <motion.div className='textContainer' style={{ y }}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button onClick={() => redirectToDemo(item.demo)}>See Demo</button>
                </motion.div>
            </div>
        </div>
        </section>
}
const Portofolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start']
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });
    return (
    <div id='porto' className='portofolio' ref={ref}>
        <div className='progres'>
            <h1>Feature</h1>
            <motion.div style={{ scaleX:scaleX }} className='progresBar'>
            </motion.div>
        </div>
        {item.map((item) => (
            <Single item={item} key={item.id} />
            
  ))}
    </div>
  )
}

export default Portofolio