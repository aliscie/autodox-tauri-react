import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {Badge, ListItemButton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeReadFile, reduxCreateFile} from '../stores/electron_store'
import DeleteFile from "../action_components/delete_file";
import RenameFile from "../action_components/rename_file";
import CloudFile from "../action_components/cload_file";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import LongMenu from "../components/Menu";
import CustomizedTooltips from "../components/tool_tip";


export default function DrawerItems(props: any) {
    var files = props.files ? props.files : []
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()
    // @ts-ignore
    return (<span>
        <List>
                    <ListItem
                        onClick={() => {
                            dispatch(reduxCreateFile())
                        }}
                        button key={'New file'}>
                        <ListItemIcon>
                            <AddBoxOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'New file'}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {files.map((text: string, index: number) => (
                        <ListItem
                            key={index}
                            secondaryAction={<LongMenu>
                                <RenameFile text={text}/>
                                <CloudFile text={text}/>
                                <DeleteFile text={text}/>

                            </LongMenu>}
                            disablePadding
                        >
                            <ListItemButton
                                onClick={() => {
                                    dispatch(changeReadFile(text))
                                }}
                                role={undefined} dense>
                                {text == 'myFile.json' ? <Badge
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    badgeContent={<CustomizedTooltips
                                        title='this file is uploaded to the cloud and it cost 0.3 Megabyte.'>0.3M <CloudCircleIcon/></CustomizedTooltips>}
                                    color="info">
                                    <ListItemText
                                        primary={text}/>
                                </Badge> : <ListItemText
                                    primary={text}/>}


                            </ListItemButton>
                        </ListItem>

                    ))}
                </List>

    </span>)
}