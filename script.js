const toastBox = document.getElementById("toastBox");
const successMsg = "Successfully submitted!";
const errorMsg = "Please fix the error!";
const invalidMsg = "Invalid input, check again";

function showToast() {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "success";
  toastBox.appendChild(toast);
}
