import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { useHistory } from "react-router-dom";


const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: black;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const history = useHistory();
    const handleLogout = () => {
        history.push('/');
    }
    return (
        <div>
      
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
                <div className='Heading'><p>Learning and Certification</p></div>
                <div className='Header'  onClick={handleLogout} ><p>Hii, abel.j@utthunga.com</p></div>
            </Nav>
           
            <SidebarNav sidebar={sidebar}>
                <span style={{color:"white"}}><h3>Tutor Home</h3></span>
                <SidebarWrap>
               
                    <NavIcon to="#" onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <Submenu item={item} key={index} />;
                    })}
                   

                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        </div>
    );
};

export default Sidebar;
