
import Cookies from 'js-cookie'
import React, { FC, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import {Block} from './components/Block';
import style from './styles/style.module.css';
import './styles/gdpr.css'

const App: FC<ReactNode> = ({children}) => {

  const [mode, setMode] = useState<string>()
  const [position, setPosition] = useState<string>()
  const [button, setButton] = useState<string | undefined>()
  const [name, setName] = useState<string>()

  const propagation: string = mode === "white" ? "#fffffff2" : "#000000f2"
  const contrarian: string  = mode === "white" ? "#000000f2" : "#fffffff2"

  function checkCookie(name:string){
    const getCookie = Cookies.get(name)

    if(!getCookie){
      const gdprCookie = document.getElementById('gdpr_cookie')!

      const getMode = gdprCookie.getAttribute('mode')?.toString()
      const getPosition = gdprCookie.getAttribute('position')?.toString()
      const getButton = gdprCookie.getAttribute('button')?.toString()

      if(!(getMode === "white" || getMode === "black")){
        throw new Error("HTMLにmodeプロパティがありません。もしくはwhite/blackの値を正しく付与してください。")
      }
      if(!(getPosition === "top" || getPosition === "bottom")){
        throw new Error("HTMLにpositionプロパティがありません。もしくはtop/bottomの値を正しく付与してください。")
      }
      if(!getButton){
        throw new Error("HTMLにbuttonプロパティがありません。ボタンに適用する好きな文字列を値として付与してください。")
      }

      setMode(getMode)
      setPosition(getPosition)
      setButton(getButton)
      gdprCookie.style.display = "block"
    }
  }

  useLayoutEffect(() => {
    const gdprCookie = document.getElementById('gdpr_cookie')!
    const getName = gdprCookie.getAttribute('name')?.toString()!
    if(!getName){
      throw new Error("HTMLにnameプロパティがありません。Cookieのnameに適用する好きな文字列を値として付与してください。")
    }
    setName(getName)
    checkCookie(getName)
  })

  return (
  <>
    {position === "top" ?
      <div className={style.background} style={{background: propagation}}>
        <Block propagation={propagation} contrarian={contrarian} text={children} button={button} name={name} />
      </div>
     :
      <div className={style.background} style={{background: propagation}}>
        <Block propagation={propagation} contrarian={contrarian} text={children} button={button} name={name} />
      </div>
     }
  </>
  );
}

export default App;
