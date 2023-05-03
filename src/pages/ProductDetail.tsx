import styled from "styled-components";
import img from "../assets/img/img.png";
import long_img from '../assets/img/long_img.jpeg';

export default function ProductDetail() {
    return (
        <ProductDetailLayout>
            <MainImage src={img} alt="상품 상세이미지"/>
            <Info>
                <Title>{`(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set(w) Paint Short Pajama Set`}</Title>
                <Price>
                    <PrimeCost>
                        {`88,000원`}
                    </PrimeCost>
                    <SalePrice>
                        <span>{`15%`}</span> <div>{`74,800원`}</div>
                    </SalePrice>
                </Price>
                <Brand>
                    <img src={img} alt=""/>
                    <div>
                        {`BRAND NAME`}
                    </div>
                </Brand>
            </Info>
            <ProductImageBox>
                <img src={long_img} alt="상품 이미지"/>
                <MoreImageBox>
                    <button>더보기</button>
                </MoreImageBox>
            </ProductImageBox>
        </ProductDetailLayout>
    );
}

const ProductDetailLayout = styled.div`
  padding-top: 90px;
`;

const MainImage = styled.img`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  
  width: 500px;
`;

const Info = styled.section`
  padding: 15px 8px 0;
`;

const Title = styled.h2`
  font-size: 18px;
  word-break: break-all;
  margin-bottom: 12px;
`;

const Price = styled.div`
  margin-bottom: 15px;
`;

const PrimeCost = styled.del`
  color: var(--text-04);
`;

const SalePrice = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  
  span {
    color: var(--tertiary);
  }
`;

const Brand = styled.div`
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
  margin-top: 150px;
  position: relative;
`;

const MoreImageBox = styled.div`
  z-index: 9;
  width: 100%;
  height: 80vh;
  bottom: 0;
  background: var(--ui-background);
  position: absolute;
  
  &::after {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 100%;
    height: 10vh;
    background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
    content: "";
  }
`;