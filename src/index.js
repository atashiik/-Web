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
            "сырный борт": { price: 300, calories: 50 },
            "чедер и пармезан": { price: 300, calories: 50 }
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
    const notification = document.createElement("div");
    notification.id = "notification";
    document.body.appendChild(notification);

    function showNotification(message) {
        notification.innerText = message;
        notification.style.display = "block";
        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    }

    function updateButtonText() {
        const selectedType = document.querySelector("input[name='pizza-type']:checked")?.value;
        const selectedSize = document.querySelector("input[name='pizza-size']:checked")?.value;

        if (!selectedType || !selectedSize) {
            calculateButton.innerText = "Выберите пиццу";
            return;
        }

        const pizza = new Pizza(selectedType, selectedSize);

        document.querySelectorAll(".topping:checked").forEach(checkbox => {
            pizza.addTopping(checkbox.value);
        });

        calculateButton.innerText = `Добавить в корзину (${pizza.calculatePrice()} руб, ${pizza.calculateCalories()} ккал)`;
    }

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", updateButtonText);
    });

    calculateButton.addEventListener("click", function () {
        const selectedType = document.querySelector("input[name='pizza-type']:checked")?.value;
        const selectedSize = document.querySelector("input[name='pizza-size']:checked")?.value;

        if (!selectedType || !selectedSize) {
            showNotification("Выберите тип пиццы и размер!");
            return;
        }

        alert("Пицца добавлена в корзину!");
    });

    updateButtonText();
});

document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll("input[type='radio']");
    
    radioButtons.forEach(radio => {
        radio.addEventListener("click", function (event) {
            if (this.checked) {
                this.dataset.wasChecked = this.dataset.wasChecked === "true" ? "false" : "true";
            }

            if (this.dataset.wasChecked === "false") {
                this.checked = false;
            }
        });
    });
});
