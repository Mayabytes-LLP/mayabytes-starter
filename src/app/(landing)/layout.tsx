import React from "react"

import Header from "../_components/header"

interface LandingLayoutProps {
  children: React.ReactNode
}

export function LandingLayout({ children, ...props }: LandingLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
