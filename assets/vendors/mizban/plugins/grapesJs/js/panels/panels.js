import { breakPoints } from "../../../../commands/variables.js";
function editor_panelManager(editor) {
   
    editor.Panels.addPanel({
        id: "gjs_pn_buttons",
        el: ".gjs-pn-options",
        buttons: [
            
            { 
                id:"codeEditor",
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-code"></i>',
                command:"code-editor",
                readOnly:0,
            }
            ,
            { 
                id:"importCode",
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-upload"></i>',
                command:"import-code-from-html",
                readOnly:0,
            }
            ,
            {
                id: 'undo',
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-undo"></i>',
                command: 'core:undo', // Built-in command
            },
            {
                id: 'redo',
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-rotate-right"></i>',
                command: 'core:redo', // Built-in command
            },

            {
                id: 'clean',
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-trash"></i>',
                command: 'core:canvas-clear', // Built-in command
            },
            {
                id: 'question',
                className: 'btn-toggle-borders',
                label: '<i class="fa fa-question-circle"></i>',
                command: editor => {
                    editor.Modal.open({
                        title: 'about this demo',
                        attributes: {class: 'my-small-modal',},
                        content: `<div class="modal-question">
    <img src="https://esperlos.ir/wp-content/uploads/2023/07/logo-esperlos.webp">
    <p>GrapesJS Webpage Builder is a simple showcase of what is possible to achieve with the GrapesJS core library.</p>
    <p>For any hint about the demo check the Webpage Preset repository and open an issue. For problems with the builder itself, open an issue on the main GrapesJS repository.</p>
    <p>Being a free and open source project contributors and supporters are extremely welcome. If you like the project support it with a donation of your choice or become a backer/sponsor via Open Collective.</p>
</div>
`,
                    });

                }
            },
        ],

    });
    editor.Panels.addPanel({
        id: "device_panel",
        el: ".gjs-pn-commands",
        buttons: [
            {
                id: "desktop",
                className: "btn-toggle-device",
                label: `<i class="fa fa-desktop"></i>`,
                command: "set-device-desktop",
                active: true,
                togglable: false,
            },
            ...Object.keys(breakPoints).map(key => ({
                id: key,
                className: "btn-toggle-device",
                label: `<i style="font-size: 1rem">${key}</i>`,
                command: `set-device-${key}`,
                active: true,
                togglable: false,
            })),
        ]
    });
    

}


export {editor_panelManager}


