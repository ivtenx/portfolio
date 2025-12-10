import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'

const Social = () => {
    return (
        <div className='flex justify-center'> <div className='text-gray-400  flex flex-col bg-purple-800 p-1 rounded-lg mb-4 2xl:gap-3.5 2xl:py-1.5 gap-2.5 lg:gap-3 lg:py-1.5'>
            <a href="https://www.instagram.com/ivtenx/">            <Instagram className='text-pink-100 hover:text-green-800 hover:scale-110 duration-300 ' />
            </a>            <Facebook className=' hover:text-green-800 hover:scale-110 duration-300 ' />
            <Linkedin className=' hover:text-green-800 hover:scale-110 duration-300 ' />

            <Github className=' hover:text-green-800 hover:scale-110 duration-300 ' />  <Youtube className=' hover:text-green-800 hover:scale-105 duration-300 ' />
        </div></div>

    )
}

export default Social
