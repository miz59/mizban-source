import { breakPoints } from "../../../../commands/variables.js";
function device_Manager(editor) {
    Object.keys(breakPoints).forEach(key => {
        const breakPointsName = breakPoints[key];
        try {
            console.log(key)
            editor.Devices.add({
                id: key,
                name: key,
                width: breakPoints[key],
            })
        } catch (error) {}
    });
    editor.Devices.add([{
        name: 'desktop',
        width: '',
    }
    ]);
}

export {device_Manager}