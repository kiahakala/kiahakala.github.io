let navItem = document.getElementsByClassName("nav-item");
const sections = document.getElementsByClassName("main-section");
const navLinks = document.querySelectorAll("nav a");

// Adds 'active' class to a selected navigation item
function setSelected(evt, item) {
  for (let i = 0; i < navItem.length; i++) {
    navItem[i].className = navItem[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

// Adds 'active' class to a navigation item when the user scrolls to it
window.onscroll = () => {
	Array.prototype.forEach.call(sections, (section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      Array.prototype.forEach.call(navLinks, (link) => {
        link.classList.remove("active");
				document.querySelector(`nav a[href*=${id}]`).classList.add("active");
        
      });
    }
  });
};
