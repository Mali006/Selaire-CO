import "@testing-library/jest-dom/vitest";

// Browser APIs the site uses that jsdom doesn't provide
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = IntersectionObserverStub;

window.matchMedia ??= (query) => ({
  matches: false,
  media: query,
  addEventListener() {},
  removeEventListener() {},
});

Element.prototype.scrollIntoView ??= function scrollIntoView() {};
