import "./styles.css";
import Header from './component/header'
import './component/header.css'
import Footer from './component/footer'
import './component/footer.css'
import Main from './main/card'
import './main/card.css'

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}