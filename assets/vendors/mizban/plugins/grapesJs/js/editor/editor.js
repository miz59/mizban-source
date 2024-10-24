import { editor_assetsManager, editor_panelManager, importCode, plugins } from "../../Controller.js";

const editor = grapesjs.init({
    container: "#canvas",
    fromElement: true,
    height: "100vh",
    draggable: true,

    plugins: plugins,

    selectorManager: {
        componentFirst: true,
    },

    storageManager: true,
    fromElement: true,





    // cssComposer: {},
    // assetManager: {},
    // traitManager: {},
    // panelManager: {},
    // layerManager: {},
    // pageManager: {},
    // styleManager: {},

});

editor_assetsManager(editor);
editor_panelManager(editor);
importCode(editor);

const cssFiles = [
  './assets/vendors/mizban/plugins/grapesJs/css/editor.css',
  './assets/css/miz.min.css'
];

cssFiles.forEach(file => {
  const linkEl = document.createElement('link');
  linkEl.rel = 'stylesheet';
  linkEl.href = file;

  editor.on('load', () => {
    const iframe = editor.Canvas.getFrameEl();
    iframe.contentDocument.head.appendChild(linkEl);
  });
});









async function fetchCSSClasses(url) {
  const response = await fetch(url);
  const cssText = await response.text();
  const classNames = new Set();
  
  const regex = /\.([a-zA-Z0-9_-]+)/g;
  let match;
  while ((match = regex.exec(cssText)) !== null) {
    classNames.add(match[1]); 
  }
  
  return Array.from(classNames); 
}

function createDataListForInput(input, cssClasses) {
  const dataList = document.createElement('datalist');
  dataList.id = 'cssClassList';
  
  input.setAttribute('list', dataList.id);
  
  cssClasses.forEach(className => {
    const option = document.createElement('option');
    option.value = className;
    dataList.appendChild(option);
  });
  
  input.parentNode.insertBefore(dataList, input.nextSibling);
}

fetchCSSClasses('./assets/css/miz.min.css') 
  .then(cssClasses => {
    const input = document.querySelector('#gjs-clm-new'); 
    if (input) {
      createDataListForInput(input, cssClasses);
    } else {
      console.error('Input with ID #gjs-clm-new not found');
    }
  })
  .catch(error => {
    console.error('Error fetching CSS classes:', error);
  });






  async function saveImageToFolder(file) {
    // درخواست دسترسی به پوشه توسط کاربر
    const dirHandle = await window.showDirectoryPicker();
    
    // ایجاد یک فایل جدید در پوشه انتخابی با نام اصلی فایل آپلود شده
    const newFileHandle = await dirHandle.getFileHandle(file.name, { create: true });
    
    // ایجاد جریان نوشتن به فایل
    const writable = await newFileHandle.createWritable();
    
    // نوشتن محتوای فایل و بستن جریان نوشتن
    await writable.write(file);
    await writable.close();
  }
  
  // آپلود فایل و ذخیره آن در پوشه انتخابی توسط کاربر
  document.querySelector('input[type="file"]').addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (file) {
      await saveImageToFolder(file);
      alert("تصویر در پوشه انتخابی ذخیره شد!");
    }
  });
  