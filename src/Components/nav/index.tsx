import { FC } from "react"
import { NavContainer, NavIcon, NavTitle, NavWrapper } from "./style"

const Nav:FC = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavIcon><i className="fa-solid fa-ellipsis"></i></NavIcon>
        <NavTitle>Plotter</NavTitle>
      </NavWrapper>
    </NavContainer>
  )
}

export default Nav
