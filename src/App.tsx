
import Cookies from 'js-cookie'
import React, { FC, ReactNode, useEffect, useState } from 'react';
import {Block} from './components/Block';
import style from './styles/style.module.css';
import './styles/gdpr.css'

const App: FC<ReactNode> = ({children}) => {

  const [mode, setMode] = useState<string>()
  const [position, setPosition] = useState<string>()
  const [button, setButton] = useState<string | undefined>()

  const propagation: string = mode === "white" ? "#fffffff2" : "#000000f2"
  const contrarian: string  = mode === "white" ? "#000000f2" : "#fffffff2"

  function checkCookie(){
    const getCookie = Cookies.get('name')

    if(!getCookie){
      const gdprCookie = document.getElementById('gdpr_cookie')!
      gdprCookie.style.display = "block"

      const getMode = gdprCookie.getAttribute('mode')?.toString()
      const getPosition = gdprCookie.getAttribute('position')?.toString()

      const getButton = gdprCookie.getAttribute('button')?.toString()

      setMode(getMode)
      setPosition(getPosition)
      setButton(getButton)
    }
  }

  useEffect(() => {
    checkCookie()
  })

  return (
  <>
    {position === "top" ?
      <div className={style.background} style={{background: propagation, top: "8px"}}>
        <Block propagation={propagation} contrarian={contrarian} text={children} button={button} />
      </div>
     :
      <div className={style.background} style={{background: propagation, bottom: "8px"}}>
        <Block propagation={propagation} contrarian={contrarian} text={children} button={button} />
      </div>
     }
  </>
  );
}

export default App;
