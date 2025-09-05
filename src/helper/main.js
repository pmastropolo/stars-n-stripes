export async function hoverTextAnimation(element) {
  // Skip heavy text-splitting logic on small screens to avoid
  // unnecessary layout work during initial load.
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  if (isMobile) return;

  const { default: SplitType } = await import("split-type");

  const isBlackText = element.classList.contains("black");
  const isWhiteText = element.classList.contains("white");
  const splitType = "words chars";

  const textColorClass = isBlackText
    ? "menu-text black"
    : isWhiteText
    ? "menu-text white"
    : "menu-text";

  new SplitType(element, {
    types: splitType,
    wordClass: textColorClass,
  });
}

export function pageScrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "auto",
  });
}
