import IconButton from "@mui/material/IconButton";
import BasicBreadcrumbs from "./breadCrumbs";
import * as React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {useTheme} from "@mui/material";
import {ColorModeContext} from "./AppProvider";

const electron = window.require("electron")

const DarkLightMode = () => {
    const theme = useTheme();
    const colorMode :any = React.useContext(ColorModeContext);

    return <IconButton sx={{ml: 1}} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
    </IconButton>
}

export default function BarButton(props: any) {
    return (<span>
                    <IconButton style={{backgroundColor: 'tomato'}} onClick={() => {
                        electron.ipcRenderer.send('close')
                    }}/>
                    <IconButton style={{backgroundColor: 'orange'}} onClick={() => {
                        electron.ipcRenderer.send('minimize')
                    }}/>
                        <IconButton style={{backgroundColor: 'lightgreen'}} onClick={() => {
                            electron.ipcRenderer.send('maximize')
                        }}/>
                        <DarkLightMode/>
                        <BasicBreadcrumbs/>
                    </span>)
}