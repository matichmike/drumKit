document.querySelectorAll(".drum")
  .forEach(
    (button) => button.addEventListener("click", function() {
        new Audio('sounds/tom-1.mp3').play();
        this.style.color = "white";
      }
    )
  );