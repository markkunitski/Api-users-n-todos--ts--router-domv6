import React, { FC, PropsWithChildren, useState } from 'react'

export enum CardVariants {
  outlined = 'outlined',
  primary = 'primary'
}
interface CardProps {
  width: string;
  height: string;
  variant: CardVariants;
  onClick: (num: number) => void
}

const Card: FC<PropsWithChildren<CardProps>> = ({ width, height, children, variant, onClick }) => {
  const [num, setNum] = useState(5)
  return (<div onClick={() => onClick(num)} style={{
    width, height,
    background: variant === CardVariants.primary ? 'lightgray' : '',
    border: variant === CardVariants.outlined ? '2px solid gray' : ''
  }}>
    {children}
  </div>

  )
}




export default Card