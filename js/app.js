let num = 1;
let num2 = 1;
let num3 = 1;
let num4 = 1;

const mines1 = document.getElementById("mines1");
console.log(mines1);
const plus1 = document.getElementById("plus1");
console.log(plus1);

const mines2 = document.getElementById("mines2");
console.log(mines2);
const plus2 = document.getElementById("plus2");
console.log(plus2);

const mines3 = document.getElementById("mines3");
console.log(mines3);
const plus3 = document.getElementById("plus3");
console.log(plus3);

const mines4 = document.getElementById("mines4");
console.log(mines4);
const plus4 = document.getElementById("plus4");
console.log(plus4);

const count1 = document.getElementById("count1");
console.log(count1);
const count2 = document.getElementById("count2");
console.log(count2);
const count3 = document.getElementById("count3");
console.log(count3);
const count4 = document.getElementById("count4");
console.log(count4);

mines1.addEventListener("click", () => {
  if (num > 1) {
    num--;
    count1.textContent = num;
  } else {
    alert("You can't use this anymore! ");
  }
});

mines2.addEventListener("click", () => {
  if (num2 > 1) {
    num2--;
    count2.textContent = num2;
  } else {
    alert("You can't use this anymore! ");
  }
});

mines3.addEventListener("click", () => {
  if (num3 > 1) {
    num3--;
    count3.textContent = num3;
  } else {
    alert("You can't use this anymore! ");
  }
});

mines4.addEventListener("click", () => {
  if (num4 > 1) {
    num4--;
    count4.textContent = num4;
  } else {
    alert("You can't use this anymore! ");
  }
});

plus1.addEventListener("click", () => {
  num++;
  count1.innerText = num;
});

plus2.addEventListener("click", () => {
  num2++;
  count2.innerText = num2;
});

plus3.addEventListener("click", () => {
  num3++;
  count3.innerText = num3;
});

plus4.addEventListener("click", () => {
  num4++;
  count4.innerText = num4;
});

const categoryBtn1 = document.getElementById("menu-categories-btn1");
console.log(categoryBtn1);

const categoryBtn2 = document.getElementById("menu-categories-btn2");
console.log(categoryBtn2);

const categoryBtn3 = document.getElementById("menu-categories-btn3");
console.log(categoryBtn3);

const categoryBtn4 = document.getElementById("menu-categories-btn4");
console.log(categoryBtn4);

const categoryBtn5 = document.getElementById("menu-categories-btn5");
console.log(categoryBtn5);

const menuCart1 = document.getElementById("menu-cart1");
console.log(menuCart1);

const menuCart2 = document.getElementById("menu-cart2");
console.log(menuCart2);

const menuCart3 = document.getElementById("menu-cart3");
console.log(menuCart3);

const menuCart4 = document.getElementById("menu-cart4");
console.log(menuCart4);

categoryBtn1.addEventListener("click", () => {
  categoryBtn2.style.backgroundColor = "inherit";
  categoryBtn3.style.backgroundColor = "inherit";
  categoryBtn4.style.backgroundColor = "inherit";
  categoryBtn1.style.backgroundColor = "orange";
  categoryBtn5.style.backgroundColor = "inherit";
  menuCart1.style.display = "flex";
  menuCart2.style.display = "flex";
  menuCart3.style.display = "flex";
  menuCart1.style.margin = "0";
  menuCart2.style.margin = "0";
  menuCart3.style.margin = "0";
  menuCart4.style.margin = "0";
  menuCart4.style.display = "flex";
});

categoryBtn2.addEventListener("click", () => {
  categoryBtn1.style.backgroundColor = "inherit";
  categoryBtn3.style.backgroundColor = "inherit";
  categoryBtn4.style.backgroundColor = "inherit";
  categoryBtn2.style.backgroundColor = "orange";
  categoryBtn5.style.backgroundColor = "inherit";
  menuCart1.style.display = "flex";
  menuCart1.style.margin = "0 auto";
  menuCart2.style.display = "none";
  menuCart3.style.display = "none";
  menuCart4.style.display = "none";
});

