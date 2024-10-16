import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'; // Importez le fichier CSS ici


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://use.typekit.net/zqs1zmf.css';
document.head.appendChild(link);


createApp(App).mount('#app')
