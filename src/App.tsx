
import Cookies from 'js-cookie'
import React, { FC, ReactNode, useLayoutEffect, useState } from 'react';
import {Block} from './components/Block';
import './styles/gdpr.scss'

const App: FC<ReactNode> = ({children}) => {

  const [position, setPosition] = useState<string>()
  const [button, setButton] = useState<string | undefined>()
  const [name, setName] = useState<string>()

  function checkCookie(name:string){
    const getCookie = Cookies.get(name)
    const gdprCookie = document.getElementById('gdpr_cookie')
    if(!gdprCookie){
      throw new Error("HTMLにid=\"gdpr_cookie\"を含む記述がありません。")
    }
    const child: HTMLCollection = gdprCookie.children

    if(!getCookie){
      const getMode = gdprCookie.getAttribute('mode')?.toString()
      const getPosition = gdprCookie.getAttribute('position')?.toString()
      const getButton = gdprCookie.getAttribute('button')?.toString()
      const crossButton = gdprCookie.querySelector('span')!
      const getCross = () => {
        const cross = gdprCookie.getAttribute('cross')?.toString()
        if(cross === "false"){
          return false
        }
        return true
      }

      if(!(getPosition === "top" || getPosition === "bottom")){
        throw new Error("HTMLにpositionプロパティがありません。もしくはtop/bottomの値を正しく付与してください。")
      }
      if(!getButton){
        throw new Error("HTMLにbuttonプロパティがありません。ボタンに適用する好きな文字列を値として付与してください。")
      }
      if(!getCross()){
        crossButton.style.display = "none"
      }

      setPosition(getPosition)
      setButton(getButton)
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
    {position === "top" ?
      <div className={`gdpr_background`}>
        <Block text={children} button={button} name={name} />
      </div>
     :
      <div className={`gdpr_background`}>
        <Block text={children} button={button} name={name} />
      </div>
     }
  </>
  );
}

export default App;
