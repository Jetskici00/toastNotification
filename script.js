const toastBox = document.getElementById("toastBox");
const successMsg =
  "<i class='fa-regular fa-circle-check'></i> Successfully submitted!";
const errorMsg =
  "<i class='fa-regular fa-circle-xmark'></i> Please fix the error!";
const invalidMsg =
  "<i class='fa-solid fa-triangle-exclamation'></i> Invalid input, check again";

function showToast(msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
