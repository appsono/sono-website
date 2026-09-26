const pending = new Set();

function revealUpTo(target) {
  for (const el of pending) {
    if (
      el === target ||
      el.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING
    ) {
      el.classList.add("revealed");
      pending.delete(el);
      observer.unobserve(el);
    }
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) revealUpTo(entry.target);
    }
  },
  { rootMargin: "0px 0px -10% 0px" },
);

export default {
  mounted(el) {
    el.classList.add("reveal");
    pending.add(el);
    observer.observe(el);
  },
  unmounted(el) {
    pending.delete(el);
    observer.unobserve(el);
  },
};
