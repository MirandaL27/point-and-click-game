
let app = new PIXI.Application({width: 930, height: 675});
console.log(app);
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("/images/storage_unit_hallway_1.png");
img.width = 930;
img.height = 675;
app.stage.addChild(img);

let candleImg = new PIXI.Sprite.from("images/small candle.png");

candleImg.width = 700;
candleImg.height = 700;
app.stage.addChild(candleImg);

let depthMap = new PIXI.Sprite.from("/images/small candle_depth.png");
depthMap.width = 700;
depthMap.height = 700;
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
    displacementFilter.scale.x = (700/2 - e.clientX) / 20;
    displacementFilter.scale.y = (700/2 - e.clientY) / 20;
} 