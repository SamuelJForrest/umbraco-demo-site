import '../../sass/vendor/_gridstack.scss';
import { GridStack } from "gridstack";
import { commentaryWidget, fixturesWidget, standingsWidget } from '../widgets/opta';

let grid = GridStack.init({
    removable: '.grid-tray-trash',
    acceptWidgets: function(el) { return true },
    column: 4
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
            x: 1,
            y: 0,
            w: 2,
            h: 2,
            noResize: true,
            noMove: true,
            locked: true,
        },
        {
            content: fixturesWidget,
            x: 0,
            y: 0,
            w: 1,
            h: 1,
        },
        {
            content: standingsWidget,
            x: 3,
            y: 0,
            w: 1,
            h: 1,
        }
    ]
}

grid.load(serializedGridData);

GridStack.setupDragIn('.grid-tray .grid-stack-item');

const gridTray = document.querySelector('.grid-tray');
const gridTrayToggle = document.querySelector('.gridTrayToggle') as HTMLButtonElement;
// const gridSaveBtn = document.querySelector('.gridSaveBtn') as HTMLButtonElement;

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

    console.log('Grid saved');
}

grid.on('change', function() {
    saveGrid();
});

gridTrayToggle?.addEventListener('click', toggleGridTray);