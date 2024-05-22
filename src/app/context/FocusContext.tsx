import React from "react"

// @ts-expect-error
const FocusContext = React.createContext()

export const FocusProvider = ({ children }: any) => {
  const inputRef = React.useRef(null)

  return (
    <FocusContext.Provider value={inputRef}>{children}</FocusContext.Provider>
  )
}

export const useFocus = () => React.useContext(FocusContext)
