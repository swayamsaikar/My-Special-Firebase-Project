var database;
var FoodValue = 0;
var FoodStorage;
var Age;
var AgeValue = 0;

var babyImage;
var baby;
var babyText;

var youngImage;
var young;
var youngText;

var adultImage;
var adult;
var adultText;

var oldImage;
var old;
var oldText;

//Food

//For baby age 1 year
var milkImage;
var milk;
var milkText;

//For boy age 10 years
var yippeeImage;
var yippee;
var yippeeText;

//For adult Boy age 20 years
var FruVegImage;
var FruVeg;
var FruVegText;

//For old Boy age 60 years
var FriedFoodImage;
var FriedFood;
var FriedFoodText;

//buttons
var FeedFood;
var ToFeedThe = "Baby";

var bg1;
var bg2;
var bg3;
var bg4;

function preload() {
  //I have to preload the human Images
  babyImage = loadImage("baby.png");
  adultImage = loadImage("adult.png");
  youngImage = loadImage("young.png");
  oldImage = loadImage("old man.png");

  //I have preloaded the Food Images here
  milkImage = loadImage("milk.png");
  yippeeImage = loadImage("yippee.png");
  FriedFoodImage = loadImage("Fried Foods.png");
  FruVegImage = loadImage("Fruits and vegetables.png");

  // loaded the images of the backgrounds
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("bg2.jpg");
  bg3 = loadImage("bg3.jpg");
  bg4 = loadImage("bg4.jpg");
}

