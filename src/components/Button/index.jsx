import { MainButton } from "./styles"

function Button({children, theme, ...rest}){
     return <MainButton theme={theme} {...rest}>{children}</MainButton>
}

export default Button