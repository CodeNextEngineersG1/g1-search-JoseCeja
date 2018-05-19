let database,
  searchBar,
  searchButton,
  autoSuggestions,
  display;

database[{
  Breed: "Saint Bernard",
  Picture: "img/SaintBernard.jpg",
  Bio: "Not ranked particularly high in AKC registrations, this genial giant is nonetheless among the world’s most famous and beloved breeds. The Saint’s written standard abounds with phrases like “very powerful,” “extraordinarily muscular,” “imposing,” and “massive.” A male stands a minimum 27.5 inches at the shoulder; females will be smaller and more delicately built. The huge head features a wrinkled brow, a short muzzle, and dark eyes, combining to give Saints the intelligent, friendly expression that was such a welcome sight to stranded Alpine travelers.",
  Health: "Suceptible to bloating and hip dysplasia.",
  Grooming: "Sheds two times a year, Weekly brushing is recommended.",
  Training: "Early socialization and puppy training classes are recommended for all dogs, but are absolutely required for dogs as big and strong as a St. Bernard. Obedience training will help the Saint learn not to jump on people, knock into small children, steal food from the table, and otherwise take advantage of their size."
}, {
  Breed: "Alaskan Malamute",
  Picture: "img/AlaskanMalamute.jpeg",
  Bio: "The Alaskan Malamute stands 23 to 25 inches at the shoulder and weighs 75 to 85 pounds. Everything about Mals suggests their origin as an arctic sledge dog: The heavy bone, deep chest, powerful shoulders, and dense, weatherproof coat all scream, “I work hard for a living!” But their almond-shaped brown eyes have an affectionate sparkle, suggesting Mals enjoy snuggling with their humans when the workday is done. Mals are pack animals. And in your family “pack,” the leader must be you. If a Mal doesn’t respect you, he will wind up owning you instead of the other way around. Firm but loving training should begin in early puppyhood. That said, a well-behaved Mal is a joy to be with—playful, gentle, friendly, and great with kids.",
  Health: "A responsible breeder will screen breeding stock for health conditions such as hip dysplasia (a malformation of the hip joint that is the most common skeletal condition in dogs), elbow dysplasia, thrombopathia, chondrodysplasia (“dwarfism”), hypothyroidism, inherited polyneuropathy, von Willebrand’s disease, and day blindness. As with all breeds, an Alaskan Malamute’s ears should be checked regularly to remove foreign matter and avoid a buildup of wax, and his teeth should be brushed regularly.",
  Grooming: "Should be brushed everyday, and nails should be trimmed regularly.",
  Training: "Socialization and obedience training are necessary in order to prevent a Malamute from becoming pushy with children and other pets, or dominant over adults he or she doesn’t respect."
}, {
  Breed: "Tibetan Mastiff",
  Picture: "img/TibetanMastiff.jpeg",
  Bio: "Coming face to face with this ancient behemoth, an intruder up to no good will likely move on to easier pickings. TMs can stand 26 inches at the shoulder and weigh well over 100 pounds. It’s impossible to discuss this breed without leaning on words like “powerful,” “muscular,” massive,” and “substantial.” And yet, TMs are quite light-footed and will meet a perceived threat with surprising agility. The broad head, with its high-set, V-shaped ears and expressive brown eyes, projects a noble, sagacious expression.",
  Health: "The Tibetan Mastiff is a relatively healthy breed. The most common health issues seen in the breed are elbow and hip dysplasia, hypothyroidism, entropion and ectropion. Seizures can also be a concern in some lines, but the issue is not prevalent in the breed. Responsible breeders will screen their stock for conditions the breed can be prone to.",
  Grooming: "They have a low-maintenance coat that requires minimal grooming during the majority of the year. A weekly brushing with a slicker or a long pin brush to remove surface dirt and the use of a wide-tooth comb on the tail, mane, and breeches to remove tangles is all that is required. They “blow” their undercoat once a year in a massive shedding in late spring or summer. During this time, it is best to use an undercoat rake or de-shedding tool.",
  Training: "Tibetan Mastiffs do not respond well to traditional obedience training. They are highly intelligent, learn quickly, and do not feel the need to repeat what they already know. They will do what their owners ask of them *if* they respect and trust their judgment—but if there is ever a question, the TM will follow their instincts over training."
}, {
  Breed: "Great Dane",
  Picture: "img/GreatDane.jpg",
  Bio: "As tall as 32 inches at the shoulder, Danes tower over most other dogs—and when standing on their hind legs, they are taller than most people. These powerful giants are the picture of elegance and balance, with the smooth and easy stride of born noblemen. The coat comes in different colors and patterns, perhaps the best-known being the black-and-white patchwork pattern known as 'harlequin'. Despite their sweet nature, Danes are alert home guardians. Just the sight of these gentle giants is usually enough to make intruders think twice. But those foolish enough to mistake the breed’s friendliness for softness will meet a powerful foe of true courage and spirit. Patient with kids, Danes are people pleasers who make friends easily.",
  Health: "Bloat, or gastric dilatation-volvulus (GDV), is the number-one killer of Danes. Other health issues that can affect the breed include eye and cardiac diseases, hypothyroidism and autoimmune thyroiditis, and hip dysplasia.",
  Grooming: "For most of the year the Great Dane’s short, smooth coat doesn’t shed much, but given the size of the dog, this can still amount to a fair bit of hair. Weekly brushing with a medium-bristle brush, a rubber grooming mitt or tool, or a hound glove will help keep shedding to a minimum.",
  Training: "Early socialization and puppy training classes are recommended. For a breed as large and powerful as the Great Dane, obedience training is a must"
}, {
  Breed: "Kangal Dog",
  Picture: "img/Kangal.jpg",
  Bio: "The Kangal Dog is a large and powerful breed, often used in Turkey to guard against predators. This breed is easily recognized by its massive head, dark muzzle and curled tail which is carried up and over the back. When viewed from the side, the Kangal has a very distinctive silhouette. Despite its massive size, the Kangal Dog is actually very calm and gentle, which makes it a good choice for a family pet – if you have the space to accommodate one. Not only do these dogs get along well with children, but they also act as guard dogs.",
  Health: "The Kangal Dog is typically a healthy breed and, as long as they have been bred responsibly, they do not have many congenital conditions. Like all dogs, however, the Kangal Dog breed is prone to certain minor conditions including benign tumors, entropion and hip dysplasia.",
  Grooming: "The Kangal Dog has a short, dense coat that does not require a great deal of grooming. The coat is generally fawn or tan in color with a black facial mask and black shading on the ears. Some white markings may be allowed on the chest, chin or toes but the coat should not be spotted, brindled or broken.",
  Training: "The Kangal Dog is smart and can be trained to guard livestock as well as property. Because these dogs can become independent and stubborn, however, it is important to start training from a young age. With firm and consistent training, Kangal Dogs typically do well."
}];

