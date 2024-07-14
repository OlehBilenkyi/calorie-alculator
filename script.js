document
  .getElementById("calorie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseInt(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);

    // Проверка, что все значения введены корректно
    if (isNaN(age) || isNaN(weight) || isNaN(height) || isNaN(activity)) {
      alert("Пожалуйста, введите корректные данные");
      return;
    }

    // Рассчет BMR по формуле Харриса-Бенедикта
    let bmr;
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // Рассчет необходимого количества калорий
    const calories = bmr * activity;

    // Макроэлементы
    const protein = (calories * 0.3) / 4; // 30% калорий из белков (1 г белка = 4 ккал)
    const fat = (calories * 0.25) / 9; // 25% калорий из жиров (1 г жира = 9 ккал)
    const carbs = (calories * 0.45) / 4; // 45% калорий из углеводов (1 г углеводов = 4 ккал)

    // Отображение результатов
    document.getElementById("bmr").textContent = bmr.toFixed(2);
    document.getElementById("calories").textContent = calories.toFixed(2);
    document.getElementById("protein").textContent = protein.toFixed(2);
    document.getElementById("fat").textContent = fat.toFixed(2);
    document.getElementById("carbs").textContent = carbs.toFixed(2);
    document.getElementById("result").style.display = "block";
  });
