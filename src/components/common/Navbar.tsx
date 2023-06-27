import styled from "styled-components";
import {useLocation} from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';
import {PC, M} from "@components/common/MediaQuery";
import {useEffect, useState} from 'react';
import NavPC from '@components/common/NavPC';
import instance from '@api/axios';
import NavMobile from '@components/common/NavMobile';

export interface NavItem {
    value: 'Life' | 'Kitchen' | 'Tech' | 'Interior' | 'Apparel' | 'Bag' | 'Shoes';
    link: string;
}

export interface NavItemList {
    list: NavItem[];
}

export const GetNavItemInterface: (props: any) => NavItem[] = (props) => {
    return props.map((item: any) => {
        return {
            value: item.value,
            link: item.link
        }
    });
}

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];
    const [nav, setNav] = useState<NavItemList>({list: []});

    const getNavList = () => {
        instance.get('/nav').then(res => {
            setNav({list: GetNavItemInterface(res.data)});
        });
    }

    useEffect(() => {
        getNavList();
    }, []);

    return (
        <Nav>
            <PC elem={<NavPC list={nav.list} pathname={pathname}/>} />
            <M elem={<NavMobile list={nav.list} pathname={pathname} />} />
        </Nav>
    );
}

const Nav = styled.nav`
  padding: 0 10vw;
  width: 100vw;
  height: 85px;
  min-height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    padding: 0;
    align-items: end;
    
    height: 40px;
    min-height: 40px;
  }
`;
