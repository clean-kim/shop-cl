import {NavItemList} from '@components/common/Navbar';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function NavMobile(props: NavItemList & { pathname: string }) {
    const [nav, setNav] = useState<NavItemList>({list: []});
    const [pathname, setPathname] = useState<string>('');
    useEffect(() => {
        setNav({list: props.list});
        setPathname(props.pathname);
    }, [props]);

    return (
        <Swiper slidesPerView={5} className='nav-swiper'>
        {nav.list.map((item , i) => {
            return (
                <SwiperSlide key={i} className={item.link.split('/')[1] === pathname ? 'nav-slide-active' : ''} >
                    <Item to={item.link}>{item.value}</Item>
                </SwiperSlide>
            );
        })}
    </Swiper>
    );
}

const Item = styled(Link)`
  display: block;
  line-height: 2.5rem;
  font-size: 0.875rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  text-align: center;
`;