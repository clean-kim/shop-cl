import styled from "styled-components";
import {useLocation, useNavigate} from "react-router";
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';
import {useState} from "react";

interface NavItem {
    value: 'Life' | 'Kitchen' | 'Tech' | 'Interior' | 'Apparel' | 'Bag' | 'Shoes';
    link: string;
}

interface Active {
    isActive: boolean;
}

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];
    const onClickHandler = (e: React.MouseEvent) => {
        const href = e.currentTarget.getAttribute('value') as string;
        navigate(href);
    }

    return (
        <Nav>
            <Swiper slidesPerView={5} className='nav-swiper'>
                {NavList.map((item , i) => {
                    return (<SwiperSlide key={i} className={item.link.split('/')[1] === pathname ? 'nav-slide-active' : ''} >
                        <ItemButton onClick={e => onClickHandler(e)} value={item.link}>{item.value}</ItemButton>
                    </SwiperSlide>)
                })}
            </Swiper>
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
  box-sizing: border-box;
  //background: var(--text-04);
  background: var(--ui-background);
  padding: 0 10px;
`;

const ItemButton = styled.button.attrs({type: "button"})`
  height: inherit;
  box-sizing: border-box;
  line-height: 40px;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;