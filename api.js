function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}



let tictactoe = {
    // Initialize init callback.
    // Example: tictactoe.init(function(num) {
    //      alert("clicked on " + num)
    // });
    init(click_callback) {
        for (el of document.querySelectorAll(".cell")) {
            el.addEventListener("click", cell_on_click)
        }
        tictactoe.click_callback = click_callback;
    },


    // Place x or o to nth cell.
    // valid range is 0-8.
    // Example: tictactoe.place("x", 4)
    placeCell(sym, pos) {
        document.querySelector(".cell:nth-child(" + (pos + 1) + ")").innerHTML = "<img src='" + sym + ".png'/>";
    },

    // Clear cell
    clearCell(pos) {
        document.querySelector(".cell:nth-child(" + (pos + 1) + ")").innerHTML = "";
    },

    // Change side text
    setSideText(text) {
        document.querySelector(".side-text").innerHTML = text;
    },

    // Change side text color
    setSideTextColor(color) {
        document.querySelector(".side-text").style.color = color;
    },


    // Change finish text
    setFinishText(text) {
        document.querySelector(".finish-text").innerHTML = text;
    },

    // Change finish text color
    setFinishTextColor(color) {
        document.querySelector(".finish-text").style.color = color;
    },

    // Show/hide finish screen
    toggleFinishState() {
        document.body.classList.toggle("finish");
    }
}
function cell_on_click(event) {
    if (!tictactoe.click_callback) {
        alert("please, initialize api first! Call tictactoe.init(click_callback)")
    }
    tictactoe.click_callback(getChildElementIndex(event.target));
}


