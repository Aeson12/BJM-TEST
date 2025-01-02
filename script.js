if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => console.log("SW registered:", registration))
    .catch((error) => console.error("SW registration failed:", error));
}

const notificationsToggle = document.getElementById("notifications-toggle");
notificationsToggle.addEventListener("change", async (event) => {
  if (event.target.checked) {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      new Notification("Notifications enabled! 🎉");
    } else {
      alert("Notifications denied.");
      event.target.checked = false;
    }
  }
});
