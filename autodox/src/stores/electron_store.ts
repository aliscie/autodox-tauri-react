import {configureStore, createSlice} from '@reduxjs/toolkit'
import {getFiles} from "../elctron_actions/getFiles";
import createFile from "../elctron_actions/createFile";
import {read_file} from "../elctron_actions/readFile";
import deleteFile from "../elctron_actions/deleteFile";


export const counterSlice = createSlice({
    name: 'blabla',
    initialState: {
        value: require('/Users/apple/Desktop/my-new-app/myFile.json'),
        files: getFiles(),
    },
    reducers: {
        increment: (state: any) => {
            state.value = []
        },
        setFiles: (state: any) => {
            state.files = getFiles()
        },
        reduxDeleteFile: (state: any , action:any) => {
            deleteFile(action.payload)
            state.files = getFiles()
        },
        changeReadFile: (state: any, action: { payload: any }) => {
            state.value = read_file(action.payload)

        },
        reduxCreateFile: (state: any, action: { payload?: any }) => {
            createFile('')
            state.files = getFiles()
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment, setFiles, reduxDeleteFile, changeReadFile, reduxCreateFile} = counterSlice.actions

// export default counterSlice.reducer
export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})