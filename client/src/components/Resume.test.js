import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Resume from './Resume';
import { jsPDF } from 'jspdf';

jest.mock('jspdf', () => ({
  __esModule: true,
  jsPDF: jest.fn().mockImplementation(function () {
    this.internal = {
      pageSize: {
        getWidth: () => 595.28,
        getHeight: () => 841.89,
      },
    };
    this.setFont = jest.fn();
    this.setFontSize = jest.fn();
    this.text = jest.fn();
    this.splitTextToSize = jest.fn((text) => [text]);
    this.addPage = jest.fn();
    this.save = jest.fn();
    return this;
  }),
}));

beforeAll(() => {
  class MockIntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }

    observe() {}
    unobserve() {}
    disconnect() {}
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });

  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
});

describe('Resume', () => {
  it('generates a professional PDF resume when download is clicked', () => {
    render(<Resume />);

    fireEvent.click(screen.getByRole('button', { name: /download resume/i }));

    expect(jsPDF).toHaveBeenCalled();
  });
});
