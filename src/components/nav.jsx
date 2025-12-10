import { CircleUserRound, CodeXml, Folder, House, Mail } from "lucide-react"


const Nav = () => {
    return (
        <div className="flex overflow-hidden justify-center ">


            <div className="fixed py-1 2xl:mt-3.5 z-100 font-sex flex justify-center backdrop-blur-lg mt-1 border border-gray-500 text-gray-300 rounded-lg gap-2.5 px-0.5 2xl:py-2 2xl:px-10">
                <span className="flex 2xl:text-xl 2xl:gap-0.5  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><House className="w-full" />Home</span>
                <span className="flex 2xl:text-xl 2xl:gap-0.5   duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><CircleUserRound className="w-full" />About</span>
                <span className="flex 2xl:text-xl 2xl:gap-0.5  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><Folder className="w-full" />Projects</span>
                <span className="flex 2xl:text-xl 2xl:gap-0.5  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><CodeXml className="w-full" />Services</span>
                <span className="flex 2xl:text-xl 2xl:gap-0.5  duration-400 hover:rounded-[10px] hover:text-green-800 hover:scale-110 items-center text-[12px]"><Mail className="w-full" />Contact</span>

            </div>
        </div>
    )
}
export default Nav