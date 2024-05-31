import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Loader } from '../Loader';

describe('Loader component', () => {
  it('shows CircularProgress when loading is true', () => {
    render(<Loader loading={true} />);
    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });

  it('hides CircularProgress when loading is false', () => {
    render(<Loader loading={false} />);
    const circularProgress = screen.queryByRole('progressbar');
    expect(circularProgress).not.toBeInTheDocument();
  });

  it('applies the correct size to CircularProgress', () => {
    const size = 40;
    render(<Loader loading={true} size={size} />);
    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toHaveAttribute('style', expect.stringContaining(`width: ${size}px`));
  });
});
