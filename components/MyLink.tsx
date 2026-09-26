import { IconType } from "react-icons"
import { useTranslate } from "../lib/i18n"

interface Props {
  name: string
  border?: boolean
  Icon: IconType
  url: string
  download?: boolean
}

export default function MyLink({ name, Icon, border, url, download }: Props) {
  const t = useTranslate()

  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={url}
      download={download ? true : undefined}
      className={`w-full ${
        border ? "vCustomLine relative before:right-0" : ""
      } h-full flex justify-center items-center gap-4 text-xl text-gray-600 font-semibold uppercase cursor-pointer group`}
    >
      <span className="group-hover:mx-2 group-hover:text-main-orange transition-all duration-300">
        {t(name)}
      </span>
      <Icon className="text-3xl group-hover:text-main-orange transition-all duration-300" />
    </a>
  )
}
