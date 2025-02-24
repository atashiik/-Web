class Pizza {
    constructor(type, size) {
        this.types = {
            "Маргарита": { price: 500, calories: 300 },
            "Пепперони": { price: 800, calories: 400 },
            "Баварская": { price: 700, calories: 450 }
        };

        this.sizes = {
            "Большая": { price: 200, calories: 200 },
            "Маленькая": { price: 100, calories: 100 }
        };

        this.toppings = {
            "сливочная моцарелла": { price: 50, calories: 20 },
            "сырный борт": { price: size === "Большая" ? 300 : 150, calories: 50 },
            "чедер и пармезан": { price: size === "Большая" ? 300 : 150, calories: 50 }
        };

        this.type = type;
        this.size = size;
        this.selectedToppings = [];
    }

    addTopping(topping) {
        if (this.toppings[topping] && !this.selectedToppings.includes(topping)) {
            this.selectedToppings.push(topping);
        }
    }

    removeTopping(topping) {
        this.selectedToppings = this.selectedToppings.filter(t => t !== topping);
    }

    getToppings() {
        return this.selectedToppings;
    }

    getSize() {
        return this.size;
    }

    getType() {
        return this.type;
    }

    calculatePrice() {
        let price = this.types[this.type].price + this.sizes[this.size].price;
        this.selectedToppings.forEach(topping => {
            price += this.toppings[topping].price;
        });
        return price;
    }

    calculateCalories() {
        let calories = this.types[this.type].calories + this.sizes[this.size].calories;
        this.selectedToppings.forEach(topping => {
            calories += this.toppings[topping].calories;
        });
        return calories;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.createElement("div");
    resultDiv.id = "result";
    document.body.appendChild(resultDiv);

    calculateButton.addEventListener("click", function () {
        const selectedType = document.querySelector("input[name='pizza-type']:checked")?.value;
        const selectedSize = document.querySelector("input[name='pizza-size']:checked")?.value;

        if (!selectedType || !selectedSize) {
            alert("Выберите тип пиццы и размер!");
            return;
        }

        const pizza = new Pizza(selectedType, selectedSize);

        document.querySelectorAll(".topping:checked").forEach(checkbox => {
            pizza.addTopping(checkbox.value);
        });

        const price = pizza.calculatePrice();
        const calories = pizza.calculateCalories();

        resultDiv.innerHTML = `
            <h3>Ваша пицца:</h3>
            <p><strong>Тип пиццы:</strong> ${pizza.getType()}</p>
            <p><strong>Размер:</strong> ${pizza.getSize()}</p>
            <p><strong>Добавки:</strong> ${pizza.getToppings().join(", ") || "Нет"}</p>
            <p><strong>Цена:</strong> ${price} рублей</p>
            <p><strong>Калорийность:</strong> ${calories} Ккал</p>
        `;
    });
});
