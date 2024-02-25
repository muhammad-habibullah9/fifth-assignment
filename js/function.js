function clickOn(e) {
  console.log("click on");
}

// button select
let selectButton = [];
let couponDiscount = 0.15;

function toButton(buttonNumber) {
  const index = selectButton.indexOf(buttonNumber);

  if (index === -1 && selectButton.length < 4) {
    selectButton.push(buttonNumber);
  } else if (index !== -1) {
    selectButton.splice(index, 1);
  }
  updateButtonStyle();
}

function updateButtonStyle() {
  for (let i = 1; i <= 8; i++) {
    const buttonElements = document.getElementById(`button${i}`);
    if (selectButton.includes(i)) {
      buttonElements.classList.add("selected");
    } else {
      buttonElements.classList.remove("selected");
    }
  }
  const seatsLeftElement = document.getElementById("left-seat");
  const seatsLeft = 40 - selectButton.length;
  seatsLeftElement.textContent = `${seatsLeft}`;

  //   price

  const seatPrice = 550;
  const totalPriceElement = document.getElementById("totalPrice");
  const grandTotalElement = document.getElementById("grandTotal");

  const total = selectButton.length * seatPrice;
  const grandTotal = total;

  totalPriceElement.textContent = `BDT ${total}`;
  grandTotalElement.textContent = `BDT ${grandTotal}`;
}

// coupons
function applyCoupon() {
  const couponInput = document.getElementById("inputCoupon");
  const couponCode = couponInput.value.trim();

  switch (couponCode) {
    case "NEW15":
      applyDiscount(15);
      break;
    case "COUPLE20":
      applyDiscount(20);
      break;
    default:
      alert("Invalid coupon code.");
  }
}

function applyDiscount(discountPercentage) {
  const grandTotalElement = document.getElementById("grandTotal");
  const currentGrandTotal = parseFloat(
    grandTotalElement.textContent.split(" ")[1]
  );

  const discountAmount = (discountPercentage / 100) * currentGrandTotal;
  const discountedGrandTotal = currentGrandTotal - discountAmount;

  grandTotalElement.textContent = `BDT ${discountedGrandTotal.toFixed(2)}`;
  alert(`Discount of ${discountPercentage}% applied successfully`);
}
