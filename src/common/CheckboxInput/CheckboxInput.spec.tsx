import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CheckboxInput } from '.';

describe('<CheckboxInput />', () => {
  it('should render correctly', () => {
    render(<CheckboxInput />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should checked when click', () => {
    render(<CheckboxInput />);

    const checkbox = screen.getByRole('checkbox');

    expect(checkbox).not.toBeChecked();

    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it('should call onChange when click', () => {
    const onChange = jest.fn();

    render(<CheckboxInput onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

});







