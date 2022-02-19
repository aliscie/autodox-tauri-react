import * as React from 'react';
import Box from '@mui/material/Box';
import RichTextEditor from "../apps/autodox2/src/RichTextEditor";
import {useSelector} from "react-redux";
import PersistentDrawerLeft from "../components/side_nav";
import BarButton from "./bar_buttons";
import DrawerItems from "./drawerItems";


export const ColorModeContext: any = React.createContext({
    toggleColorMode: () => {
    },

});

export default function App(props: any) {
    const files = useSelector((state: any) => state.counter.files)

    const state = useSelector((state: any) => state.counter.value)

    const ChangeTitle = (title: string) => {
        console.log({title})
    }
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <PersistentDrawerLeft
                drawerItems={<DrawerItems files={files}/>}
                mainbar={<BarButton/>}>
                <RichTextEditor ChangeTitle={ChangeTitle} initialValue={state}/>
                {/*<BasicPopover popover={<ColorPallet intial={color.hex} setColor={setColor}/>}>light button*/}
                {/*    color</BasicPopover>*/}

            </PersistentDrawerLeft>
        </Box>
    );
}


