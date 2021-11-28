
import Cookies from 'js-cookie'
import React, { FC, ReactNode, useLayoutEffect, useState } from 'react';
import {Block} from './components/Block';
import './styles/gdpr.scss'

const App: FC<ReactNode> = ({children}) => {

  const [allowButton, setAllowButton] = useState<string | undefined>()
  const [refuseButton, setRefuseButton] = useState<string | undefined>()
  const [name, setName] = useState<string>()

  function checkCookie(name:string){
    const getCookie = Cookies.get(name)
    const gdprCookie = document.getElementById('gdpr_cookie')
    if(!gdprCookie){
      throw new Error("HTMLにid=\"gdpr_cookie\"を含む記述がありません。")
    }
    const child: HTMLCollection = gdprCookie.children

    if(!getCookie){
      const getAllowButton = gdprCookie.getAttribute('allowButton')?.toString()
      const getRefuseButton = gdprCookie.getAttribute('refuseButton')?.toString()

      if(!getAllowButton){
        throw new Error("HTMLにallowButtonプロパティがありません。ボタンに適用する好きな文字列を値として付与してください。")
      }
      if(!getRefuseButton){
        throw new Error("HTMLにrefuseButtonプロパティがありません。ボタンに適用する好きな文字列を値として付与してください。")
      }

      setAllowButton(getAllowButton)
      setRefuseButton(getRefuseButton)
      setTimeout(() => {
        child[0].style.transform = "translateY(0)"
        child[0].style.opacity = "1"
      }, 1000)
      return
    }
    child[0].style.opacity = "0"
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
    <div className={`gdpr_background`}>
      <Block text={children} allowButton={allowButton} refuseButton={refuseButton} name={name} />
    </div>
  </>
  );
}

export default App;
