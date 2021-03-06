export default {
  mounted(el: HTMLElement, { value }: { value: () => void }): void {
    console.log(12);
    el.addEventListener('click', (event) => event.stopPropagation());
    document.body.addEventListener('click', value);
  },
  unmounted(el: HTMLElement, { value }: { value: () => void }): void {
    document.body.removeEventListener('click', value);
  },
};
