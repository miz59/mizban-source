function importCode(editor) {
    let pfx = editor.getConfig().stylePrefix;
    let modal = editor.Modal;
    let codeImporterModal = editor.Modal;
    let cmdm = editor.Commands;
    let codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
    let pnm = editor.Panels;
    let container = document.createElement('div');
    let btnEdit = document.createElement('button');
    let monocoContainer = document.createElement('div');

    monocoContainer.setAttribute("id", "editor");
    container.appendChild(monocoContainer);

    codeViewer.set({
        codeName: 'htmlmixed',
        readOnly: 0,
        theme: 'hopscotch',
        autoBeautify: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineWrapping: true,
        styleActiveLine: true,
        smartIndent: true,
        indentWithTabs: true
    });

    btnEdit.innerHTML = 'Import';
    btnEdit.className = pfx + 'btn-prim ' + pfx + 'btn-import';
    btnEdit.onclick = function () {
        let code = codeViewer.editor.getValue();
        editor.DomComponents.getWrapper().set('content', '');
        editor.setComponents(code.trim());
        modal.close();
    };

    cmdm.add('html-import', {
        run: function (editor, sender) {
            sender && sender.set('active', 0);
            let viewer = codeViewer.editor;
            modal.setTitle('Edit code');
            if (!viewer) {
                let txtarea = document.createElement('textarea');
                container.appendChild(txtarea);
                container.appendChild(btnEdit);
                codeViewer.init(txtarea);
                viewer = codeViewer.editor;
            }
            modal.setContent('');
            modal.setContent(container);
            codeViewer.setContent(editor.getHtml());
            modal.open();
            viewer.refresh();
        }
    });
    cmdm.add('code-editor', {
        run: function (mainEditor, sender) {
            codeImporterModal.setContent("");
            codeImporterModal.setContent(container);
            mainEditor.Modal.setTitle(`Code Editor`);
            require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });
    mainEditor.on('block:drag:stop', function(){
        window.monacoEditor.setValue(mainEditor.getHtml());
        setTimeout(function () {
            window.monacoEditor.getAction('editor.action.formatDocument').run();
        }, 1);
    })
    mainEditor.on('run:core:undo', function(){
        window.monacoEditor.setValue(mainEditor.getHtml());
        setTimeout(function () {
            window.monacoEditor.getAction('editor.action.formatDocument').run();
        }, 1);
    })
    mainEditor.on('run:core:redo', function(){
        window.monacoEditor.setValue(mainEditor.getHtml());
        setTimeout(function () {
            window.monacoEditor.getAction('editor.action.formatDocument').run();
        }, 1);
    })
    mainEditor.on('run:core:canvas-clear', function(){
        window.monacoEditor.setValue(mainEditor.getHtml());
        setTimeout(function () {
            window.monacoEditor.getAction('editor.action.formatDocument').run();
        }, 1);
    })

            require(['vs/editor/editor.main'], function () {
                if (!window.monacoEditor) {
                    window.monacoEditor = monaco.editor.create(document.getElementById('editor'), {
                        value: mainEditor.getHtml(),
                        language: 'html',
                        theme: 'vs-dark',
                        automaticLayout: true
                    });

                    monocoContainer.onkeyup = function () {
                        let code = window.monacoEditor.getValue();
                        mainEditor.DomComponents.getWrapper().set('content', '');
                        mainEditor.setComponents(code.trim());
                    };
                } else {
                    window.monacoEditor.setValue(mainEditor.getHtml());
                }
    
                setTimeout(()=>{
                    setInterval(() => {
                        window.monacoEditor.getAction('editor.action.formatDocument').run();
                    }, 5);
                }, 2);
    
                document.querySelector('.gjs-mdl-btn-close').onclick = function () {
                    container.setContent("");
                };
            }); 

            codeImporterModal.open();
        }
    });
    cmdm.add('import-code-from-html', {
        run: function (editor, sender) {
            editor.addComponents(editor.config.components);
        }
    })
}

export { importCode }