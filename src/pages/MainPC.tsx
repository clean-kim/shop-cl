import styled from 'styled-components';
import Item from "@components/common/Item";
import React, {useEffect, useRef, useState} from "react";
import {ListLayout, ListSection} from '@assets/GlobalStyle';
import {SwiperProps} from 'swiper/react/swiper-react';
import instance from '@api/axios';
import {GetProductInterface, ProductList} from '@interface/Product';
import SwiperCore, {Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper.min.css';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import wideSlideSample1 from '@assets/img/wideSlideSample1.jpg';
import wideSlideSample2 from '@assets/img/wideSlideSample2.jpg';
import wideSlideSample3 from '@assets/img/wideSlideSample3.jpg';
import wideSlideSample4 from '@assets/img/wideSlideSample4.jpg';
import wideSlideSample5 from '@assets/img/wideSlideSample5.jpg';

export default function MainPC() {
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);
    const [swiperSetting, setSwiperSetting] = useState<SwiperProps | null>(null);
    const [productListData, setProductListData] = useState<ProductList>({list: [], totalCount: 0});

    const getProductList = () => {
        instance.get('/products').then(res => {
            const {data} = res;
            setProductListData({
                list: GetProductInterface(data),
                totalCount: data.length
            });
        })
    }
    useEffect(() => {
        getProductList();
        if (!swiperSetting) {
            setSwiperSetting({
                pagination: {
                    type: "progressbar"
                },
                modules: [Pagination, Navigation, Autoplay],
                className: "main-swiper",
                initialSlide: 0,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                navigation: {
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                },
                onBeforeInit: (swiper: SwiperCore) => {
                    if (typeof swiper.params.navigation !== 'boolean') {
                        if (swiper.params.navigation && navigationPrevRef.current) {
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            navigationPrevRef.current.hidden = true;
                        }
                    }
                    swiper.navigation.update();
                },
                onSlideChange: (swiper: SwiperCore) => {
                    const ri = swiper.realIndex;
                    if(ri > 0 && navigationPrevRef.current) navigationPrevRef.current.hidden = false;
                    if(ri < 1 && navigationPrevRef.current) navigationPrevRef.current.hidden = true;
                    swiper.navigation.update();
                }
            });
        }
    }, []);

    return (
        <section>
            <SlideBlock>
                {
                    swiperSetting &&
                    <Swiper {...swiperSetting}>
                        {SwiperList.map((item, i) => {
                            return <SwiperSlide style={{position: 'relative', height: '800px'}} key={i}>
                                       <img src={item} style={{position: 'absolute', objectFit: 'cover',  top: 0, scale: 2}} alt="Slide Image"/>
                                   </SwiperSlide>
                        })}
                        <SwiperNavigationPrev ref={navigationPrevRef}>
                            <ArrowBackIosRoundedIcon sx={{...ArrowIconStyle}}/>
                        </SwiperNavigationPrev>
                        <SwiperNavigationNext ref={navigationNextRef}>
                            <ArrowForwardIosRoundedIcon sx={{...ArrowIconStyle}}/>
                        </SwiperNavigationNext>
                    </Swiper>
                }
            </SlideBlock>
            <ListSection>
                <MainPCH1>WHAT&#39;S NEW</MainPCH1>
                <ListLayout>
                    {productListData.list.map((res, i) => {
                        return <Item key={i} {...res} />
                    })}
                </ListLayout>
            </ListSection>
        </section>
    );
}

const SwiperList = [
    wideSlideSample1,
    wideSlideSample2,
    wideSlideSample3,
    wideSlideSample4,
    wideSlideSample5
];

const MainPCH1 = styled.h1`
  font-size: 55px;
  font-weight: lighter; 
  text-align: center;
  margin-bottom: 40px;
`;

const SlideBlock = styled.div`
  margin-bottom: 80px;
`;

const SwiperNavigation = styled.div`
  position: absolute;
  z-index: 9;
  top: 50%;
  width: 70px;
  height: 80px;
  padding: 20px;
  margin-top: -50px;
  cursor: pointer;
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