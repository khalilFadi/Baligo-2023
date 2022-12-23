import '../Styles/MainMenu.css';
import menuIcon from '../Images/menuIcon.png';

const showMenu = () => {
  const f = document.getElementById('MenuOutline');
  const menuHidingOffset = f.offsetWidth;
  //Check the offsets change
  // console.log(f.offsetLeft, "OffsetLeft", f.offsetWidth, "offsetWidth", f.offsetParent, "offsetParent", f.offsetTop, "offsetTtop");
  f.style.transform = 'translateX(0px)';
}

const hideMenu = () => {
  const f = document.getElementById('MenuOutline');
  const menuHidingOffset = f.offsetWidth;
  f.style.transform = `translateX(-${menuHidingOffset}px)`;
}

const MainMenu = () => {
    return( 
    <div>
    <div class="MainMenu">
        <button onMouseOver={showMenu} class="MainButton"></button>
    </div>
  <div onMouseLeave={hideMenu} class="MenuOutline" id="MenuOutline"></div>
  </div>
);
}

export default MainMenu; 