import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    const toggleDark = () => {
        document.getElementById('Fuvk').classList.toggle("dark");
    }
    return (
        <>
            <div className='flex text-gray-300 items-center justify-center gap-20 2xl:h-[8vw]  mt-10 mx-3 backdrop-blur-lg py-4  rounded-lg border border-gray-400 '>
                <div className='flex flex-col 2xl:ml-2 gap-0.5 2xl:gap-1.5'><span className="text-lg text-gray-300">Hey, welcome_</span> <span className='text-[24px] dark:text-gray-100'>Sabbir's Portfolio</span> <span className='text-[7px] dark:text-gray-100 pb-2'><TypeAnimation
                    sequence={['Aspiring Full Stack Engineer', 1500, 'Comm. Student', 1500, 'Aloof-ish Wanderer', 500]}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                /></span></div>

                <img src="/ivten.jpg" className='w-24 2xl:mr-2 rounded-full border border-purple-500' alt="my-pic" />

            </div>
        </>
    )
}

export default Hero