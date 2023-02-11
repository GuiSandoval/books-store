import { render, fireEvent } from "@testing-library/react"
import { Carousel } from ".";

const items = Array.from({ length: 1000 }, (_, i) => i);

const Component = () => {
  return (
    <Carousel>
      {items.map((item) => (
        <div className="mock-carousel" key={item} style={{ width: "4000px" }}>{item}</div>
      ))}
    </Carousel>
  )
};

describe("<Carousel />", () => {

  it("should render correctly", () => {
    const { container, getByText } = render(<Carousel>Olá Mundo</Carousel>);
    expect(container).toBeInTheDocument()
    expect(getByText("Olá Mundo")).toBeInTheDocument();
  });

  it("should render children correctly", () => {
    const { container } = render(<Component />);
    expect(container).toBeInTheDocument()
    expect(container.getElementsByClassName("mock-carousel").length).toBe(1000);
  });

  it("should scroll to the left", () => {

    const { container, getByTestId } = render(<Component />);

    const areaCarousel = getByTestId("area-carousel");
    const leftArrow = getByTestId("left-arrow-carousel");

    fireEvent.click(leftArrow);

    expect(areaCarousel.scrollLeft).toBe(0);
  });

  it("should scroll to the right", () => {
    const { container, getByTestId, rerender } = render(<Component />);
    rerender(<Component />)

    const areaCarousel = getByTestId("area-carousel");
    const rightArrow = getByTestId("right-arrow-carousel");

    fireEvent.click(rightArrow);

    expect(areaCarousel.scrollLeft).toBe(areaCarousel.offsetWidth);
  })

});
