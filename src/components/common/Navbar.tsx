import styled from "styled-components";
import {useLocation} from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';
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
    }, [nav]);

    return (
        <Nav>
            <PC elem={<NavPC list={nav.list} pathname={pathname}/>} />
            <M elem={<NavMobile list={nav.list} pathname={pathname} />} />
        </Nav>
    );
}

const Nav = styled.nav`
  //background: var(--text-04);
  background: var(--ui-background);
  padding: 0 10px;
  width: 100%;
  height: 80px;
  min-height: 80px;
  position: sticky;
  display: flex;
  align-items: end;
  
  @media only screen and (max-width: 768px) {
    height: 40px;
    min-height: 40px;
  }
`;
