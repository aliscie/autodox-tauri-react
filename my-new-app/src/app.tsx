import * as React from 'react';
import {useEffect, useState} from 'react';
import MyApp, {ColorModeContext} from "./components/AppProvider";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import PersistentDrawerLeft from "./components/side_nav";
import "react-color-palette/lib/css/styles.css";
import BasicPopover from "./components/Popover";
import ColorPallet from "./components/color_pallet";
import RichTextEditor from "./apps/autodox2/src/RichTextEditor";
import BarButton from "./components/bar_buttons";
import DrawerItems from "./components/drawerItems";


const fs = window.require('fs')
const path = window.require('path')

function App(props: any) {
    // const [path, setPath]:any = useState(app.getAppPath())
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    // const [color, setColor]: any = useState({hex: "#ffffff"})
    const amber = {

        50: '#7e1aff',

        100: '#c31509',

        200: '#ffe082',

        300: '#ffd54f',

        400: '#ffca28',

        500: "#ffffff",

        600: '#eeff00',

        700: '#d03333',

        800: '#11ff00',

        900: '#e600ff',

        A100: '#ffe57f',

        A200: '#40ff86',

        A400: '#000dff',

        A700: '#ff003b',
    };
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        ...amber,
                        ...(mode === 'dark' && {
                            main: '#000000',
                        }),
                    },
                    ...(mode === 'dark' ? {
                            background: {
                                default: '#373737',
                                paper: '#3c3c3c',
                            },
                        } :
                        {
                            background: {
                                default: '#ffffff',
                                paper: '#e2e2e2',
                            },
                        }),
                    text: {
                        ...(mode === 'light'
                            ? {
                                primary: '#000000',
                                secondary: '#ff1313',
                            }
                            : {
                                primary: '#ffffff',
                                secondary: '#c28bff',
                            }),
                    },
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MyApp/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}

export default App