function setup() {
  createCanvas(1800, 1200);

  /* ------------------ started writing all the database code ----------------- */

  database = firebase.database();
  FoodStorage = database.ref("Milk");
  FoodStorage.on("value", (data) => {
    FoodValue = data.val();
    console.log(data);
  });

  Age = database.ref("Age");
  Age.on("value", (data) => {
    AgeValue = data.val();
    console.log(data);
  });

  FeedFood = createButton("Feed");
  FeedFood.size(360, 100);
  FeedFood.position(550, 980);
  FeedFood.style("font-size", "50px");
  FeedFood.style("font", "georgia");
  FeedFood.style("text-align", "center");
  FeedFood.style("border-radius", "30px");
  FeedFood.style("border", "5px solid black");

  FeedFood.mousePressed(() => {
    AddFood(FoodValue);
  });

  /* -------------------------------------------------------------------------- */
  /*                                     END                                    */
  /* -------------------------------------------------------------------------- */

  /* ---------------- started doing the life stages of a human ---------------- */

  baby = createSprite(1550, 780, 0, 0);
  baby.addImage("babyImg", babyImage);
  baby.scale = 1.5;

  young = createSprite(1550, 780, 0, 0);
  young.addImage("youngImg", youngImage);
  young.scale = 0.5;

  young.visible = false;

  adult = createSprite(1550, 740, 0, 0);
  adult.addImage("adultImg", adultImage);
  adult.scale = 1;

  adult.visible = false;

  old = createSprite(1550, 755, 0, 0);
  old.addImage("oldImg", oldImage);
  old.scale = 0.8;

  old.visible = false;

  /* -------------------------------------------------------------------------- */
  /*                                     END                                    */
  /* -------------------------------------------------------------------------- */

  /* ------------------- started doing all the html elements ------------------ */

  babyText = createElement("h1");
  babyText.html("Baby");
  babyText.position(1780, 1380);
  babyText.style("font-size", "90px");

  youngText = createElement("h1");
  youngText.html("Young");
  youngText.position(1780, 1380);
  youngText.style("font-size", "90px");

  youngText.hide();

  adultText = createElement("h1");
  adultText.html("Adult");
  adultText.position(1780, 1380);
  adultText.style("font-size", "90px");

  adultText.hide();

  oldText = createElement("h1");
  oldText.html("Old");
  oldText.position(1795, 1380);
  oldText.style("font-size", "90px");

  oldText.hide();

  //foods text elements

  milkText = createElement("h1");
  milkText.html("Milk");
  milkText.position(1275, 1380);
  milkText.style("font-size", "90px");

  milkText.show();

  yippeeText = createElement("h1");
  yippeeText.html("Yippee");
  yippeeText.position(1245, 1380);
  yippeeText.style("font-size", "90px");

  yippeeText.hide();

  FruVegText = createElement("h1");
  FruVegText.html("FAV");
  FruVegText.position(1275, 1380);
  FruVegText.style("font-size", "90px");

  FruVegText.hide();

  FriedFoodText = createElement("h1");
  FriedFoodText.html("Fried Food");
  FriedFoodText.position(1175, 1380);
  FriedFoodText.style("font-size", "90px");

  FriedFoodText.hide();

  /* ---------------------------- created the foods --------------------------- */

  milk = createSprite(1000, 780, 0, 0);
  milk.addImage("milkImg", milkImage);
  milk.scale = 0.5;
  milk.visible = true;

  yippee = createSprite(1000, 780, 0, 0);
  yippee.addImage("yippeeImg", yippeeImage);
  yippee.scale = 0.6;
  yippee.visible = false;

  FriedFood = createSprite(1000, 780, 0, 0);
  FriedFood.addImage("FriedFoodImg", FriedFoodImage);
  FriedFood.scale = 0.6;
  FriedFood.visible = false;

  FruVeg = createSprite(1000, 780, 0, 0);
  FruVeg.addImage("FruVegImg", FruVegImage);
  FruVeg.scale = 0.9;
  FruVeg.visible = false;
}
function draw() {
  background(bg3);

  // 46, 139, 87
  // feeded to the baby then the age will increase by 1
  // Added the functionality of if 10 milk bottles were

  /* --------------------- Started Coding the if and else for the Food Values--------------------- */

  if (FoodValue == 10) {
    database.ref("/").update({
      Age: 1,
    });
  }

  if (FoodValue == 20) {
    database.ref("/").update({
      Age: 2,
    });
  }

  if (FoodValue == 30) {
    database.ref("/").update({
      Age: 3,
    });
  }

  if (FoodValue == 40) {
    database.ref("/").update({
      Age: 4,
    });
  }

  if (FoodValue == 50) {
    database.ref("/").update({
      Age: 5,
    });
  }

  if (FoodValue == 60) {
    database.ref("/").update({
      Age: 6,
    });
  }

  if (FoodValue == 70) {
    database.ref("/").update({
      Age: 7,
    });
  }

  if (FoodValue == 80) {
    database.ref("/").update({
      Age: 8,
    });
  }

  if (FoodValue == 90) {
    database.ref("/").update({
      Age: 9,
    });
  }

  if (FoodValue == 100) {
    database.ref("/").update({
      Age: 10,
    });
  }

  if (FoodValue == 110) {
    database.ref("/").update({
      Age: 11,
    });
  }

  if (FoodValue == 120) {
    database.ref("/").update({
      Age: 12,
    });
  }

  if (FoodValue == 130) {
    database.ref("/").update({
      Age: 13,
    });
  }

  if (FoodValue == 140) {
    database.ref("/").update({
      Age: 14,
    });
  }

  if (FoodValue == 150) {
    database.ref("/").update({
      Age: 15,
    });
  }

  if (FoodValue == 160) {
    database.ref("/").update({
      Age: 16,
    });
  }

  if (FoodValue == 170) {
    database.ref("/").update({
      Age: 17,
    });
  }

  if (FoodValue == 180) {
    database.ref("/").update({
      Age: 18,
    });
  }

  if (FoodValue == 190) {
    database.ref("/").update({
      Age: 19,
    });
  }

  if (FoodValue == 200) {
    database.ref("/").update({
      Age: 20,
    });
  }

  if (FoodValue == 210) {
    database.ref("/").update({
      Age: 21,
    });
  }

  if (FoodValue == 220) {
    database.ref("/").update({
      Age: 22,
    });
  }

  if (FoodValue == 230) {
    database.ref("/").update({
      Age: 23,
    });
  }

  if (FoodValue == 240) {
    database.ref("/").update({
      Age: 24,
    });
  }

  if (FoodValue == 250) {
    database.ref("/").update({
      Age: 25,
    });
  }

  if (FoodValue == 260) {
    database.ref("/").update({
      Age: 26,
    });
  }

  if (FoodValue == 270) {
    database.ref("/").update({
      Age: 27,
    });
  }
  if (FoodValue == 280) {
    database.ref("/").update({
      Age: 28,
    });
  }

  if (FoodValue == 290) {
    database.ref("/").update({
      Age: 29,
    });
  }

  if (FoodValue == 300) {
    database.ref("/").update({
      Age: 30,
    });
  }

  if (FoodValue == 310) {
    database.ref("/").update({
      Age: 31,
    });
  }

  if (FoodValue == 320) {
    database.ref("/").update({
      Age: 32,
    });
  }

  if (FoodValue == 330) {
    database.ref("/").update({
      Age: 33,
    });
  }

  if (FoodValue == 340) {
    database.ref("/").update({
      Age: 34,
    });
  }

  if (FoodValue == 350) {
    database.ref("/").update({
      Age: 35,
    });
  }

  if (FoodValue == 360) {
    database.ref("/").update({
      Age: 36,
    });
  }

  if (FoodValue == 370) {
    database.ref("/").update({
      Age: 37,
    });
  }

  if (FoodValue == 380) {
    database.ref("/").update({
      Age: 38,
    });
  }

  if (FoodValue == 390) {
    database.ref("/").update({
      Age: 39,
    });
  }

  if (FoodValue == 400) {
    database.ref("/").update({
      Age: 40,
    });
  }

  if (FoodValue == 410) {
    database.ref("/").update({
      Age: 41,
    });
  }

  if (FoodValue == 420) {
    database.ref("/").update({
      Age: 42,
    });
  }

  if (FoodValue == 430) {
    database.ref("/").update({
      Age: 43,
    });
  }

  if (FoodValue == 440) {
    database.ref("/").update({
      Age: 44,
    });
  }

  if (FoodValue == 450) {
    database.ref("/").update({
      Age: 45,
    });
  }

  if (FoodValue == 460) {
    database.ref("/").update({
      Age: 46,
    });
  }

  if (FoodValue == 470) {
    database.ref("/").update({
      Age: 47,
    });
  }

  if (FoodValue == 480) {
    database.ref("/").update({
      Age: 48,
    });
  }

  if (FoodValue == 490) {
    database.ref("/").update({
      Age: 49,
    });
  }

  if (FoodValue == 500) {
    database.ref("/").update({
      Age: 50,
    });
  }

  if (FoodValue == 510) {
    database.ref("/").update({
      Age: 51,
    });
  }

  if (FoodValue == 520) {
    database.ref("/").update({
      Age: 52,
    });
  }

  if (FoodValue == 530) {
    database.ref("/").update({
      Age: 53,
    });
  }

  if (FoodValue == 540) {
    database.ref("/").update({
      Age: 54,
    });
  }

  if (FoodValue == 550) {
    database.ref("/").update({
      Age: 55,
    });
  }

  if (FoodValue == 560) {
    database.ref("/").update({
      Age: 56,
    });
  }

  if (FoodValue == 570) {
    database.ref("/").update({
      Age: 57,
    });
  }

  if (FoodValue == 580) {
    database.ref("/").update({
      Age: 58,
    });
  }

  if (FoodValue == 590) {
    database.ref("/").update({
      Age: 59,
    });
  }

  if (FoodValue == 600) {
    database.ref("/").update({
      Age: 60,
    });
  }

  if (FoodValue == 610) {
    database.ref("/").update({
      Age: 61,
    });
  }

  if (FoodValue == 620) {
    database.ref("/").update({
      Age: 62,
    });
  }

  if (FoodValue == 630) {
    database.ref("/").update({
      Age: 63,
    });
  }

  if (FoodValue == 640) {
    database.ref("/").update({
      Age: 64,
    });
  }

  if (FoodValue == 650) {
    database.ref("/").update({
      Age: 65,
    });
  }

  if (FoodValue == 660) {
    database.ref("/").update({
      Age: 66,
    });
  }

  if (FoodValue == 670) {
    database.ref("/").update({
      Age: 67,
    });
  }

  if (FoodValue == 680) {
    database.ref("/").update({
      Age: 68,
    });
  }

  if (FoodValue == 690) {
    database.ref("/").update({
      Age: 69,
    });
  }

  if (FoodValue == 700) {
    database.ref("/").update({
      Age: 70,
    });
  }

  if (FoodValue == 710) {
    database.ref("/").update({
      Age: 71,
    });
  }

  if (FoodValue == 720) {
    database.ref("/").update({
      Age: 72,
    });
  }

  if (FoodValue == 730) {
    database.ref("/").update({
      Age: 73,
    });
  }

  if (FoodValue == 740) {
    database.ref("/").update({
      Age: 74,
    });
  }

  if (FoodValue == 750) {
    database.ref("/").update({
      Age: 75,
    });
  }

  if (FoodValue == 760) {
    database.ref("/").update({
      Age: 76,
    });
  }

  if (FoodValue == 770) {
    database.ref("/").update({
      Age: 77,
    });
  }

  if (FoodValue == 780) {
    database.ref("/").update({
      Age: 78,
    });
  }

  if (FoodValue == 790) {
    database.ref("/").update({
      Age: 79,
    });
  }

  if (FoodValue == 800) {
    database.ref("/").update({
      Age: 80,
    });
  }

  if (FoodValue == 810) {
    database.ref("/").update({
      Age: 81,
    });
  }

  if (FoodValue == 820) {
    database.ref("/").update({
      Age: 82,
    });
  }

  if (FoodValue == 830) {
    database.ref("/").update({
      Age: 83,
    });
  }

  if (FoodValue == 840) {
    database.ref("/").update({
      Age: 84,
    });
  }

  if (FoodValue == 850) {
    database.ref("/").update({
      Age: 85,
    });
  }

  if (FoodValue == 860) {
    database.ref("/").update({
      Age: 86,
    });
  }

  if (FoodValue == 870) {
    database.ref("/").update({
      Age: 87,
    });
  }

  if (FoodValue == 880) {
    database.ref("/").update({
      Age: 88,
    });
  }

  if (FoodValue == 890) {
    database.ref("/").update({
      Age: 89,
    });
  }

  if (FoodValue == 900) {
    database.ref("/").update({
      Age: 90,
    });
  }

  if (FoodValue == 910) {
    database.ref("/").update({
      Age: 91,
    });
  }

  if (FoodValue == 920) {
    database.ref("/").update({
      Age: 92,
    });
  }

  if (FoodValue == 930) {
    database.ref("/").update({
      Age: 93,
    });
  }

  if (FoodValue == 940) {
    database.ref("/").update({
      Age: 94,
    });
  }

  if (FoodValue == 950) {
    database.ref("/").update({
      Age: 95,
    });
  }

  if (FoodValue == 960) {
    database.ref("/").update({
      Age: 96,
    });
  }

  if (FoodValue == 970) {
    database.ref("/").update({
      Age: 97,
    });
  }

  if (FoodValue == 980) {
    database.ref("/").update({
      Age: 98,
    });
  }

  if (FoodValue == 990) {
    database.ref("/").update({
      Age: 99,
    });
  }

  if (FoodValue == 1000) {
    database.ref("/").update({
      Age: 100,
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                     END                                    */
  /* -------------------------------------------------------------------------- */

  /* ------------------- Started coding the if else for AgeValues ------------------- */

  if (AgeValue == 10) {
    ToFeedThe = "Young";
    baby.visible = false;
    young.visible = true;
    babyText.hide();
    youngText.show();
    milk.visible = false;
    yippee.visible = true;
    milkText.hide();
    yippeeText.show();
    background(bg1);
  }

  if (AgeValue == 20) {
    ToFeedThe = "Adult";
    baby.visible = false;
    young.visible = false;
    adult.visible = true;
    old.visible = false;
    babyText.hide();
    youngText.hide();
    adultText.show();
    milk.visible = false;
    yippee.visible = false;
    FruVeg.visible = true;
    milkText.hide();
    yippeeText.hide();
    FruVegText.show();
    background(bg2);
  }

  if (AgeValue == 60) {
    ToFeedThe = "Old";
    baby.visible = false;
    young.visible = false;
    old.visible = true;
    adult.visible = false;
    babyText.hide();
    youngText.hide();
    adultText.hide();
    oldText.show();
    milk.visible = false;
    yippee.visible = false;
    FruVeg.visible = false;
    FriedFood.visible = true;
    milkText.hide();
    yippeeText.hide();
    FruVegText.hide();
    FriedFoodText.show();
    background(bg4);
  }

  /* ----------------------------------- END ---------------------------------- */

  /* ---------------------------- started designing work --------------------------- */

  drawSprites();
  fill("black");
  textSize(100);
  textFont("Helvetica");
  strokeWeight(1);
  stroke("black");
  text("🙏 Welcome To my App 🙏", 270, 150);

  textSize(120);
  text(" => ", 650, 800);
  text(" => ", 1130, 800);

  textSize(70);
  fill("white");
  strokeWeight(2);
  stroke("black");
  textStyle(NORMAL);
  textFont("georgia");

  text(
    "Note : Press The Feed Button To Feed The " + ToFeedThe + " !",
    120,
    380
  );
  textSize(100);
  text("Age: " + AgeValue, 220, 900);
}

/* ----------------------------- Made functions ----------------------------- */

function AddFood(x) {
  x++;
  database.ref("/").update({
    Milk: x,
  });
  console.log(x);
}

function updateAge() {
  database.ref("/").update({
    Age: AgeValue,
  });
}
