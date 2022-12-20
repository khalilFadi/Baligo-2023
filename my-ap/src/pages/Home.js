
import '../Theme/ThemeColors.css';
import '../Styles/Mainblob.css';
import '../Styles/Home.css';
import BackgrundEffectShapes from '../Components/Home/backgroundEffect.js';
const Home = () => {
    return(
        <body class="Home">
            <div class="blob"></div>
            <h1 class="title">Baligo</h1>
            
            <BackgrundEffectShapes/>
        </body>
    );
}
export default Home;