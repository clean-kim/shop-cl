import styled from "styled-components";
import {useLocation} from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/swiper.min.css';
import {Link} from 'react-router-dom';

interface NavItem {
    value: 'Life' | 'Kitchen' | 'Tech' | 'Interior' | 'Apparel' | 'Bag' | 'Shoes';
    link: string;
}

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname.split('/')[1];

    return (
        <Nav>
            <Swiper slidesPerView={5} className='nav-swiper'>
                {NavList.map((item , i) => {
                    return (<SwiperSlide key={i} className={item.link.split('/')[1] === pathname ? 'nav-slide-active' : ''} >
                        <ItemButton to={item.link}>{item.value}</ItemButton>
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
  border-bottom: 1px solid var(--border100);
  padding: 0 10px;
  width: 100%;
  height: 40px;
  min-height: 40px;
  position: sticky;
`;

const ItemButton = styled(Link)`
  display: block;
  width: 100%;
  height: inherit;
  box-sizing: border-box;
  line-height: 40px;
  font-size: 14px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  text-align: center;
`;