let database,
  searchBar,
  searchButton,
  autoSuggestions,
  display;


searchBar = document.querySelector("#search-bar");
searchButton = document.querySelector("#search-button");
autoSuggestions = document.querySelector("#auto-suggestions");
display = document.querySelector("#display");

searchBar.addEventListener('keypress', checkKey);
searchButton.addEventListener('click', processInput);
searchBar.addEventListener('input', getAutoSuggestions)

loadData();

function loadData() {
  searchBar.style.display = "none";
  searchButton.style.display = "none";
  fetch("database.json")
    .then(function(response) {
      console.log("Hello");
      response.json()
        .then(function(jsonObj) {
          database = jsonObj;
          console.log("Database Loaded Successfully");
        }).then(function() {
          searchBar.style.display = "block";
          searchButton.style.display = "block";
        })
    });
}


function checkKey(e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    processInput();
  }
}

function processInput() {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = " ";
  autoSuggestions.style.display = "none";
  searchBar.value = " ";
  console.log(cleanedInput);

  let databaseRecord = getRecord(cleanedInput);

  if (databaseRecord != null) {
    displayRecord(databaseRecord);
  } else {
    displaySuggestions(getSuggestions(cleanedInput));
  }

}

function getRecord(cleanedInput) {
  for (let i = 0; i < database.length; i++) {
    let cleanedRecordName = database[i].Breed.toLowerCase().trim();
    console.log(cleanedRecordName);
    if (cleanedInput == cleanedRecordName) {
      return database[i];
    }

  }
  return null;
}

function displayRecord(databaseRecord) {
  let recordBreed = document.createElement("h2"),
    recordPicture = document.createElement("img"),
    recordBio = document.createElement("p"),
    recordHealth = document.createElement("p"),
    recordGrooming = document.createElement("p"),
    recordTraining = document.createElement("p");

  recordBreed.innerHTML = databaseRecord.Breed;
  recordPicture.src = databaseRecord.Picture;
  recordBio.innerHTML = databaseRecord.Bio;
  recordHealth.innerHTML = databaseRecord.Health;
  recordGrooming.innerHTML = databaseRecord.Grooming;
  recordTraining.innerHTML = databaseRecord.Training;

  display.appendChild(recordBreed);
  display.appendChild(recordPicture);
  display.appendChild(recordBio);
  display.appendChild(recordHealth);
  display.appendChild(recordGrooming);
  display.appendChild(recordTraining);


}

function getAutoSuggestions() {
  let cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = "";

  for (let i = 0; i < database.length; i++) {
    let cleanedRecordName = database[i].Breed.toLowerCase().trim();

    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
      let matching = cleanedRecordName.substring(0, searchBar.value.length),
        remaining = cleanedRecordName.substring(searchBar.value.length),
        result = matching + "<b>" + remaining + "<b>",
        button = document.createElement("button");

      button.innerHTML = result;
      button.style.display = "block";
      button.className = "suggestion";

      activateSuggestionButton(button, database[i]);
      autoSuggestions.appendChild(button);

    }
  }

  if (autoSuggestions.hasChildNodes()) {

    autoSuggestions.style.display = "block";

  } else {
    autoSuggestions.style.display = "none";
  }
}

function activateSuggestionButton(button, record) {
  button.addEventListener("click", function() {

    displayRecord(record);
    autoSuggestions.innerHTML = "";
    autoSuggestions.style.display = "none";
    searchBar.value = "";

  });
}

function getSuggestion(cleanedInput) {
  let suggestions = [];

  for (let i = 0; i < database.length; i++) {
    let cleanedRecordName = datbase[i].value.toLowerCase().trim();

    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput > 0) {
      suggestions.push(database[i]);
    }
  }

  return suggestions;

}

function displaySuggestions(suggestions) {
  display.innerHTML = "";
  let paragraph = document.createElement("p");

  if (suggestions > 0) {
    paragraph.innerHTML = "Did you mean";
    display.appendChild(paragraph);

    for (let i = 0; i < suggestions.length; i++) {
      let button = document.createElement("button");
      button.innerHTML = suggests[i].Breed;
      button.style.display = "block";
      button.className = "suggestion";
      activateSuggestionButton(button, suggestions[i]);
      display.appendChild(button);
    }
  } else {
    paragraph.innerHTML = "No results!"
    display.appendChild(paragraph);
  }
}
