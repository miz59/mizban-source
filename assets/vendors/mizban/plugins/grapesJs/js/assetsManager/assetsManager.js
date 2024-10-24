function editor_assetsManager(editor) {


    editor.Assets.load("https://esperlos.ir/wp-content/uploads/2023/05/about-us-picture-1.webp" )
    const assetPaths = [
        'https://esperlos.ir/wp-content/uploads/2023/05/about-us-picture-1.webp',
        'https://esperlos.ir/wp-content/uploads/2023/07/logo-esperlos.webp',
        'https://esperlos.ir/wp-content/uploads/2023/05/ghalb3.webp',
    ];

    assetPaths.forEach(assetPath => editor.AssetManager.add(assetPath));

}


export {editor_assetsManager}