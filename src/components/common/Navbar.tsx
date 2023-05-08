import styled from "styled-components";
import {useLocation, useNavigate} from "react-router";
import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';

interface NavItem {
    value: string;
    link: string;
}

interface Active {
    isActive: boolean;
}

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    return (
        <Nav>
            <Swiper slidesPerView={5} className='nav-swiper' slideActiveClass='nav-slide-active'>
                {NavList.map((item , i) => {
                    return (<SwiperSlide key={i} >
                        <Item isActive={item.link.split('/')[1] === pathname}>
                            <a href={item.link}>{item.value}</a>
                        </Item>
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

  ul {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 20px;
    height: 40px;
    font-size: 14px;
  }
`;

const Item = styled.div<Active>`
  height: inherit;
  box-sizing: border-box;
  line-height: 40px;
`;