import { Section } from "@/layouts"
import { CategoryCard, Slider } from "@/components"
import { SliderNavigation } from "@/components/Slider"

import {categoryItems} from "./categoryItems"

export const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation"

  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={<SliderNavigation mode="tile" id={sliderNavigationId} />}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  )
}
