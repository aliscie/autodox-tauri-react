import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import DrawerItems from "./drawerItems";
import BarButton from "./bar_buttons";
import RichTextEditor from "../apps/autodox2/src/RichTextEditor";
import PersistentDrawerLeft from "./side_nav";
import BasicPopover from "./Popover";
import ColorPallet from "./color_pallet";


const fs = window.require('fs')
const path = window.require('path')

export const ColorModeContext: any = React.createContext({
    toggleColorMode: () => {
    },

});

export default function MyApp(props: any) {
    // const [val, setVal]: any = useState()
    // useEffect(() => {
    //     fs.readFile('/Users/apple/Desktop/my-new-app/Files/myFile.json', (err: any, data: any) => {
    //         console.log({err})
    //         setVal(data)
    //     })
    // }, [])
    // console.log({val})
    const [files, setFiles] = useState([])
    // const dir = '/Users/apple/Desktop/my-new-app/Files'
    const new_files = fs.readdirSync('/Users/apple/Desktop/my-new-app/Files')
    useEffect(() => {
        setFiles(new_files)
    }, [])
    const [initialVal, setmydata] = useState(require('/Users/apple/Desktop/my-new-app/Files/myFile.json'))


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
                <RichTextEditor initialValue={initialVal}/>
                {/*<BasicPopover popover={<ColorPallet intial={color.hex} setColor={setColor}/>}>light button*/}
                {/*    color</BasicPopover>*/}

            </PersistentDrawerLeft>
        </Box>
    );
}


