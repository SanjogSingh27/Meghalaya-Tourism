import '@/styles/global.css';
import 'leaflet/dist/leaflet.css'; // This line is crucial for the map styles

function MyApp({ Component, pageProps }) {
  // FIX: Corrected 'page_props' to 'pageProps'
  return <Component {...pageProps} />;
}

export default MyApp;

