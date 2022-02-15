export const getFiles = () => {
    const fs = window.require('fs')
    const new_files = fs.readdirSync('./')
    return new_files
}