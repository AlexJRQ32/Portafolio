import './ProjectMockup.css'
import { Motorcycle } from '@phosphor-icons/react'
import flowbankShot from '../../../assets/flowbank-shot.png'
import openpawShot from '../../../assets/openpaw-shot.png'

const MOCKUP_DATA = {
  FlowBank: {
    screenshot: flowbankShot,
    url: 'flowbank-three.vercel.app',
  },
  OpenPaw: {
    screenshot: openpawShot,
    url: 'openpaw-devs.vercel.app',
  },
  RappiDoz: {
    screenshot: null,
    url: null,
  },
}

export function ProjectMockup({ title }) {
  const data = MOCKUP_DATA[title] || MOCKUP_DATA.RappiDoz

  return (
    <figure className="project-mockup">
      <div className="mockup-viewport">
        {data.screenshot ? (
          <img src={data.screenshot} alt={`${title} screenshot`} className="mockup-screenshot" />
        ) : (
          <div className="mockup-placeholder">
            <Motorcycle size={40} weight="fill" />
            <span>{title}</span>
          </div>
        )}
      </div>
      <figcaption className="mockup-caption">
        {data.url ? data.url : "Systems Design course project"}
      </figcaption>
    </figure>
  )
}
