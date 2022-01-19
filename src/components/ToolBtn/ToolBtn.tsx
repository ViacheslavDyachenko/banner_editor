import React from "react";
import style from "./ToolBtn.module.scss"

type propsToolBtn = {
    children: React.SVGProps<SVGElement>
}

let selectedTarget: HTMLElement;

const ToolBtn: React.FC<propsToolBtn> = ({children}: propsToolBtn) => {
    function highlight(target: HTMLElement) {
        const child = target.firstElementChild as React.SVGProps<SVGElement>
        if (selectedTarget) {
            selectedTarget.style.backgroundColor = '';
            const child = selectedTarget.firstElementChild as React.SVGProps<SVGElement>
            child.style.fill = 'white';
        }
        selectedTarget = target;
        selectedTarget.style.backgroundColor = '#c4c4c4';
        child.style.fill = 'black';
      }

    function toggleActive(event: React.MouseEvent) {
        const target = event.currentTarget as HTMLButtonElement;
        if(!target.classList.value.includes('toolbar__btn')) return;
        highlight(target);
    }
    return (
        <button className={style.toolbar__btn} onClick={toggleActive}>
            {children}
        </button>
    )
}

export default ToolBtn;