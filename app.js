const contactIcon = document.getElementById("contact-icon");
const finderIcon = document.getElementById("finder-icon");
const allWindows = document.querySelectorAll(".window");
const allCloseButtons = document.querySelectorAll(".close");

const arrayWindows = Array.from(allWindows);
const arrayCloseButtons = Array.from(allCloseButtons);

// Hide all windows
const hideAllWindows = () => {
  arrayWindows.forEach((w) => {
    w.classList.add("hidden");
  });
};

// Hide all windows and recenter them
const hideAllWindowsAndRecenter = () => {
  arrayWindows.forEach((w) => {
    w.classList.add("hidden");
    w.style.left = `0px`;
    w.style.top = `0px`;
  });
};

// When clicking on the close button hide all windows and recenter them
arrayCloseButtons.forEach((c) => {
  c.addEventListener("click", hideAllWindowsAndRecenter);
});

// When clicking on the contact icon hide all windows then make the me window appear
contactIcon.addEventListener("click", function () {
  hideAllWindows();
  document.getElementById("me").classList.remove("hidden");
});
// When hovering the contact icon make the text appear
contactIcon.addEventListener("mouseover", function () {
  document.getElementById("me-icon-text").classList.remove("hidden");
});
contactIcon.addEventListener("mouseout", function () {
  document.getElementById("me-icon-text").classList.add("hidden");
});
// Prevent the text from always be visible after a touch on mobile
contactIcon.addEventListener("touchstart", function (e) {
  e.preventDefault();
  contactIcon.click();
});
contactIcon.addEventListener("touchstart", function (e) {
  e.preventDefault();
});

// When clicking on the finder icon hide all windows then make the me window appear
finderIcon.addEventListener("click", function () {
  hideAllWindows();
  document.getElementById("projects").classList.remove("hidden");
});
// When hovering the finder icon make the text appear
finderIcon.addEventListener("mouseover", function () {
  document.getElementById("projects-icon-text").classList.remove("hidden");
});
finderIcon.addEventListener("mouseout", function () {
  document.getElementById("projects-icon-text").classList.add("hidden");
});
// Prevent the text from always be visible after a touch on mobile
finderIcon.addEventListener("touchstart", function (e) {
  e.preventDefault();
  finderIcon.click();
});
finderIcon.addEventListener("touchstart", function (e) {
  e.preventDefault();
});

// Drag window functionality
const allTopBars = document.querySelectorAll(".window-top-bar");

const arrayTopBars = Array.from(allTopBars);

// Get the movement of the mouse and move the window accordingly
const onDrag = ({ movementX, movementY }) => {
  arrayWindows.forEach((w) => {
    let getStyle = window.getComputedStyle(w);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);

    w.style.left = `${left + movementX}px`;
    w.style.top = `${top + movementY}px`;
  });
};

// When mousedown on a window's topbar then enable the mousemove event listener and the drag movement
arrayTopBars.forEach((t) => {
  t.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", onDrag);
  });

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onDrag);
  });
});
