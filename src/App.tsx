
import style from './styles/style.module.css';
import Cookies from 'js-cookie'
import { FC, useEffect, useState } from 'react';
import {Block} from './components/Block';

const App: FC = () => {

  type Basic = {
    mode: string;
    position: string;
    text: string;
    button: string;
  }

  const [basic, setBasic] =  useState<Basic>({
    mode: "white",
    position: "top",
    text: "テキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリアテキストエリア",
    button: "同意して閉じる"
  })

  const propagation: string = basic.mode === "white" ? "#fffffff2" : "#000000f2"
  const contrarian: string  = basic.mode === "white" ? "#000000f2" : "#fffffff2"

  function checkCookie(){
    const getCookie = Cookies.get('name')

    if(!getCookie){
      const gdprCookie = document.getElementById('gdpr_cookie')!
      gdprCookie.style.display = "block"
    }
  }

  useEffect(() => {
    checkCookie()
  })

  return (
  <>
    {basic.position === "top" ?
      <div className={style.background} style={{background: propagation, top: "8px"}}>
        <Block propagation={propagation} contrarian={contrarian} text={basic.text} button={basic.button} />
      </div>
     :
      <div className={style.background} style={{background: propagation, bottom: "8px"}}>
        <Block propagation={propagation} contrarian={contrarian} text={basic.text} button={basic.button} />
      </div>
     }
  </>
  );
}

export default App;
