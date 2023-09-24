import { createApp } from 'vue'

import './styles/style.css'
import './styles/icon-config.css'
import router from './router'
import App from './App.vue'
// Base Components:
import BaseButton from './components/BaseButton.vue'
import BaseLogo from './components/BaseLogo.vue';
import BaseAvatarInfo from './components/BaseAvatarInfo.vue';
import BaseLikeCommentCounter from './components/BaseLikeCommentCounter.vue';
import BaseRating from './components/BaseRating.vue';
import BaseChip from './components/BaseChip.vue';
import BaseLinkText from './components/BaseLinkText.vue';
// form
import BaseSelect from './components/form/BaseSelect.vue';
import BaseInput from './components/form/BaseInput.vue';

const app = createApp(App);

app.use(router);
app.component('BaseButton', BaseButton);
app.component('BaseLogo', BaseLogo);
app.component('BaseAvatarInfo', BaseAvatarInfo);
app.component('BaseLikeCommentCounter', BaseLikeCommentCounter);
app.component('BaseRating', BaseRating);
app.component('BaseChip', BaseChip);
app.component('BaseLinkText', BaseLinkText);
app.component('BaseSelect', BaseSelect);
app.component('BaseInput', BaseInput);

app.mount('#app');