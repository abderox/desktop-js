const NOTIFICATION_TITLE = 'Notification'
const NOTIFICATION_BODY = 'The app is now running !'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE