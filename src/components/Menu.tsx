import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ITEM_HEIGHT = 48;

export default function LongMenu(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement> | any) => {
        if (props.rightClick) {
            document.addEventListener("contextmenu", (event) => {
                event.preventDefault()
            });
            event.type == 'contextmenu' && setAnchorEl(event.currentTarget);
        } else {
            event.type != 'contextmenu' && setAnchorEl(event.currentTarget)
        }
        if (event.type != 'contextmenu') {
            props.onClick(event)
        }

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onContextMenu={handleClick}
            >
                {props.icon || <MoreVertIcon/>}
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        minWidth: '15ch',
                    },
                }}
            >
                {props.children}
            </Menu>
        </div>
    );
}
