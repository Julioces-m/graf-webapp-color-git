document.addEventListener("DOMContentLoaded", function () {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");
    const colorBox = document.getElementById("colorBox");
    const colorCode = document.getElementById("colorCode");
    const colorPicker = document.getElementById("colorPicker");

    const redValue = document.getElementById("redValue");
    const greenValue = document.getElementById("greenValue");
    const blueValue = document.getElementById("blueValue");

    function updateColor() {
        let r = red.value;
        let g = green.value;
        let b = blue.value;
        let hex = rgbToHex(r, g, b);
        
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        colorCode.textContent = `RGB(${r}, ${g}, ${b}) - ${hex}`;
        colorPicker.value = hex;

        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + +b).toString(16).slice(1).toUpperCase();
    }

    function hexToRgb(hex) {
        let bigint = parseInt(hex.substring(1), 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    red.addEventListener("input", updateColor);
    green.addEventListener("input", updateColor);
    blue.addEventListener("input", updateColor);

    colorPicker.addEventListener("input", function () {
        let rgb = hexToRgb(colorPicker.value);
        red.value = rgb.r;
        green.value = rgb.g;
        blue.value = rgb.b;

        redValue.textContent = rgb.r;
        greenValue.textContent = rgb.g;
        blueValue.textContent = rgb.b;

        updateColor();
    });

    updateColor();
});
