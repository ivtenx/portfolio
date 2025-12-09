import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    const toggleDark = () => {
        document.getElementById('Fuvk').classList.toggle("dark");
    }
    return (
        <>
            <div className='flex text-gray-300 items-center justify-center gap-16  mt-10 mx-3 backdrop-blur-lg py-4  rounded-lg border border-gray-400 '>
                <div id="Fuvk" className='flex flex-col '> <span className='text-[30px] dark:text-gray-100'>Hi, I'm Sabbir</span> <span className='text-[8px] dark:text-gray-100 pb-2'><TypeAnimation
                    sequence={['Aspiring Full Stack Engineer', 1500, 'Comm. Student', 1500, 'Aloof-ish Wanderer', 500]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                /></span></div>

                <img src="/ivten.jpg" className='w-24 rounded-full border border-purple-500' alt="my-pic" />

            </div>
        </>
    )
}

export default Hero