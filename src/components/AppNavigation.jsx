import edushare from "../assets/edushare.svg"
import { IoMenu } from "react-icons/io5";

const links = ["Home", "Profile", "Courses", "Contact"]

const calcheight = {
    height: 'calc(100vh - 70px)'
}

const signIn = () => {
    console.log("Sign in")
}

const MobileMenu = () => {
    return (
        <div className="menu ">
                    <ol className="sm:hidden w-100 text-center flex flex-col items-center justify-center" style={calcheight}>
                    {links.map((link, index) => (
                        <li key={index} className="p-8 w-full"><a href="#" className="hover:text-gray-500">{link}</a></li>
                    ))}
                    <li className="p-8 w-full">
                        <a onClick={signIn} className="block sm:hidden cursor-pointer transition-all duration-300 ease-in-out py-2 px-5 rounded-md text-sky-500 bg-sky-100 hover:text-sky-100 hover:bg-sky-500">Sign In</a>
                    </li>
                </ol>
                
                </div>
    )
} 
const AppNavigation = () => {
    return (
        <>
            <nav className="px-4 md:px-12 py-4 sm:py-10 flex justify-between items-center min-h-fit">
                <h1><img src={edushare} alt=""/></h1>
                <ol className="hidden sm:flex justify-center items-center gap-10">
                    {links.map((link, index) => (
                        <li key={index} ><a href="#" className="hover:text-gray-500">{link}</a></li>
                    ))}
                </ol>
                <a onClick={signIn} className="hidden sm:block cursor-pointer transition-all duration-300 ease-in-out py-2 px-5 rounded-md text-sky-500 bg-sky-100 hover:text-sky-100 hover:bg-sky-500">Sign In</a>
                {/* Toggle  Icon */}
                <IoMenu className="text-3xl sm:hidden cursor-pointer" />
            </nav>
            <MobileMenu/>
        </>
    )
}

export default AppNavigation