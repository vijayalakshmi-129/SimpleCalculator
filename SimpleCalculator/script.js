const display = document.getElementById("Calculator");
const buttons = document.querySelectorAll(".button-grid input[type='button']");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.value;
        if (value === "AC") {
            display.value = "";
        } else if (value === "Del") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else{
            display.value+=value;
        }
    });
});
