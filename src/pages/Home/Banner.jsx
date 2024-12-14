import { easeInOut, easeOut } from "motion";
import dev1 from "/dev1.jpg";
import dev2 from "/dev2.jpg";
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div className="flex items-center gap-12 max-w-5xl mx-auto my-12 *:w-1/2">
            <div>
                <motion.h1
                    animate={{ x: [0, 50, 0] }}
                    transition={{ duration: 5, delay: 1, ease: easeOut, repeat: Infinity }}
                    className='text-5xl font-bold'>
                    The <motion.span
                        animate={{ color: ['#ff3f33', '#33b5ff'] }}
                        transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}>Easiest Way </motion.span>
                    to Get Your New Job
                </motion.h1>
                <p className="mt-6 text-black/60 font-medium">Each month, more than 3 million job seekers turn to
                    website in their search for work, making over 140,000
                    applications every single day</p>
            </div>
            <div>
                <motion.img src={dev1}
                    animate={{ y: [20, 80, 20] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 w-80" />
                <motion.img src={dev2}
                    animate={{ x: [100, 150, 100] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="rounded-t-[40px] rounded-br-[40px] border-l-8 border-b-8 border-blue-500 w-80 h-full object-cover" />
            </div>
        </div>
    )
}

export default Banner;