import { useEffect, useRef, useState } from "react"
import { Wrapper } from "./styles"

function RevealOnScroll({ children }) {
  const ref = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2

       }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <Wrapper ref={ref} $visible={isVisible}>
      {children}
    </Wrapper>
  )
}

export default RevealOnScroll