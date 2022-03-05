// let nodeList = [];
// let currentPlayerNode = "front";

// //takes a node name and an array of connections
// const addOneNode = (nodeName, imageName, connections) =>{
//     //pushes an object with the name and connections in it to the nodeList array
//     nodeList.push({name: nodeName, image :imageName, connections: connections});
// }

// //populate graph (first connection is always the left one, second connection is always the right one)
// addOneNode("front","wall-door.png", ["left","right"]);
// addOneNode("left", "dark-wall-door.png", ["back", "front"]);
// addOneNode("back", "dark-wall.bmp.png", ["right","left"]);
// addOneNode("right", "wall.bmp.png", ["front", "back"]);

// const isNodeConnected = (currentNodeName, nextNodeName) => {
//     nodeList.forEach(element => {
//         if(element.name === currentNodeName){
//             for(let i=0; i<element.connections.length; i++){
//                 if(element.connections[i] === nextNodeName){
//                     return true
//                 }
//             }
//         }
//     });
//     return false;
// }

// const getImageForNode = (nodeName) =>{
//     for(let i=0; i< nodeList.length;i++){
//         if(nodeList[i].name === nodeName){
//             return nodeList[i].image;
//         }
//     }
// }

// const getConnections = (nodeName, direction) => {
//     for(let i=0;i<nodeList.length;i++){
//         if(nodeList[i].name === nodeName){
//             if(direction === "left"){
//                 return nodeList[i].connections[0];
//             }
//             else if(direction === "right"){
//                 return nodeList[i].connections[1];
//             }
//         }
//     }
// }

// const leftButtonPressHandler = (event) =>{
//     //player wants to turn left
//     let nextNode = getConnections(currentPlayerNode, "left");
//     let gameWindow = document.querySelector(".game-window-interior");
//     gameWindow.style.backgroundImage = `url('./assets/images/${getImageForNode(nextNode)}')`;   
//     currentPlayerNode = nextNode;
// }

// const rightButtonPressHandler = (event) => {
//     //player wants to turn right
//     let nextNode = getConnections(currentPlayerNode, "right");
//     let gameWindow = document.querySelector(".game-window-interior");
//     gameWindow.style.backgroundImage = `url('./assets/images/${getImageForNode(nextNode)}')`;   
//     currentPlayerNode = nextNode;
// }

// document.querySelector(".left-panel").addEventListener("click", leftButtonPressHandler);
// document.querySelector(".right-panel").addEventListener("click", rightButtonPressHandler);

