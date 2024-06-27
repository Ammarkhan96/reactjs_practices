import { Trans ,useTranslation } from 'react-i18next'
import LanguageSelector from './components/language-selector'
import './App.css'

function App() {
  const {t} = useTranslation()

  const {line1, line2} = t("description")

  return (
    <div className='container'>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
      <Trans
      i18nKey={line1}
      values={{
        channel: "Javascript"
      }}
      components={{1: <b />}}
      />
      </span>
      {/* <p>{line1}</p> */}
      <span>{line2}</span>
    </div>
  )
}

export default App
