import {confCols} from '../../../../commands/variables.js'

const colsCount = confCols.count;
function flexColBlock(editor){
    editor.Blocks.add('modal-block', {
        label: '<i class="fa-light fa-square"></i></i><span>col</span>',
        content: '<div class="modal-block"></div>',
        category : 'layouts_category',
        activate: true,
    });
    
    editor.on('block:drag:stop', (blockModel) => {    
        if (blockModel.view.el.getAttribute('class').includes("modal-block")) {
            
            openModal();
        }
    });
    
    
    function openModal() {
        const modal = editor.Modal;
        modal.setTitle(`Enter a number between 1 and ${colsCount}`);
        modal.setContent(`
          <div>
            <h4>Enter the number of cells:</h4>
            <input id="cell-input" type="number" min="1" max="${colsCount}" value="1" style="width: 100%; padding: 5px;">
            <button id="create-cells" style="margin-top: 10px; padding: 10px;">Create Cells</button>
          </div>
        `);
        modal.open();
      
        document.getElementById('create-cells').addEventListener('click', () => {
          const numCells = parseInt(document.getElementById('cell-input').value);
          
          if (numCells >= 1 && numCells <= colsCount) {
            createCells(numCells);
            modal.close();
          } else {
            alert(`Please enter a number between 1 and ${colsCount}`);
          }
        });
    }
      
      function createCells(num) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('d-flex');
        wrapper.classList.add('miz-col');
        
        for (let i = 0; i < num; i++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          wrapper.appendChild(cell);
        }
      
        editor.addComponents(wrapper.outerHTML);
    }
}

export {flexColBlock};