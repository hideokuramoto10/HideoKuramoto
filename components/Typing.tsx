import Typewriter from "typewriter-effect"
import { useTranslate } from "../lib/i18n"
import { useReactiveVar } from "../hooks/useReactiveVar"
import { languageVar } from "../store"

export default function Typing() {
  const t = useTranslate()
  const language = useReactiveVar(languageVar)

  return (
    <div className="text-center h-8">
      <Typewriter
        key={language}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">${t("Senior AI Engineer")}</span>`
            )
            .pauseFor(3500)
            .deleteAll(50)
            .typeString(
              `<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">${t("Full Stack Developer")}</span>`
            )
            .pauseFor(3500)
            .deleteAll(50)
            .typeString(
              `<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">${t("LLM & RAG Specialist")}</span>`
            )
            .pauseFor(3500)
            .deleteAll(50)
            .typeString(
              `<span style="color: #f59e0b; font-size: 14px; font-weight: 400;">${t("Freelancer")}</span>`
            )
            .pauseFor(3500)
            .deleteAll(50)
            .start()
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
          delay: 17,
        }}
      />
    </div>
  )
}
