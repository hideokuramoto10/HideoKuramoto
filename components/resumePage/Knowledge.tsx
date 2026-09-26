import { BsCheckCircleFill } from "react-icons/bs"
import { useTranslate } from "../../lib/i18n"

interface Props {
  knowledge: string[]
}

export default function Knowledge({ knowledge }: Props) {
  const t = useTranslate()

  return (
    <div className="grid grid-cols-1 gap-3">
      {knowledge.map((k, idx) => (
        <div key={idx} className="flex gap-3 items-start">
          <BsCheckCircleFill className="text-main-orange text-[1.6rem] flex-shrink-0 mt-1" />
          <span className="text-gray-700 text-[1.6rem] leading-relaxed">{t(k)}</span>
        </div>
      ))}
    </div>
  )
}
