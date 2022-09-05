// Make the sidebar section (Stay In The Know) sticky on scroll (up and down)
// Removes Sticky from sidebar before it reaches to the footer

//----------Sticky Sidebar-----------//
// Getting Go group leader content container
const goGroupLeaderCont = document
  .getElementsByClassName("go-group-leader-content")[0]
  .getBoundingClientRect();

// Reading scroll event to check if the scroll hits the bottom of the go group leader content container
document.addEventListener("scroll", () => {
  if (window.scrollY > goGroupLeaderCont.bottom) {
    document.getElementsByClassName("show-on-desktop-min")[0].style.cssText =
      "position: static;";
  } else {
    document.getElementsByClassName("show-on-desktop-min")[0].style.cssText =
      "position: sticky; top:124px;";
  }
});

// Add a link/button in the sticky sidebar
// Clicking on the link should open the modal
// The modal should have a close icon, a headline, and a paragraph of text

//----------Modal-----------//
// Getting sidebar container
const sidebar = document.getElementsByClassName("show-on-desktop-min")[0];

// Create modal button
const modalButton = document.createElement("a");
modalButton.textContent = "Open Modal";
modalButton.style.cssText =
  "background-color:#00A5B8; padding:4px 8px; cursor: pointer; color:#FFFFFF;";
sidebar.appendChild(modalButton);

// Create modal
const modal = document.createElement("div");
modal.style.cssText =
  "position: fixed; z-index: 10; top: 0; width: 100%;height: 100%;display:none; background-color: rgb(180, 180, 180,0.5);";
const modalContent = `<div id='modal-cont' style="display:flex; flex-direction:column; position:relative; width:500px; padding:20px; margin:0 auto; transform: translateY(200px);background-color:white; box-shadow:0px 0px 8px 0px rgba(0,0,0,0.1);"> <button id='exit-modal' style="position:absolute;right:5px;top:5px; background-color:transparent;color:#00A5B8;">X</button><h1>This is some header text</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div>`;
modal.innerHTML = modalContent;
document.body.appendChild(modal);

// Modal button functions
const openModal = () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};
modalButton.addEventListener("click", openModal);
const exitModalButton = document.getElementById("exit-modal");
exitModalButton.addEventListener("click", closeModal);
const modalContainer = document.getElementById("modal-cont");

// Styles when screen resizes
window.addEventListener("resize", () => {
  if (screen.width <= 768) {
    modalContainer.style.width = "100%";
    modalContainer.style.height = "100%";
    modalContainer.style.transform = "translateY(0px)";
  } else {
    modalContainer.style.width = "500px";
    modalContainer.style.height = "fit-content";
    modalContainer.style.transform = "translateY(200px)";
  }
});

// On the same page, underneath the “Our Leadership Team” header, insert a new three-item section called “Value Propositions”

//----------Section-----------//
// Get banner container
const bannerContent = document.getElementsByClassName(
  "banner-small__content-wrapper"
)[0];

//Create the banner image container
const bannerImageContainer = document.createElement("div");
bannerContent.style.cssText = "max-width:100%;";
const bannerImageContent = `<div id="banner-image-cont" style="display:flex;flex-direction:column;align-items:center;row-gap:20px;width:100%;margin-top:25px;"><h1>Value Propositions</h1> <div id="image-content-cont" style="display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;row-gap:35px;"> <div class="image-cont"> <img src="https://www.svgrepo.com/show/31071/laptop.svg" width="70"/><h3 class="image-header">Header 1</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div> <div class="image-cont"> <img src="https://www.svgrepo.com/show/6989/truck.svg" width="70"/><h3 class="image-header">Header 2</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div> <div class="image-cont" > <img src="https://www.svgrepo.com/show/301761/mobile-store.svg" width="70"/><h3 class="image-header">Header 3</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div></div>`;
bannerImageContainer.innerHTML = bannerImageContent;
bannerContent.appendChild(bannerImageContainer);

// Set variables for selected elements
const imageCont = document.querySelectorAll(".image-cont");
const imageContentCont = document.getElementById("image-content-cont");
const imageHeader = document.querySelectorAll(".image-header");

// Set styling for image text container and header
const styles = () => {
  imageCont.forEach((cont) => {
    cont.style.cssText = `display:flex;flex-direction:column; justify-content:center; align-items:center;text-align:center; row-gap:10px;max-width:250px; position:relative;`;
  });
  imageHeader.forEach((header) => {
    header.style.cssText = "font-weight:600; align-self:center;";
  });
};
styles();

