import { MenuData } from "../types"
import { useTranslate } from "../lib/i18n"

interface Props {
  menu: MenuData
  active: boolean
  onClick: () => void
  last: boolean
}

export default function SideMenuBtn({ menu, active, onClick, last }: Props) {
  const t = useTranslate()
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full py-8 pl-14 hover:bg-gray-50 transition-all duration-300 ${
        active ? "text-main-orange" : "text-gray-600"
      } text-2xl gap-6 border-0 ${
        last ? "border-b" : ""
      } border-t border-gray-100 border-solid capitalize font-medium`}
    >
      <menu.Icon />
      {t(menu.label)}
    </button>
  )
}
