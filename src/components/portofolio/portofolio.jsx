import { useRef } from 'react';
import './portofolio.scss'
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';
const item=[
    {
        id:1,
        title:"Jo Movie",
        img:'/public/port1.png',
        desc:'Pencarian informasiC judul film dan informasi yang lainnya yang diambil mengunakan api database dari TDM lalu ditampilkan kedepan dengan framwork Reack'
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"https://images.pexels.com/photos/18931202/pexels-photo-18931202/free-photo-of-a-white-building-with-trees-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        desc:'sadfnaskdlfansdfj sdajfhnka nasdjfhruffifruui sdckmmcmkcv papapas sdkfjfi jaskf'
    },
    {
        id:3,
        title:"Laravel Commerce",
        img:"https://images.pexels.com/photos/18931202/pexels-photo-18931202/free-photo-of-a-white-building-with-trees-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        desc:'sadfnaskdlfansdfj sdajfhnka nasdjfhruffifruui sdckmmcmkcv papapas sdkfjfi jaskf'
    },
    {
        id:4,
        title:"Music Commerce",
        img:"https://images.pexels.com/photos/18931202/pexels-photo-18931202/free-photo-of-a-white-building-with-trees-in-front-of-it.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load",
        desc:'sadfnaskdlfansdfj sdajfhnka nasdjfhruffifruui sdckmmcmkcv papapas sdkfjfi jaskf'
    }
];

const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset:['start start', 'end start']
    });

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
                    <button>See Demo</button>
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