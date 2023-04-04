let events = [];
let completedEvents = [];
let undoneEvents = [];

function addEvent() {
  const eventInput = document.getElementById("event");
  const dateInput = document.getElementById("date");

  if (eventInput.value === "" || dateInput.value === "") {
    alert("Please enter an event and date");
  } else {
    const event = {
      name: eventInput.value,
      date: dateInput.value,
    };

    events.push(event);
    const eventList = document.getElementById("eventList");
    const eventItem = document.createElement("li");
    eventItem.innerHTML = `${event.name} - ${event.date}`;
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Complete";
    completeButton.onclick = function () {
      completeEvent(event);
    };
    eventItem.appendChild(completeButton);
    eventList.appendChild(eventItem);

    const undoneList = document.getElementById("undoneList");
    const undoneItem = document.createElement("li");
    undoneItem.innerHTML = `${event.name} - ${event.date}`;
    undoneList.appendChild(undoneItem);

    eventInput.value = "";
    dateInput.value = "";
  }
}

function completeEvent(event) {
  completedEvents.push(event);
  const eventList = document.getElementById("eventList");
  const completedList = document.getElementById("completedList");
  for (let i = 0; i < eventList.children.length; i++) {
    const eventItem = eventList.children[i];
    if (eventItem.innerHTML.startsWith(event.name)) {
      eventList.removeChild(eventItem);
      completedList.appendChild(eventItem);
      const completeButton = eventItem.lastChild;
      eventItem.removeChild(completeButton);
      break;
    }
  }

  const undoneList = document.getElementById("undoneList");
  for (let i = 0; i < undoneList.children.length; i++) {
    const undoneItem = undoneList.children[i];
    if (undoneItem.innerHTML.startsWith(event.name)) {
      undoneList.removeChild(undoneItem);
      break;
    }
  }
}

function updateUndoneEvents() {
  const today = new Date().toISOString().slice(0, 10);
  undoneEvents = events.filter((event) => event.date >= today);
  const undoneList = document.getElementById("undoneList");
  undoneList.innerHTML = "";
  undoneEvents.forEach((event) => {
    const undoneItem = document.createElement("li");
    undoneItem.innerHTML = `${event.name} - ${event.date}`;
    undoneList.appendChild(undoneItem);
  });
}