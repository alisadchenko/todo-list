import "./index.scss"

interface ButtonProps {
  children: any
  onClick: () => void
}

const Button = ({
  children,
  onClick
}: ButtonProps) => {
  return (
    <button
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
