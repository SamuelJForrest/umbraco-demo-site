import '../../sass/vendor/_gridstack.scss';
import { GridStack } from "../../node_modules/gridstack/dist/gridstack";

let grid = GridStack.init({
    removable: true
});

const gridTray = document.querySelector('.grid-tray');
const gridTrayToggle = document.querySelector('.gridTrayToggle') as HTMLButtonElement;

const toggleGridTray = () => {
    if (gridTray && gridTrayToggle) {
        if (gridTray.classList.contains('__active')) {
            gridTray.classList.remove('__active');
            gridTrayToggle.textContent = "Open tray";
        } else {
            gridTray.classList.add('__active');
            gridTrayToggle.textContent = "Close tray";
        }
    }
}

gridTrayToggle?.addEventListener('click', toggleGridTray);