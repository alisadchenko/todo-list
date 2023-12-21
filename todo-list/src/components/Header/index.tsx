import "./index.scss"
import { LOGO } from "../../theme/sources"
import { Button } from "../index"

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img 
          src={LOGO}
          alt=""
          className="logo"
        />
        <span>
          {"ToDo List"}
        </span>
      </div>
      <div className="right">
        <Button onClick={() => {}}>
          Log in
        </Button>
        <Button onClick={() => {}}>
          Sign Up
        </Button>
      </div>
    </div>
  )
}

export default Header
