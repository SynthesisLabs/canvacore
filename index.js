const Canvas = require("canvas");

// Register Poppins fonts
Canvas.registerFont(`${__dirname}/Assets/fonts/Poppins-Regular.ttf`, { family: "Poppins-Regular" })
Canvas.registerFont(`${__dirname}/Assets/fonts/Poppins-Thin.ttf`, { family: "Poppins-Thin" })

module.exports = {
    /* Canvacore */
    RankCard: require("./src/cards/rankCard")
}