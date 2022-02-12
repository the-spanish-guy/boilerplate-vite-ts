import { FC, ReactElement } from 'react'
import { Helmet } from 'react-helmet'

type LayoutType = {
  title: string
}

const LayoutComponent: FC<LayoutType> = ({ title, children }): ReactElement => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  )
}

export default LayoutComponent
