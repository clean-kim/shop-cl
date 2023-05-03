import styled from 'styled-components';
import Item from "../components/common/Item";
import React from "react";
import {ProductList} from "../server/server";
import {ListLayout, Margin} from '../assets/GlobalStyle';
import SwiperCore, { Navigation, Scrollbar, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper.min.css';
import slideSample1 from '../assets/img/slideSample1.jpeg';
import slideSample2 from '../assets/img/slideSample2.jpeg';
import slideSample3 from '../assets/img/slideSample3.jpeg';

export default function MainMobile() {
    return (
        <MainMobileLayout>

            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="main-swiper"
            >
                <SwiperSlide><img src={slideSample1} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slideSample2} alt=""/></SwiperSlide>
                <SwiperSlide><img src={slideSample3} alt=""/></SwiperSlide>
            </Swiper>

            <Margin mt={85}>
                <ListLayout>
                    {ProductList.map((res, i) => {
                        return <Item key={i} {...res} />
                    })}
                </ListLayout>
            </Margin>
        </MainMobileLayout>
    );
}

const MainMobileLayout = styled.section`
  padding-top: 90px;
`;