import classNames from "classnames"
import "./Grid.scss"

export const Grid = (props) => {
  const { columns = 1, children, className } = props

  return (
    <ul
      className={classNames("grid", className, {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
