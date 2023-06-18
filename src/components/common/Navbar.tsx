import styled from "styled-components";
import {useLocation} from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';
import {PC, M} from "@components/common/MediaQuery";

export interface NavItem {
    value: 'Life' | 'Kitchen' | 'Tech' | 'Interior' | 'Apparel' | 'Bag' | 'Shoes';
    link: string;
}

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    return (
        <Nav>
            <PC elem={
                <ul>
                    {NavList.map((item , i) => {
                        return (<li key={i}>
                            <Item to={item.link}>{item.value}</Item>
                        </li>);
                    })}
                </ul>
            } />
            <M elem={
                <Swiper slidesPerView={5} className='nav-swiper'>
                    {NavList.map((item , i) => {
                        return (<SwiperSlide key={i} className={item.link.split('/')[1] === pathname ? 'nav-slide-active' : ''} >
                            <Item to={item.link}>{item.value}</Item>
                        </SwiperSlide>)
                    })}
                </Swiper>
            } />
        </Nav>
    );
}

const NavList: NavItem[] = [
    {value: 'Life', link: '/life'},
    {value: 'Kitchen', link: '/kitchen'},
    {value: 'Tech', link: '/tech'},
    {value: 'Interior', link: '/interior'},
    {value: 'Apparel', link: '/apparel'},
    {value: 'Bag', link: '/bag'},
    {value: 'Shoes', link: '/shoes'},
];

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

const Item = styled(Link)`
  display: block;
  width: 100%;
  height: inherit;
  line-height: 40px;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  text-align: center;
`;

const PCNavList = styled.ul`
  
`;