import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {ColorModeContext} from "./AppProvider";
import {Checkbox, IconButton, ListItemButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
// const electron = window.require("electron")
// const { app } = require('electron')
const fs = window.require('fs')
const path = window.require('path')

export default function DrawerItems(props: any) {
    var files = props.files ? props.files : []


    // @ts-ignore
    return (<span>
        <List>
                    <ListItem
                        onClick={() => {
                            let n = Math.random();
                            let pathName: any = path.join('/Users/apple/Desktop/my-new-app', 'Files')
                            let file = path.join(pathName, 'Untitled' + n + '.json')
                            // require('electron-reload')(__dirname, {ignored: /<folder_to_be_ignored>|[\/\\]\./});
                            fs.writeFile(file, `[ { "type": "h1", "children": [ { "text": "Untitled${n}" } ] }]`, (err: any) => {
                                return console.log(err || 'File is created')
                            })
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
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments"
                                        onClick={() => {
                                            const filepath = '/Users/apple/Desktop/my-new-app/Files/' + text

                                            if (fs.existsSync(filepath)) {
                                                fs.unlink(filepath, (err: { message: string; }) => {
                                                    if (err) {
                                                        alert("An error ocurred updating the file" + err.message);
                                                        console.log(err);
                                                        return;
                                                    }
                                                    console.log("File succesfully deleted");
                                                });
                                            } else {
                                                alert("This file doesn't exist, cannot delete");
                                            }
                                        }}
                                    ><MoreVertIcon/>
                                    </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} dense>

                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>

                    ))}
                </List>

    </span>)
}