"use strict";
if (figma.editorType === 'figma') {
    figma.showUI(__html__);
    figma.ui.resize(300, 400);
    figma.ui.onmessage = msg => {
        if (msg.type === 'create-page') {
            for (let i = 0; i < msg.count; i++)figma.createPage('PAGE')
        }
        if (msg.type === 'cancel') {
            figma.closePlugin();
        }
    };
};
