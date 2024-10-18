import '../../sass/vendor/_gridstack.scss';
import { GridStack, GridStackOptions, GridStackWidget } from "gridstack";
import { commentaryWidget, fixturesWidget, standingsWidget } from '../widgets/opta';

let grid = GridStack.init({
    removable: '.grid-tray-trash',
    acceptWidgets: function(el) { return true },
});

let serializedGridData;

const savedGridData = sessionStorage.getItem('gridData');

if (savedGridData) {
    try {
        serializedGridData = JSON.parse(savedGridData);
    }
    catch (e) {
        console.error("Error parsing grid data", e);
    }
} else {
    serializedGridData = [
        {
            content: commentaryWidget,
            x: 3,
            y: 0,
            w: 6,
            h: 9,
            noResize: true,
            noMove: true,
            locked: true,
        },
        {
            content: fixturesWidget,
            x: 0,
            y: 0,
            w: 3,
            h: 3,
        },
        {
            content: standingsWidget,
            x: 9,
            y: 0,
            w: 3,
            h: 3,
        }
    ]
}

grid.load(serializedGridData);

GridStack.setupDragIn('.grid-tray .grid-stack-item');

const gridTray = document.querySelector('.grid-tray');
const gridTrayToggle = document.querySelector('.gridTrayToggle') as HTMLButtonElement;
const gridSaveBtn = document.querySelector('.gridSaveBtn');

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

const saveGrid = () => {
    serializedGridData = grid.save();

    sessionStorage.setItem('gridData', JSON.stringify(serializedGridData));

    console.log(serializedGridData);
}

gridTrayToggle?.addEventListener('click', toggleGridTray);
gridSaveBtn?.addEventListener('click', saveGrid);