const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height - 10, width*2, 20, "brown", true);
  left_wall = new Base(300, height/2 + 50, 600, 100, "brown", true);
  right_wall = new Base(width - 300, height/2 + 50, 600, 100, "brown", true);
  bridge = new Bridge(15, {x:width/2 - 400, y:height/2});
  join_point = new Base(-600, height/2 + 10, 40, 20, "green", true);
  Matter.Composite.add(bridge.body, join_point);
  join_link = new Link(bridge, join_point);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random( -10, 140);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show();
 right_wall.show();
 left_wall.show();
 bridge.show();
 join_point.show();
 for (var stone of stones) {
   stone.show();
 }
}
