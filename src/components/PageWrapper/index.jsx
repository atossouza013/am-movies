import { useEffect, useState } from "react"
import { Wrapper } from "./styles"

function PageWrapper({ children }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 50)

    return () => clearTimeout(timeout)
  }, [])

  return <Wrapper $visible={visible}>{children}</Wrapper>
}

export default PageWrapper