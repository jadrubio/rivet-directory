import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TopBar } from '../TopBar';

describe('TopBar component', () => {
  it('contains the welcome message', () => {
    render(<TopBar />);
    const welcomeMessage = screen.getByText('Welcome to Rivet');
    expect(welcomeMessage).toBeInTheDocument();
  });

  it('contains the add button', () => {
    render(<TopBar />);
    const addButton = screen.getByText('➕');
    expect(addButton).toBeInTheDocument();
  });

  it('clicking the add button triggers console log', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<TopBar />);
    const addButton = screen.getByText('➕');
    fireEvent.click(addButton);
    expect(consoleSpy).toHaveBeenCalledWith('Should add another profile!');
    consoleSpy.mockRestore(); // Clean up the spy
  });
});
