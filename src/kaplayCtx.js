import kaplay from "kaplay";

//npm install kaplay@3001.0.0-alpha.21"
const k = kaplay(
    {
        width: 1920,
        height: 1080,
        letterbox: true,
        background: [0, 0, 0],
        global: false,
        touchToMouse: true,
        buttons: {
            jump: {
                keyboard: ["space"],
                mouse: "left",
            },
        },
        debugKey: "d",
        debug: true,

    });
export default k;
