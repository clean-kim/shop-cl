import styled, {css} from "styled-components";
import img from "../assets/img/img.png";
import long_img from '../assets/img/long_img.jpeg';
import Button, {ButtonStyleGuide} from "../components/common/Button";
import {useRef, useState} from "react";

type MoreButtonProps = {open: boolean;}

export default function ProductDetail() {
    const [open, setOpen] = useState(false);
    const moreButtonRef = useRef<HTMLDivElement>(null);
    const onClickMoreButton = () => {
        setOpen(prevState => !prevState);
    }

    return (
        <div>
            <MainImage src={img} alt="상품 상세이미지"/>
            <InfoSection>
                <Title>{`(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set`}</Title>
                <PriceBox>
                    <PrimeCost>
                        {`88,000원`}
                    </PrimeCost>
                    <SalePriceBox>
                        <span>{`15%`}</span> <div>{`74,800원`}</div>
                    </SalePriceBox>
                </PriceBox>
                <BrandBox>
                    <img src={img} alt=""/>
                    <div>
                        {`BRAND NAME`}
                    </div>
                </BrandBox>
            </InfoSection>
            <ProductImageBox>
                <DetailTextSection>
                    <H1>DETAIL</H1>
                </DetailTextSection>
                <ImageBox open={open}>
                    <img src={long_img} alt="상품 이미지"/>
                    <img src={long_img} alt="상품 이미지"/>
                    <img src={long_img} alt="상품 이미지"/>
                </ImageBox>
                <MoreBox open={open}>
                    <Button onClickHandler={onClickMoreButton}>
                        {open ? `닫기` : `더보기`}
                        <MoreIcon open={open} viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1L7 7L1 1" stroke="#333333" strokeLinecap="round" strokeLinejoin="round"/>
                        </MoreIcon>
                    </Button>
                </MoreBox>
            </ProductImageBox>
        </div>
    );
}

const MainImage = styled.img`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  
  width: 500px;
`;

const InfoSection = styled.section`
  padding: 15px 8px 0;
`;

const Title = styled.h2`
  font-size: 18px;
  word-break: break-all;
  margin-bottom: 12px;
`;

const PriceBox = styled.div`
  margin-bottom: 15px;
`;

const PrimeCost = styled.del`
  color: var(--text-04);
`;

const SalePriceBox = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  margin-top: 8px;
  
  span {
    color: var(--tertiary);
  }
`;

const BrandBox = styled.div`
  border: 1px solid var(--border100);
  width: 100%;
  line-height: 60px;
  font-weight: 500;
  height: 60px;
  max-height: 60px;
  position: relative;
  display: flex;
  
  img {
    width: 20%;
  }
  
  div {
    text-indent: 5px;
  }
`;

const ProductImageBox = styled.div`
  margin-top: 50px;
  position: relative;
`;

const MoreBox = styled.div<MoreButtonProps>`
  @media only screen and (max-width: 768px) {
    height: 78px;
  }
  
  z-index: 9;
  width: 100%;
  height: 100px;
  bottom: 0;
  background: var(--ui-background);
  position: absolute;
  padding: 0 20px 20px;
  
  ${({open}) => !open ? css`
    &::after {
      --vh20: 20vh;
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 100%;
      height: var(--vh20);

      @media only screen and (max-width: 768px) {
        height: calc(var(--vh20) / 2);
      }

      background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
      content: "";
    }
  ` : css`
    margin-top: 40px;
    position: relative;
  `};
  
`;

const MoreIcon = styled.svg<MoreButtonProps>`
  width: 14px; 
  height: 8px;
  margin-left: 7px;
  transform: ${({open}) => open ? `rotate(180deg)` : 'rotate(0)'};
`;

const ImageBox = styled.div<MoreButtonProps>`
  ${({open}) => !open && css`
    @media only screen and (max-width: 768px) {
      max-height: 1000px;
    }
    overflow: hidden;
  `}
`;

const DetailTextSection = styled.section`
  margin-bottom: 50px;
  padding: 0 8px;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 20px;
`;