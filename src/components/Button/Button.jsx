import { Icon } from "@/components"

import "./Button.scss"
import classNames from "classnames"

export const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    /**
     * '' (default) | 'transparent'
     */
    mode = "",
    label,
    isLabelVisible = false,
    iconName,
    /**
     * 'before' | 'after'
     */
    iconPosition = "before",
    hasFillIcon,
  } = props

  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelVisible ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelVisible && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}
