import { render, screen } from "@testing-library/react"
import * as React from "react"
import Home from "../App"

vi.mock("../components/home/hero", () => ({ default: () => <div data-testid="hero" /> }))
vi.mock("../components/features", () => ({ default: () => <div data-testid="features" /> }))
vi.mock("../components/projects", () => ({ TestimonialsSection: () => <div data-testid="testimonials" /> }))
vi.mock("../components/contact", () => ({ NewReleasePromo: () => <div data-testid="contact" /> }))
vi.mock("../components/sticky-footer", () => ({ StickyFooter: () => <div data-testid="footer" /> }))

describe("Home basic test", () => {
  test("renders all sections", () => {
    render(<Home />)
    expect(screen.getByTestId("hero")).toBeInTheDocument()
    expect(screen.getByTestId("features")).toBeInTheDocument()
    expect(screen.getByTestId("testimonials")).toBeInTheDocument()
    expect(screen.getByTestId("contact")).toBeInTheDocument()
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
})