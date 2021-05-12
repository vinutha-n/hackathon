import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/Home',
        icon: <AiOutlineHome />,
    },
    {
        title: 'Courses',
        path: '#',
        icon: <FaOpencart />,
        iconClosed: <AiFillCaretDown />,
        iconOpened: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Tutor Course List',
                path: '/courseList',
                icon: <AiOutlineUser />
            },
            {
                title: 'Certified Users',
                path: '/certifiedusers',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    
    
];
