import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import ProjectManager from "./Components/ProjectManager/ProjectManager";

function DummyPage(){
    return <h4>Under Construction</h4>
}

export const SidebarData = [
    {
        title: 'Projects',
        path: '/',
        icon: <FaIcons.FaToolbox />,
        component: <ProjectManager />
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting />,
        component: <DummyPage />
    },
    {
        title: 'Activities',
        path: '/activities',
        icon: <AiIcons.AiOutlineFileText/>,
        component: <DummyPage />
    },
    {
        title: 'Sign out',
        path: '/sign-out',
        icon: <FaIcons.FaSignOutAlt />,
        component: <DummyPage />
    }
]