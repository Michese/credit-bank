import '@/styles/index.scss';
import { createApp, Directive } from 'vue';
import App from '@/App.vue';
import ScrollAnimation from '@/utils/vScrollAnimation';
import BodyOverflow from '@/utils/vBodyOverflow';
import vClickOutside from '@/utils/vClickOutside';

const app = createApp(App);
app.directive('scrollanimation', ScrollAnimation as Directive);
app.directive('bodyoverflow', BodyOverflow as Directive);
app.directive('clickoutside', vClickOutside as Directive);
app.mount('#app');
