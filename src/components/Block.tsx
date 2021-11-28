import React, { FC, ReactNode, useEffect } from 'react'
import '../styles/gdpr.scss'
import Cookies from 'js-cookie'

type Props = {
    text: ReactNode; 
    allowButton: string | undefined;
    refuseButton: string | undefined;
    name: string | undefined;
}

export const Block: FC<Props> = (props) => {
    const { text = "Cookieを利用してもよろしいですか。", allowButton = "許可する", refuseButton = "拒否する", name = "gdpr_cookie" } = props

    function event(){
        Cookies.set(name, 'ok', { expires: 365 })
        const gdprCookie = document.getElementById('gdpr_cookie')!
        const child = gdprCookie.children
        child[0].style.opacity = "0"
        child[0].style.transform = "translateY(100%)"

    }

    function refuseEvent(){
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
                <div className={`gdpr_buttons`}>
                    <button className={`gdpr_button gdpr_allow_button`} onClick={() => event()}>{allowButton}</button>
                    <button className={`gdpr_button gdpr_refuse_button`} onClick={() => refuseEvent()}>{refuseButton}</button>
                </div>
            </div>
        </div>
        </>
    )
}
