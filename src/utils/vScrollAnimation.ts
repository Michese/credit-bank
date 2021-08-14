export default {
  mounted: function (el: HTMLElement, binding: { value: () => void }): void {
    const animatedScrollObserver = new IntersectionObserver(
      (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            binding.value();
            animatedScrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
    );
    animatedScrollObserver.observe(el);
  },
};
