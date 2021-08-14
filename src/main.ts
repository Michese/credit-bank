import '@/styles/index.scss';
import { createApp, Directive } from 'vue';
import App from '@/App.vue';
import ScrollAnimation from '@/utils/vScrollAnimation';
import BodyOverflow from '@/utils/vBodyOverflow';

const app = createApp(App);
app.directive('scrollanimation', ScrollAnimation as Directive);
app.directive('bodyoverflow', BodyOverflow as Directive);
app.mount('#app');
