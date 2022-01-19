import React from "react"
import style from "./ExportBtn.module.scss"

const ExportBtn = () => {
    const onClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLButtonElement;
        if(target.style.backgroundColor === 'rgb(196, 196, 196)') {
            target.style.backgroundColor = '#343434';
            return;
        }
        target.style.backgroundColor = '#c4c4c4';
    }
    return (
        <button className={style.toolbar__export_btn} onClick={onClick}>Export</button>
    )
}
export default ExportBtn;