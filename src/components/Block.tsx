import React, { FC, ReactNode, useEffect } from 'react'
import style from '../styles/style.module.css'
import Cookies from 'js-cookie'

type Props = {
    propagation: string;
    contrarian: string;
    text: ReactNode; 
    button: string | undefined;
    name: string | undefined;
}

export const Block: FC<Props> = (props) => {
    const { propagation = "#fffffff2", contrarian = "#000000f2", text = "Cookieを利用してもよろしいですか。", button = "許可する", name = "gdpr_cookie" } = props

    function event(){
        Cookies.set(name, 'ok', { expires: 365 })
        const gdprCookie = document.getElementById('gdpr_cookie')!
        gdprCookie.style.display = "none"
    }

    function crossEvent(){
        const gdprCookie = document.getElementById('gdpr_cookie')!
        gdprCookie.style.display = "none"
    }

    useEffect(() => {
        const text_area:any = document.querySelector('.text_area')!
        text_area.innerHTML = text
    },[])

    return (
        <>
        <div className={style.adjust}>
            <div className={style.block}>
                <p className={`${style.text} text_area`} style={{color: contrarian}}></p>
                <button className={style.button} style={{background: contrarian, color: propagation}} onClick={() => event()}>{button}</button>
            </div>
            <span className={style.cross} onClick={() => crossEvent()}></span>
        </div>
        </>
    )
}
