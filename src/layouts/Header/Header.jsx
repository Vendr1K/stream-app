import { Button, Logo } from "@/components"
import "./Header.scss"
import classNames from "classnames"

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies & Shows",
    href: "/movies",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
  },
]

export const Header = (props) => {
  const { url } = props

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={classNames("header__menu-link", {
                    "is-active": href === url,
                  })}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button
            className="header__button"
            label="Search"
            isLabelVisible
            mode="transparent"
            iconName="search"
          />
          <Button
            className="header__button"
            label="Notifications"
            isLabelVisible
            mode="transparent"
            iconName="notification"
          />
        </div>
      </div>
    </header>
  )
}
