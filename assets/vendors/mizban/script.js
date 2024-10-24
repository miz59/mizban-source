const body = document.body;

const script1 = document.createElement('script');
script1.src = 'assets/js/grapesJs.js';

const script2 = document.createElement('script');
script2.src = 'assets/vendors/mizban/plugins/grapesJs/js/editor/editor.js';
script2.type = 'module';

const script3 = document.createElement('script');
script3.src = './assets/js/playground/loader.min.js';

body.appendChild(script1);
body.appendChild(script2);
body.appendChild(script3);


function wrapBodyContent() {
    const scriptTag = document.querySelector('script[src="./assets/vendors/mizban/script.js"]');
    if (scriptTag) {
        const canvasDiv = document.createElement('div');
        canvasDiv.id = 'canvas';
        while (document.body.firstChild) {
            canvasDiv.appendChild(document.body.firstChild);
        }
        document.body.appendChild(canvasDiv);
    }
}

wrapBodyContent();