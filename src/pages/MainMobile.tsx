import styled from 'styled-components';
import Item from "../components/common/Item";
import React, {useEffect, useRef, useState} from "react";
import {ProductList} from "../server/server";
import {ListLayout, Margin} from '../assets/GlobalStyle';
import SwiperCore, {Navigation, Scrollbar, Pagination, SwiperOptions, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper.min.css';
import slideSample1 from '../assets/img/slideSample1.jpeg';
import slideSample2 from '../assets/img/slideSample2.jpeg';
import slideSample3 from '../assets/img/slideSample3.jpeg';
import {Swiper as SwiperClass, SwiperModule} from "swiper/types";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export default function MainMobile() {
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <section>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="main-swiper"
                initialSlide={0}
                loop={true}
                autoplay={{
                    delay: 4000
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper: SwiperCore) => {
                    if (typeof swiper.params.navigation !== 'boolean') {
                        if (swiper.params.navigation && navigationPrevRef.current) {
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            navigationPrevRef.current.hidden = true;
                        }
                    }
                    swiper.navigation.update();
                }}
                onSlideChange={swiper => {
                    const ri = swiper.realIndex;
                    if(ri > 0 && navigationPrevRef.current) navigationPrevRef.current.hidden = false;
                    if(ri < 1 && navigationPrevRef.current) navigationPrevRef.current.hidden = true;
                    swiper.navigation.update();
                }}
            >
                {SwiperList.map((item, i) => {
                    return <SwiperSlide key={i}><img src={item} alt="Slide Image"/></SwiperSlide>
                })}
                <SwiperNavigationPrev ref={navigationPrevRef}><ArrowBackIosRoundedIcon sx={{...ArrowIconStyle}}/></SwiperNavigationPrev>
                <SwiperNavigationNext ref={navigationNextRef}><ArrowForwardIosRoundedIcon  sx={{...ArrowIconStyle}}/></SwiperNavigationNext>
            </Swiper>

            <Margin mt={85}>
                <ListLayout>
                    {ProductList.map((res, i) => {
                        return <Item key={i} {...res} />
                    })}
                </ListLayout>
            </Margin>
        </section>
    );
}

const SwiperList = [
    slideSample1,
    slideSample2,
    slideSample3
]

const SwiperNavigation = styled.div`
  position: absolute;
  z-index: 9;
  top: 50%;
  width: 70px;
  height: 80px;
  padding: 20px;
  margin-top: -50px;
`;

const SwiperNavigationPrev = styled(SwiperNavigation)`
    left: 0;
`;

const SwiperNavigationNext = styled(SwiperNavigation)`
    right: 0;
`;

const ArrowIconStyle = {
    width: '30px',
    height: '40px',
    color: 'var(--ui-background)',
    fontWeight: 100
};