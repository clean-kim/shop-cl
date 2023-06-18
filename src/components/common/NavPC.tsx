import {NavItem} from "@components/common/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function NavPC(item: NavItem) {
    return (
        <Item>
            <Anchor to={item.link}>{item.value}</Anchor>
        </Item>
    )
}

const Item = styled.li`
  
`;

const Anchor = styled(Link)`
  font-size: 18px;
  font-weight: 700;
`;