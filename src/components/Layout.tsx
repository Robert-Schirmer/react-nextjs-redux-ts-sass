import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {

  return (
    <div className='root'>
      {children}
    </div>
  )
}

export default Layout
