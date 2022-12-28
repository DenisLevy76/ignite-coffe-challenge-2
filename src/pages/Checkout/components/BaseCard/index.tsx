import { BaseCard } from './styles'

import { ReactNode } from 'react'

export interface BaseCardComponentProps {
  title: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
}

export const BaseCardComponent: React.FC<BaseCardComponentProps> = ({
  icon,
  description,
  title,
  children,
}) => {
  return (
    <BaseCard>
      <header className="title">
        {icon}
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </header>
      <div className="inputs">{children}</div>
    </BaseCard>
  )
}
