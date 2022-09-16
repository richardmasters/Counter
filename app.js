let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelector(".hi");

buttons.addEventListener("click", function (e) {
    if (e.target !== this) {
        const styles = e.target.classList;
        if (styles.contains('decrease')) {
            count--
        } else if (styles.contains('increase')) {
            count++
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }

        value.textContent = count;
    }
})