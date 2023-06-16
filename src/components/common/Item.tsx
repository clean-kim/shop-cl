import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useEffect, useState} from "react";
import Product from "@interface/Product";
import {Link} from "react-router-dom";
import {faker} from '@faker-js/faker';

export default function Item(props: Product) {
    const [item, setItem] = useState<Product>();
    const [fakeImg, setFakeImg] = useState('');
    useEffect(() => {
        setItem({...props});
        fakeImage(item?.category);
    }, [props, item?.category]);
    const fakeImage = async (category: string | undefined) => {
        setFakeImg(faker.image.urlPlaceholder({
            width: 480,
            height: 640,
            text: category,
            textColor: 'ffffff',
            backgroundColor: '171718'
        }));
    }

    const [favorite, setFavorite] = useState(false);
    const like = () => {
        setFavorite(prevState => !prevState);
    }

    return (
        <>
            {
                item &&
                <ItemLayout>
                    <div>
                        <BackgroundAnchor to={`/detail/${item.no}`}>
                            <OuterImgBox>
                                <InnerImgBox>
                                    <Img src={fakeImg} alt=""/>
                                </InnerImgBox>
                            </OuterImgBox>
                        </BackgroundAnchor>
                        <Info>
                            <BrandGo to={`/brand`}>{item.brandName}</BrandGo>
                            <Link to={`/detail/${item.no}`}>
                                <BrandName>
                                    {item.brandName}
                                </BrandName>
                                <Title>
                                    {item.title}
                                </Title>
                                <Price>
                                    {item.priceText}
                                </Price>
                            </Link>
                        </Info>
                    </div>
                    <div style={{marginTop: '8px'}}>
                        <FavoriteButton onClick={like}>
                            {favorite ? <FavoriteIcon {...FavButtonStyle} /> : <FavoriteBorderIcon  {...FavButtonStyle} />}
                        </FavoriteButton>
                    </div>
                </ItemLayout>
            }
        </>
    );
}

const FavButtonStyle = {
    style: {
        width: '19px',
        color: '#0e0e0c'
    }
}

const ItemLayout = styled.div`
  width: 24%;
  font-size: 13px;
  text-align: start;
  color: #0e0e0c;
  //padding: 0 25px 35px 0;
  
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

const BackgroundAnchor = styled(Link)`
  position: relative;
  
  &:link, &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  position: relative;
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

  @media only screen and (min-width:768px) {
    border-radius: 8px;
  }
`;

const BrandName = styled.div`
  font-weight: 600;
  margin-bottom: 7px;
  font-size: 15px;
  word-break: break-all;
`;

const BrandGo = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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