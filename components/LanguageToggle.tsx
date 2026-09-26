import { languageVar } from "../store"
import { useReactiveVar } from "../hooks/useReactiveVar"

interface Props {
  className?: string
}

export default function LanguageToggle({ className = "" }: Props) {
  const language = useReactiveVar(languageVar)

  return (
    <button
      type="button"
      onClick={() => languageVar.set(language === "en" ? "ja" : "en")}
      aria-label={`Switch to ${language === "en" ? "Japanese" : "English"}`}
      title={`Switch to ${language === "en" ? "Japanese" : "English"}`}
      className={className}
    >
      {language === "ja" ? "英語" : "JAPANESE"}
    </button>
  )
}