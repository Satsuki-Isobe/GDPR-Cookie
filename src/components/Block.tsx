import React, { FC, ReactNode, useEffect } from 'react'
import '../styles/gdpr.scss'
import Cookies from 'js-cookie'

type Props = {
    text: ReactNode; 
    button: string | undefined;
    name: string | undefined;
}

export const Block: FC<Props> = (props) => {
    const { text = "Cookieを利用してもよろしいですか。", button = "許可する", name = "gdpr_cookie" } = props

    function event(){
        Cookies.set(name, 'ok', { expires: 365 })
        const gdprCookie = document.getElementById('gdpr_cookie')!
        const child = gdprCookie.children
        child[0].style.opacity = "0"
        child[0].style.transform = "translateY(100%)"

    }

    function crossEvent(){
        const gdprCookie = document.getElementById('gdpr_cookie')!
        const child = gdprCookie.children
        child[0].style.opacity = "0"
        child[0].style.transform = "translateY(100%)"
    }

    useEffect(() => {
        const text_area:any = document.querySelector('.text_area')!
        text_area.innerHTML = text
    },[])

    return (
        <>
        <div className={`gdpr_adjust`}>
            <div className={`gdpr_block`}>
                <p className={`gdpr_text text_area`}></p>
                <button className={`gdpr_button`} onClick={() => event()}>{button}</button>
            </div>
            <span className={`gdpr_cross`} onClick={() => crossEvent()}></span>
        </div>
        </>
    )
}
