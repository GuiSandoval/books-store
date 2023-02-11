import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxInput } from '.';

describe('<CheckboxInput />', () => {
  it('should render correctly', () => {
    render(<CheckboxInput />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render correctly with label', () => {
    render(<CheckboxInput labelText="CheckboxTestLabel" />);

    expect(screen.getByText('CheckboxTestLabel')).toBeInTheDocument();
  });

  it('should checked when click', () => {
    render(<CheckboxInput />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should not checked when click', () => {
    render(<CheckboxInput defaultChecked={true} />);
    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });

  it('should call onChange when click', () => {
    const onChange = jest.fn();

    render(<CheckboxInput onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

});







