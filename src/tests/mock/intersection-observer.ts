const mockIntersectionObserver = function () {
  return {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
};

window.IntersectionObserver = mockIntersectionObserver as unknown as typeof window.IntersectionObserver;

export {};
