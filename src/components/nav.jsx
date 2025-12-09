import { CircleUserRound, CodeXml, Folder, House, Mail } from "lucide-react"


const Nav = () => {
    return (
        <div className="flex overflow-hidden justify-center ">


            <div className="fixed py-1 z-1000 font-sex flex justify-center backdrop-blur-lg mt-2 border border-gray-400 text-gray-300 dark:text-black shadow rounded-lg gap-2.5 px-0.5">
                <span className="flex  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><House size={16} />Home</span>
                <span className="flex  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><CircleUserRound size={16} />About</span>
                <span className="flex  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><Folder size={16} />Projects</span>
                <span className="flex  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><CodeXml size={16} />Services</span>
                <span className="flex  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><Mail size={16} />Contact</span>

            </div>
        </div>
    )
}
export default Nav