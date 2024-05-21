import { useRef } from 'react';
import './portofolio.scss'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';
const item=[
    {
        id:1,
        title:"Movie App",
        img:'/port1.png',
        demo: `https://jonamovie.netlify.app`,
        desc:'Pencarian judul film dan informasi yang lainnya yang diambil mengunakan api database dari TDM lalu ditampilkan kedepan dengan React'
    },
    {
        id:2,
        title:"Nike Landing Page",
        img:"/porto2.png",
        demo: 'https://jonike.netlify.app',
        desc:'Landing page about nike shoes with react framwork and tailwind'
    },
    {
        id:3,
        title:"KependudukanApp",
        img:"/Porto3.png",
        demo: 'https://github.com/Jhonathanas/AppKependudukan.git',
        desc:'Memenage Kependudukan dengan Laravel Brezze React'
    },
    {
        id:4,
        title:"Manage Employee",
        img:"/porto4.png",
        demo: 'https://github.com/Jhonathanas/Employees',
        desc:'Manage Employee Office Aplication with Laravel and Filament'
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
    <div className='portofolio' ref={ref}>
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