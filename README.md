JSAlerts
========
A JavaScript Library for simplifying notifications based on asynchronous Promises.

Features
========
1. Notifications can be placed anywhere on the screen. Complete control on position exists.
2. A bunch of parameters can be used to customize pretty much everything in a notification.
3. Any animation/transition can be added. Also, a bunch of transitions will be provided.
4. Cross browser support.
5. No dependencies --> written completely in JavaScript (Browser must support Promises, though).
6. Very minimal. Goal is to have a non-minified version within 20kB.
7. Programmatically destroy the notification, or set a timeout, or let the user destroy the notification.
8. Events support - beforeEnter, afterEnter, beforeLeave, afterLeave, onClick.
9. Built-in animations.

Completed
=========
1. Notifications can be placed anywhere on the screen.
2. Any animations can be used to animate notifications.
3. Any style can be applied to the notifications. Hence, the color, background-color, font-size, etc. can be customized.
4. HTML text can be used to display the notification. As long as the text is valid HTML, JSAlerts will be able to display it.
5. Close button is now functioning.
6. autoClose now works.
7. destroy method also works.
8. Notification frame can be any CSS class. Thus, the look of the frame can also be altered.
9. closeButton can be assigned a color.
10. animateInDuration and animateOutDuration are functioning.
11. Any errors during promise resolution are caught and reported on the console. At this point, no errors are reported, but can be altered in the future.
12. Events are supported.
13. Fade and Slide animations have been completed. These are placeholder animations that can be used right out of the box. Can add other custom animations.
