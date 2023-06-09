import styled, {css} from "styled-components";
import img from "@assets/img/img.png";
import long_img from '@assets/img/long_img.jpeg';
import Button, {ButtonStyleGuide} from "@components/common/Button";
import {useEffect, useRef, useState} from "react";
import BuyGroup from "@components/productDetail/BuyGroup";
import {useParams} from 'react-router';
import instance from '@api/axios';
import Product, {GetProductInterface} from '@interface/Product';
import {ListSection, Flex, theme} from '@assets/GlobalStyle';
import {useMediaQuery} from 'react-responsive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FavoriteButton} from '@components/common/Item';
import {faker} from '@faker-js/faker';
import SearchIcon from "@mui/icons-material/Search";
import {ThemeProvider} from "@mui/material";
import {useAppDispatch} from '@modules/store';
import {addCart} from '@modules/cartSlice';

type MoreButtonProps = {open: boolean;}

export default function ProductDetail() {
    const [open, setOpen] = useState(false);
    const moreButtonRef = useRef<HTMLDivElement>(null);
    const onClickMoreButton = () => {
        setOpen(prevState => !prevState);
    }
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    // 상품 좋아요
    const [favorite, setFavorite] = useState(false);
    const like = () => {
        setFavorite(prevState => !prevState);
    }

    const {no} = useParams();
    const [product, setProduct] = useState<Product>({
        no: 0,
        title: '',
        price: 0,
        priceText: '',
        likeCnt: 0,
        brandName: '',
        discountRate: 0,
        img: ''
    });
    const getProductDetail = (no: string) => {
        instance.get(`/products?no=${no}`).then(res => {
            console.log(res.data.category);
            setProduct({
                ...GetProductInterface(res.data)[0],
                img: faker.image.urlPlaceholder({
                    width: 500,
                    height: 500,
                    text: res.data[0].category,
                    textColor: 'ffffff',
                    backgroundColor: '171718'
                })
            });
        });
    }
    const dispatch = useAppDispatch();
    const addToCart = () => {
        dispatch(addCart({...product, count: 1, option: ''}));
    }
    useEffect(() => {
        getProductDetail(no as string);
    }, [no]);

    return (
        <ListSection>
            <InfoBlock>
                <MainImage src={product.img} alt="상품 상세이미지"/>
                <InfoSection>
                    <TitleSection>
                        <Title>{product.title}</Title>
                        <FavoriteButton onClick={like}>
                            {favorite ?
                                <ThemeProvider theme={theme}>
                                    <FavoriteIcon style={{width: '1.375rem'}} color={`primary`}/>
                                </ThemeProvider>
                                :
                                <ThemeProvider theme={theme}>
                                    <FavoriteBorderIcon style={{width: '1.375rem'}} color={`primary`}/>
                                </ThemeProvider>
                            }
                        </FavoriteButton>
                    </TitleSection>
                    <PriceBox>
                        <PrimeCost>
                            {`${product.priceText}원`}
                        </PrimeCost>
                        <SalePriceBox>
                            <DiscountRateSpan>{`${product.discountRate}%`}</DiscountRateSpan><span>{`${product.discountPriceText}원`}</span>
                        </SalePriceBox>
                    </PriceBox>
                    <Review>후기 5개</Review>
                    <BottomBlock>
                        <BrandBox>
                            <img src={product.img} alt=""/>
                            <div>
                                {product.brandName}
                            </div>
                        </BrandBox>
                        {!isMobile &&
                            <BuyGroupBlock>
                                <Button onClickHandler={addToCart}>장바구니</Button>
                                <PurchasePCButton>구매하기</PurchasePCButton>
                            </BuyGroupBlock>
                        }
                    </BottomBlock>
                </InfoSection>
            </InfoBlock>
            <DetailTextSection>
                <H1>DETAIL</H1>
            </DetailTextSection>
            <ProductImageBox>
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
            {isMobile && <BuyGroup {...product} />}
        </ListSection>
    );
}

const InfoBlock = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainImage = styled.img`
  width: 500px;
  
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoSection = styled.section`
  width: 100%;
  margin-left: 1.250rem;
  border-top: 2px solid var(--primary);
  border-bottom: 2px solid var(--primary);
  text-align: start;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    padding: 15px 8px 0;
    border: none;
    margin: 0;
  }
`;

const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  font-size: 1.375rem;
  font-weight: 500;
  margin: 44px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  @media only screen and (max-width: 768px) {
    font-size: 1.125rem;
    margin: 10px 0 12px;
    overflow: initial;
    white-space: initial;
    word-break: break-word;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 35px;
  font-family: -apple-system;
  
  @media only screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const PrimeCost = styled.del`
  color: var(--text-04);
  font-size: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SalePriceBox = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: 800;

  @media only screen and (max-width: 768px) {
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: 8px;
  }
`;

const DiscountRateSpan = styled.span`
  color: var(--tertiary);
  margin: 0 0.625rem 0 0.938rem;
  
  @media only screen and (max-width: 768px) {
    margin-right: 5px;
  }
`;

const Review = styled.div`
  font-size: 1rem;
  color: var(--text-03);
  text-decoration: underline;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 0.875rem;
  }
`;

const BrandBox = styled.div`
  border: 1px solid var(--border300);
  width: 100%;
  line-height: 90px;
  font-weight: 600;
  height: 90px;
  max-height: 90px;
  display: flex;
  margin-bottom: 35px;
  
  img {
    width: 9.375rem;
  }
  
  div {
    width: 100%;
    margin-left: 0.938rem;

    @media only screen and (max-width: 768px) {
      margin-left: 0.313rem;
    }
  }

  @media only screen and (max-width: 768px) {
    line-height: 80px;
    height: 80px;
    min-height: 80px;
    font-weight: 500;
    font-size: 0.875rem;
  }
`;

const ProductImageBox = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const MoreBox = styled.div<MoreButtonProps>`
  @media only screen and (max-width: 768px) {
    height: 78px;
  }
  
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
    max-height: 1500px;
    @media only screen and (max-width: 768px) {
      max-height: 1000px;
    }
    overflow: hidden;
  `}
`;

const DetailTextSection = styled.section`
  margin: 80px 0 50px;

  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    padding: 0 8px;
  }
`;

const H1 = styled.h1`
  text-align: start;
  font-weight: 700;
  font-size: 1.375rem;
  text-decoration: underline 5px var(--primary);

  @media only screen and (max-width: 768px) {
    font-size: 1.125rem;
    text-decoration: none;
  }
`;

const BottomBlock = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

  @media only screen and (max-width: 768px) {
    position: initial;
  }
`;

const BuyGroupBlock = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const PurchasePCButton = styled(Button).attrs({
    setStyle: {
        ...ButtonStyleGuide.basic01
    }
})`
`;