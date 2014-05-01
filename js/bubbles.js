// init controller
var controller = new ScrollMagic();

// assign handler "scene" and add it to Controller
var scene = new ScrollScene({duration: 100})
                .addTo(controller);

// add multiple scenes at once
var scene2;
controller.addScene([
    scene, // add above defined scene
    scene2 = new ScrollScene({duration: 200}), // add scene and assign handler "scene2"
    new ScrollScene({offset: 20}) // add anonymous scene
]);

