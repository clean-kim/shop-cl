import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import {MouseEventHandler} from 'react';

interface RemoveButtonProps {
    onClickHandler: MouseEventHandler;
}

export default function RemoveButton(props: RemoveButtonProps) {
    return (
        <RemoveButtonLayout onClick={props.onClickHandler}>
            <CloseIcon fontSize={'small'}/>
        </RemoveButtonLayout>
    )
}

const RemoveButtonLayout = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid var(--border400);
  background: var(--ui-02);
  display: flex;
  justify-content: center;
  align-items: center;
`;