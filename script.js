function calculateProtein() {
  const weightInput = Number(document.getElementById("weight").value);
  const unit = document.getElementById("unit").value;
  const goal = document.getElementById("goal").value;
  const meals = Number(document.getElementById("meals").value);
  const appetite = document.getElementById("appetite").value;

  if (!weightInput || weightInput <= 0) {
    alert("Please enter a valid weight.");
    return;
  }

  const weightKg = unit === "lb" ? weightInput / 2.20462 : weightInput;

  const multipliers = {
    basic: 1.0,
    weightLoss: 1.2,
    muscle: 1.5,
    active: 1.4
  };

  let protein = Math.round(weightKg * multipliers[goal]);

  if (appetite === "low") protein = Math.round(protein * 0.95);
  if (appetite === "veryLow") protein = Math.round(protein * 0.9);

  const perMeal = Math.round(protein / meals);
  const calories = protein * 4;

  document.getElementById("proteinTarget").textContent = protein;
  document.getElementById("perMeal").textContent = perMeal + "g";
  document.getElementById("proteinCalories").textContent = calories + " kcal";

  const foods = getFoods(appetite);
  const foodList = document.getElementById("foodList");
  foodList.innerHTML = "";
  foods.forEach(food => {
    const li = document.createElement("li");
    li.textContent = food;
    foodList.appendChild(li);
  });

  document.getElementById("tip").textContent = getTip(appetite);
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}

function getFoods(appetite) {
  if (appetite === "veryLow") {
    return [
      "Protein shake",
      "Greek yogurt",
      "Eggs",
      "Soft tofu",
      "Salmon",
      "Cottage cheese"
    ];
  }

  if (appetite === "low") {
    return [
      "Chicken soup with shredded chicken",
      "Greek yogurt",
      "Tuna",
      "Eggs",
      "Salmon",
      "Protein smoothie"
    ];
  }

  return [
    "Chicken breast",
    "Salmon",
    "Eggs",
    "Greek yogurt",
    "Lean beef",
    "Tofu",
    "Beans"
  ];
}

function getTip(appetite) {
  if (appetite === "veryLow") {
    return "Tip: With very low appetite, liquid protein and soft foods may be easier than large meals.";
  }

  if (appetite === "low") {
    return "Tip: Try smaller high-protein meals instead of forcing large portions.";
  }

  return "Tip: Spread protein across the day to make the target easier to reach.";
}

calculateProtein();
