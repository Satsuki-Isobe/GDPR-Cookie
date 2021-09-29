import { FC } from 'react'
import style from '../styles/style.module.css'
import Cookies from 'js-cookie'

type Props = {
    propagation: string;
    contrarian: string;
    text: string; 
    button: string;
}

export const Block: FC<Props> = (props) => {
    const { propagation, contrarian, text, button } = props

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
