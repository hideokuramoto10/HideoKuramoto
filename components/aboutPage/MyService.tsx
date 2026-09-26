import { IconType } from "react-icons"
import MyIcon from "../MyIcon"
import { useTranslate } from "../../lib/i18n"

interface Props {
  name: string
  border: boolean
  desc: string
  Icon: IconType
  last: boolean
}

export default function MyService({ name, Icon, border, desc, last }: Props) {
  const t = useTranslate()

  return (
    <li
      className={`customLine before:bottom-0 relative borderLeft ${
        border
          ? "before:block"
          : `sm:before:hidden ${last ? "before:hidden" : "before:block"}`
      }`}
    >
      <div className="py-10 px-12">
        <MyIcon Icon={Icon} />
        <h2 className="capitalize text-[1.6rem] text-gray-800 font-semibold pb-2 pt-4">
          {t(name)}
        </h2>
        <p className="text-2xl text-gray-500 leading-[1.8] tracking-wide">
          {t(desc)}
        </p>
      </div>
    </li>
  )
}