categoryBtn3.addEventListener("click", () => {
  categoryBtn2.style.backgroundColor = "inherit";
  categoryBtn1.style.backgroundColor = "inherit";
  categoryBtn3.style.backgroundColor = "orange";
  categoryBtn4.style.backgroundColor = "inherit";
  categoryBtn5.style.backgroundColor = "inherit";
  menuCart1.style.display = "none";
  menuCart2.style.margin = "0 auto";
  menuCart3.style.display = "none";
  menuCart4.style.display = "none";
  menuCart2.style.display = "flex";
});

categoryBtn4.addEventListener("click", () => {
  categoryBtn2.style.backgroundColor = "inherit";
  categoryBtn3.style.backgroundColor = "inherit";
  categoryBtn4.style.backgroundColor = "orange";
  categoryBtn1.style.backgroundColor = "inherit";
  categoryBtn5.style.backgroundColor = "inherit";
  menuCart2.style.display = "none";
  menuCart1.style.display = "none";
  menuCart3.style.margin = "0 auto";
  menuCart3.style.display = "flex";
  menuCart4.style.display = "none";
});

categoryBtn5.addEventListener("click", () => {
  categoryBtn2.style.backgroundColor = "inherit";
  categoryBtn3.style.backgroundColor = "inherit";
  categoryBtn4.style.backgroundColor = "inherit";
  categoryBtn1.style.backgroundColor = "inherit";
  categoryBtn5.style.backgroundColor = "orange";
  menuCart4.style.margin = "0 auto";
  menuCart2.style.display = "none";
  menuCart3.style.display = "none";
  menuCart1.style.display = "none";
  menuCart4.style.display = "flex";
});

// Login
const loginBtn = document.getElementById("loginBtn");
const profileBtn = document.createElement("button");
profileBtn.id = "profileBtn";
profileBtn.style.display = "none";
profileBtn.style.padding = "8px 16px";
profileBtn.style.background = "#FFA500";
profileBtn.style.border = "none";
profileBtn.style.color = "#fff";
profileBtn.style.borderRadius = "5px";
profileBtn.style.cursor = "pointer";

document.querySelector("header").appendChild(profileBtn);

const modal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");
const submitLogin = document.getElementById("submitLogin");
const errorMsg = document.getElementById("errorMsg");

loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

submitLogin.addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (user === "" || email === "") {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
    return;
  }

  if (!validateEmail(email)) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Iltimos, to'g'ri email kiriting!";
    return;
  }

  localStorage.setItem("loggedUser", JSON.stringify({ user, email }));
  updateUI();
  modal.style.display = "none";
  errorMsg.style.display = "none";
});

function updateUI() {
  const saved = JSON.parse(localStorage.getItem("loggedUser"));
  if (saved) {
    loginBtn.style.display = "none";
    profileBtn.style.display = "block";
    profileBtn.textContent = "Profile: " + saved.user;
  } else {
    loginBtn.style.display = "block";
    profileBtn.style.display = "none";
  }
}

window.addEventListener("load", updateUI);

// Order
const orderBtn1 = document.getElementById("menu-cart-btn1");
console.log(orderBtn1);

const orderBtn2 = document.getElementById("menu-cart-btn2");
console.log(orderBtn2);

const orderBtn3 = document.getElementById("menu-cart-btn3");
console.log(orderBtn3);

const orderBtn4 = document.getElementById("menu-cart-btn4");
console.log(orderBtn4);

const order = document.getElementById("orderBtn");
console.log(order);

order.addEventListener("click", () => {
  order.textContent = `Thank you for ordering :)`;
  setTimeout(() => {
    order.style.display = "none";
  }, 2000);
});

orderBtn1.addEventListener("click", () => {
  order.style.display = "block";
});

orderBtn2.addEventListener("click", () => {
  order.style.display = "block";
});

orderBtn3.addEventListener("click", () => {
  order.style.display = "block";
});

orderBtn4.addEventListener("click", () => {
  order.style.display = "block";
});


// mines/plus