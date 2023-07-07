import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <NotFoundLayout>
            <p>요청한 페이지를 찾을 수 없습니다.</p>
            <Link to={'/'}>홈으로 가기</Link>
        </NotFoundLayout>
    );
}

const NotFoundLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc((var(--vh, 100vh) * 100) - 160px);

  @media only screen and (max-width: 768px) {
    height: calc((var(--vh, 100vh) * 100) - 90px);
  }

  p {
    font-weight: 300;
    font-size: 1.5rem;
  }

  a {
    width: 300px;
    height: 50px;
    margin-top: 50px;
    background: var(--primary);
    color: var(--text-06);
    text-align: center;
    line-height: 50px;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;
