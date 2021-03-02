const notificationBtn = document.getElementById("notificationBtn");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const messageTypes = ["info", "success", "warning", "error"];

notificationBtn.addEventListener("click", () => createNotification(""));

function createNotification(message = null, type = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");
  notification.classList.add(type ? type : getRandomType());

  notification.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return messageTypes[Math.floor(Math.random() * messageTypes.length)];
}
