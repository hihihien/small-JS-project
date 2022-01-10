// set initial
let count = 0;

// select value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        else if(styles.contains("increase")){
            count++;
        } else {
            count = 0;
        }

        //change color
        if (count > 0) {
            value.style.color = "#ff99ff";
        }
        if (count < 0) {
            value.style.color = "#9999ff";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
});
