import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import Product from "../../interface/Product";
import img from '../../assets/img/img.png';

export default function Item(props: Product) {

    const [item, setItem] = useState<Product>(props);
    const setPriceText = (price: number) => {
        const priceText = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        setItem(prevState => ({...prevState, priceText: priceText}));
    }

    useEffect(() => {
        setPriceText(item.price);
    }, []);


    const [favorite, setFavorite] = useState(false);
    const like = () => {
        setFavorite(prevState => !prevState);
    }

    return (
        <Layout>
            <BackgroundAnchor href={`/signup`}>
                <OuterImgBox>
                    <InnerImgBox>
                        <Img src={img} alt=""/>
                    </InnerImgBox>
                </OuterImgBox>
                <Info>
                    <BrandName>
                        {item.brandName}
                    </BrandName>
                    <Title>
                        {item.title}
                    </Title>
                    <Price>
                        {item.priceText}
                    </Price>
                    <BrandGo href={`/`}>{item.brandName}</BrandGo>
                </Info>
            </BackgroundAnchor>
            <div style={{marginTop: '8px'}}>
                <FavoriteButton onClick={like}>
                    {favorite ? <FavoriteIcon {...FavButtonStyle} /> : <FavoriteBorderIcon  {...FavButtonStyle} />}
                </FavoriteButton>
            </div>
        </Layout>
    );
}

const FavButtonStyle = {
    style: {
        width: '19px',
        color: '#0e0e0c'
    }
}

const Layout = styled.div`
  width: 20%;
  font-size: 13px;
  text-align: start;
  color: #0e0e0c;
  
  @media only screen and (max-width:768px) {
    width: 50%;
  }
  
  button {
    outline: none;
    border: none;
    background: transparent;
  }
`;

const FavoriteButton = styled.button.attrs({type: 'button'})`
  text-align: start;
  padding: 0;
  cursor: pointer;
`;

const BackgroundAnchor = styled.a`
  position: relative;
  
  &:link, &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const Info = styled.div`
  margin-top: 10px;
`;

const OuterImgBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 100%;
`;

const InnerImgBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Img = styled.img`
  max-width: 100%;
  width: 100%;
`;

const BrandName = styled.div`
  font-weight: 600;
  margin-bottom: 7px;
  font-size: 15px;
  word-break: break-all;
`;

const BrandGo = styled.a`
  position: absolute;
  top: 10px;
  left: 0;
  right: 0;
  margin-top: 100%;
  color: transparent;
  &:link, &:visited {
    text-decoration: none;
  }
`;

const Title = styled.div`
  color: #2d2d2d;
  margin-bottom: 18px;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 15px;
`;