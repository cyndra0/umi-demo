import React from 'react'
import ProLayout, { PageContainer } from '@ant-design/pro-layout'
import { IRouteComponentProps, Route } from 'umi'
const LAYOUT_TITLE = 'title'

const BasicLayout = ({ children, ...otherProps }: IRouteComponentProps) => {
  console.log(otherProps.route)
  return (
    <ProLayout
      style={{ height: '100vh'}}
      title={LAYOUT_TITLE}
      headerHeight={80}
      {...otherProps}
      headerContentRender={() => 'breadcrumb here.'}
    >
      {children}
    </ProLayout>
  )
}

export default BasicLayout