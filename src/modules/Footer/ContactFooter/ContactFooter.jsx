import { IconMail, IconMapPin, IconPhoneFilled } from "@tabler/icons-react"
import { useSelector } from "react-redux"

export default function ContactFooter() {
  const { contact } = useSelector((state) => state.translations.translations)
  return (
    <div className="flex flex-col gap-4 flex-1">
      <h1 className="font-semibold text-lg">
        {contact}
      </h1>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex gap-2 items-center">
          <p><IconPhoneFilled size={15} /></p>
          <p>619-393-4981 ext. 101</p>
        </div>
        <div className="flex gap-2 items-center">
          <p><IconMail size={15} /></p>
          <p>Invest@AtlasLPS.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <p><IconMapPin size={15} /></p>
          <p>501 West Broadway, Suite 800, San Diego, CA92101</p>
        </div>
      </div>
    </div>
  )
}
