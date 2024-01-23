module.exports = class Util {

    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }


    /**
     * Converts numbers into units like `1K`, `1M`, `1B` etc.
     * @param {number|string} num
     * @returns {string} 
     * @returns {string}
     */
    static toAbbrev(num) {
        if (!num || isNaN(num)) return "0";
        if (typeof num === "string") num = parseInt(num);

        if (typeof Intl !== "undefined") {
            return new Intl.NumberFormat("en", { notation: "compact" }).format(num);
        } else {
            let decPlaces = Math.pow(10, 1);
            var abbrev = ["K", "M", "B", "T"];
            for (var i = abbrev.length - 1; i >= 0; i--) {
                var size = Math.pow(10, (i + 1) * 3);
                if (size <= num) {
                    num = Math.round((num * decPlaces) / size) / decPlaces;
                    if (num == 1000 && i < abbrev.length - 1) {
                        num = 1;
                        i++;
                    }
                    num += abbrev[i];
                    break;
                }
            }
            return `${num}`;
        }
    }

    /**
     * Gets variables and types
     * @param {object} prefix The type of variable
     * @param {object} variable The variable to change
     * @returns The variable formatted
     */
    static formatVariable(prefix, variable) {
        const formattedVariable = variable.toLowerCase()
            .split("-").map((word) => word.charAt(0).toUpperCase() + word.substr(1, word.length).toLowerCase()).join("");
        return prefix + formattedVariable;
    }

    static applyText(canvas, text, defaultFontSize, width, font) {
        const ctx = canvas.getContext("2d");
        do {
            ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
        } while (ctx.measureText(text).width > width);
        return ctx.font;
    }

    static roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
        ctx.clip();
    }
}

