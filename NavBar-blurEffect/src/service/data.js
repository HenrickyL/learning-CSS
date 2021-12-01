import {
    AiOutlineHome as home,
    AiOutlineCamera as came
} from 'react-icons/ai'
import {FiSettings as settings} from 'react-icons/fi'
import {FaRegUser as user} from 'react-icons/fa'
import {BsChat as chat} from 'react-icons/bs'



const data = [
    {
        title: "Home",
        img: home,
        url: "/"
    },
    {
        title: "Profile",      
        img: user,
        url: "/profile"
    },
    {
        title: "Message",      
        img: chat,
        url: "/message"
    },
    {
        title: "Photos",       
        img: came,
        url: "/photos"
    },
    {
        title: "Settings",     
        img: settings,
        url: "/settings"
    },
    

]

export default data
