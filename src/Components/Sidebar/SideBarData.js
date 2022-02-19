import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        title: 'Projects',
        path: '/',
        icon: <FaIcons.FaToolbox />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />
    },
    {
        title: 'Activities',
        path: '/activities',
        icon: <AiIcons.AiOutlineFileText/>
    },
    {
        title: 'Sign out',
        path: '/sign-out',
        icon: <FaIcons.FaSignOutAlt />
    }
]