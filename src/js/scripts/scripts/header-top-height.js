/** @type {HTMLElement} */
const header = document.querySelector(".header");
/** @type {HTMLDivElement} */
const headerTop = document.querySelector(".header-top");

if (header && headerTop) {
  const headerTopResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      /** @type { { target: HTMLElement; borderBoxSize: [ { blockSize: number } ] } } */
      const { target, borderBoxSize: [{ blockSize }] } = entry;

      header.style.setProperty("--header-top-height", `${blockSize + 1}px`);
    });
  });

  headerTopResizeObserver.observe(headerTop);
}
