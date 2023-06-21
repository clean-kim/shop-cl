import {NavItem, NavItemList} from "@components/common/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';

export default function NavPC(props: NavItemList & { pathname: string }) {
    const [nav, setNav] = useState<NavItemList>({list: []});
    const [pathname, setPathname] = useState<string>('');
    useEffect(() => {
        setNav({list: props.list});
        setPathname(props.pathname);
    }, [props]);

    return (
        <NavList>
            {
                nav.list.map((item: NavItem, index) => {
                    return (<Item key={index} pathname={pathname} value={item.value}>
                        <Anchor to={item.link}>{item.value}</Anchor>
                    </Item>);
                })
            }
        </NavList>
    )
}

const NavList = styled.ul`
  display: flex;
  align-items: center;
  width: 100vw;
  gap: 10px;
`;

const Item = styled.li<Partial<NavItem> & { pathname: string }>`
  border-bottom: 4px solid ${({pathname, value}) => value && pathname === value.toLowerCase() ? `var(--primary)` : `transparent`};
  padding: 5px;

  &:hover {
    border-bottom-color: var(--primary);
  }
`;

const Anchor = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
`;