// Styles when screen resizes
window.addEventListener("resize", () => {
  imageContentCont.style.flexDirection = "row";
  styles();
  if (screen.width <= 425) {
    imageContentCont.style.flexDirection = "column";
    imageCont.forEach((cont) => {
      cont.style.alignItems = "center";
      cont.style.textAlign = "center";
    });
    imageHeader.forEach((header) => {
      header.style.alignSelf = "center";
    });
  } else if (screen.width <= 768) {
    imageContentCont.style.flexDirection = "column";
    imageCont.forEach((cont) => {
      cont.style.alignItems = "flex-start";
      cont.style.textAlign = "right";
    });
    imageHeader.forEach((header) => {
      header.style.alignSelf = "flex-end";
    });
  }
});

//----------Tabs-----------//
// Get hero image container
const heroCont = document.getElementsByClassName("careers-page-hero")[0];
const tabCont = document.createElement("div");
// Set html content for tabs
const tabContContent = `
<div id="tab-container" style="padding:70px;">
<ul class="nav nav-tabs" style="float: left;
		width: 100%;
		margin: 0;
		list-style-type: none;">
<li class="tab-btn active" style="float: left;margin-bottom: -1px;"><a style="padding:10px 20px;"href="#tab-1">Tab 1</a></li>
<li class="tab-btn" style="float: left;margin-bottom: -1px;"><a style="padding:10px 20px;" href="#tab-2">Tab 2</a></li>
</ul>
<div id="tab-content" style="width:100%;height:300px;">
<div id="tab-1-content" class="tab-1-content tab-content" style="display:flex;flex-direction:row;width:100%;height:100%;">
<div class="tab-1-content-left" style="width:50%;height:100%;display: flex;flex-direction: column;justify-content: space-evenly;"><h3 style="font-weight:600;">Header</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a style="width:fit-content;">Chat with us</a></div>
<div class="tab-1-content-right" style="display:flex;justify-content:center;align-items:center; width:50%;"><img style="width:300px" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/best-logo-makers.jpeg?auto=format&q=60&fit=max&w=930"/></div>
</div>

<div id="tab-2-content" class="tab-2-content tab-content hide"  style="display:flex;flex-direction:row;width:100%;height:100%;">
<div class="tab-2-content-left" style="width:70%; height:100%;display:flex; flex-direction:column;row-gap:20px;justify-content: space-evenly;">
<img style="width:50px;height:50px;" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/344/external-heart-love-flatart-icons-flat-flatarticons.png"/>
<h3>Header</h3>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<div class="tab-2-content-right" style="width:30%;">
<button style="padding:10px 20px; background-color:white; border:2px solid black;">Try for free</button>
</div
</div>

</div>
</div>
`;

tabCont.innerHTML = tabContContent;
heroCont.appendChild( tabCont );

// Variables for tab content
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = document.querySelectorAll(".tab-btn");

let tab1Content = document.getElementById("tab-1-content");
let tab2Content = document.getElementById("tab-2-content");

let currentHideTab = document.getElementsByClassName("hide")[0];

// Hide the second tab on initial
currentHideTab.style.display = "none";

// Function to style the tab button that is active
const styleActiveButton = () => {
  const currentActiveTab = document.getElementsByClassName("active")[0];
  currentActiveTab.style.backgroundColor = "#c1f8fe";
};
styleActiveButton();

// Give click function to tab buttons (This could probably be more condensed but ran out of time.) 
tabButtons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.style.backgroundColor = "white";
    });
    if (e.target.innerText.includes("Tab 1")) {
      if (e.target.className.includes("active")) {
        button.classList.remove("active");
        tab1Content.classList.add("hide");
        tab1Content.style.display = "none";
        tab2Content.classList.remove("hide");
        tab2Content.style.display = "flex";
      } else {
        button.classList.add("active");
        tab1Content.classList.remove("hide");
        tab1Content.style.display = "flex";
        tab2Content.classList.add("hide");
        tab2Content.style.display = "none";
      }
    } else if (e.target.innerText.includes("Tab 2")) {
      if (e.target.className.includes("active")) {
        button.classList.remove("active");
        tab2Content.classList.add("hide");
        tab2Content.style.display = "none";
        tab1Content.classList.remove("hide");
        tab1Content.style.display = "flex";
      } else {
        button.classList.add("active");
        tab2Content.classList.remove("hide");
        tab2Content.style.display = "flex";
        tab1Content.classList.add("hide");
        tab1Content.style.display = "none";
      }
    }
    styleActiveButton();
  });
});