searchBar = document.querySelector("#search-bar");
searchButton = document.querySelector("#search-button");
autoSuggestions = document.querySelector("#auto-suggestions");
display = document.querySelector("#display");

searchBar.addEventListener('keyPress', checkKey);
searchButton.addEventListener('click', processInput);

function checkKey(e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    // console.log(“You pressed enter!”);
    processInput();
  }
}

function processInput() {
  cleanedInput = searchBar.value.toLowerCase().trim();
  autoSuggestions.innerHTML = " ";
  autoSuggestions.style.display = "none";
  searchBar = " ";

  let databaseRecord = getRecord(cleanedInput);

  if (databaseRecord != null) {
    displayRecord(databaseRecord);
  } else {
    alert("No results.");
  }

}

function getRecord(cleanedInput) {
  for (let i = 0; i <= database.lenght; i++) {
    let cleanedRecordName = database[i].Breed.toLowerCase().trim();

    if (cleanedInput == cleanedRecordName) {
      return database[i];
    }

  }
  return null;
}

function displayRecord() {
  let recordBreed = document.creatElement("h2"),
    recordPicture = document.creatElement("img"),
    recordBio = document.creatElement("p"),
    recordHealth = document.creatElement("p"),
    recordGromming = document.creatElement("p"),
    recordTraining = document.creatElement("p");

  recordBreed.innerHTML = databaseRecord.Breed;
  recordPicture.innerHTML = databaseRecord.Picture;
  recordBio.innerHTML = databaseRecord.Bio;
  recordHealth.innerHTML = databaseRecord.Health;
  recordGrooming.innerHTML = databaseRecord.Grooming;
  recordTraining.innerHTML = databaseRecord.Training;

  display.appendChild(recordBreed);
  display.appendChild(recordPicture);
  display.appendChild(recordBio);
  display.appendChild(recordHealth);
  display.appendChild(recordGromming);
  display.appendChild(recordGromming);


}
