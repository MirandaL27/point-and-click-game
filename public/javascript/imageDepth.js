
let app = new PIXI.Application({width: 930, height: 675});
console.log(app);
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("/images/storage_unit_hallway_1.png");
img.width = 930;
img.height = 675;
app.stage.addChild(img);

let depthMap = new PIXI.Sprite.from("/images/storage_unit_hallway_1_1_depth.png");
app.stage.addChild(depthMap);

let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];

//added mouse movement to emphasize 3D effect
window.onmousemove = (e) => {
    //displacementFilter.scale.x = (930/2 - e.clientX) / 20;
    displacementFilter.scale.y = (675/2 - e.clientY) / 20;
} 