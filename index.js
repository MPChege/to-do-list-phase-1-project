// Create an array to store events
let events = [];

// Function to add a new event
function addEvent() {
  // Get the event name from the input field
  let eventName = document.getElementById("event").value;
  // Add the event to the events array
  events.push(eventName);
  // Clear the input field
  document.getElementById("event").value = "";
  // Update the event list on the page
  updateEventList();
}

// Function to update the event list on the page
function updateEventList() {
  // Get the event list element from the page
  let eventList = document.getElementById("eventList");
  // Clear the event list element
  eventList.innerHTML = "";
  // Loop through the events array and add each event to the event list element
  for (let i = 0; i < events.length; i++) {
    let eventListItem = document.createElement("li");
    eventListItem.innerHTML = events[i] + " <button onclick='completeEvent(" + i + ")'>Complete</button>";
    eventList.appendChild(eventListItem);
  }
}

// Function to mark an event as completed
function completeEvent(index) {
  // Remove the completed event from the events array
  let completedEvent = events.splice(index, 1)[0];
  // Add the completed event to the completed list on the page
  let completedList = document.getElementById("completedList");
  let completedListItem = document.createElement("li");
  completedListItem.innerHTML = completedEvent;
  completedList.appendChild(completedListItem);
  // Update the event list on the page
  updateEventList();
}

// Call the updateEventList function when the page loads
updateEventList();
