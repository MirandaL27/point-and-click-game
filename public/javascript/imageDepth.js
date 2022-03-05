
let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
document.body.appendChild(app.view);


// Add custom cursor styles
const testIcon = "url('/images/forward-arrow.png'),auto";
app.renderer.plugins.interaction.cursorStyles.default = testIcon;
//app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;


let img = new PIXI.Sprite.from("/images/storage_unit_hallway_1.png");
img.width = 930;
img.height = 675;
app.stage.addChild(img);

let candleImg = new PIXI.Sprite.from("images/small candle.png");

candleImg.width = 700;
candleImg.height = 700;
candleImg.x = 100;
candleImg.y = 0;
app.stage.addChild(candleImg);

let depthMap = new PIXI.Sprite.from("/images/small candle_depth.png");
depthMap.width = 700;
depthMap.height = 700;
depthMap.x = 100;
app.stage.addChild(depthMap);

let colorMatrix = new PIXI.filters.ColorMatrixFilter();
let blur = new PIXI.filters.BlurFilter();
//let alpha = new PIXI.filters.AlphaFilter 

let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
//app.stage.filters = [displacementFilter, colorMatrix, blur];

img.filters = [blur];
candleImg.filters = [displacementFilter];

//colorMatrix.tint(808080);
//colorMatrix.hue(35);
//blur.blur(8,4,5);
//alpha(0.5);

//added mouse movement to emphasize 3D effect
window.onmousemove = (e) => {
    displacementFilter.scale.x = (700/2 - Math.min(e.clientX,700)) / 20;
    displacementFilter.scale.y = (700/2 - Math.min(e.clientY,700)) / 20;
} 

// const light = new PIXI.lights.PointLight(0xffffff, 1);
// candleImg.addChild(light);

//first attempt at lighting effect - draw a circle and position it over the candle's flame to mimic light.
const lightbulb = new PIXI.Graphics();
    const rr = 255;
    const rg = 252;
    const rb = 240;
    const rad = 200
    lightbulb.beginFill((rr << 16) + (rg << 8) + rb, 0.5);
    lightbulb.drawCircle(0, 0, rad);
    lightbulb.endFill();

    lightbulb.x = 450;
    lightbulb.y = 200;
    lightbulb.filters = [blur];
    app.stage.addChild(lightbulb);
//     candleImg.addChild(lightbulb);