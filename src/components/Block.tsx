import React, { FC, ReactNode } from 'react'
import style from '../styles/style.module.css'
import Cookies from 'js-cookie'

type Props = {
    propagation: string;
    contrarian: string;
    text: ReactNode; 
    button: string | undefined;
}

export const Block: FC<Props> = (props) => {
    const { propagation = "#fffffff2", contrarian = "#000000f2", text = "Cookieを利用してもよろしいですか。", button = "許可する" } = props

    function event(){
        Cookies.set('name', 'value', { expires: 7 })
        const gdprCookie = document.getElementById('gdpr_cookie')!
        gdprCookie.style.display = "none"
    }

    function crossEvent(){
        const gdprCookie = document.getElementById('gdpr_cookie')!
        gdprCookie.style.display = "none"
    }

    return (
        <>
        <div className={style.adjust}>
            <div className={style.block}>
                <p className={style.text} style={{color: contrarian}}>{text}</p>
                <button className={style.button} style={{background: contrarian, color: propagation}} onClick={() => event()}>{button}</button>
            </div>
            <span className={style.cross} onClick={() => crossEvent()}></span>
        </div>
        </>
    )
}
