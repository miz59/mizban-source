import {base_component} from "./js/components/base_components.js";
import {base_blocks} from "./js/plugins/base_blocks.js";
import {flexColBlock} from "./js/plugins/column_block.js";
import {editor_assetsManager} from "./js/assetsManager/assetsManager.js";
import {cssRules} from "./js/cssRules/cssRules.js";
import {editor_panelManager} from "./js/panels/panels.js";
import {importCode} from "./js/panels/importCode.js";
import {device_Manager} from "./js/devices/device-manager.js";
import {commands} from "./js/commands/commands.js";
import {editor_events} from "./js/events/editor_events.js";


const   plugins =  [base_blocks , base_component  , cssRules  , device_Manager , commands ,editor_events , flexColBlock];



export {plugins ,editor_panelManager, editor_assetsManager   , importCode};