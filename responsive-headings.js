var h1Tags = {
  westchester: {
    text: "Trash Can Cleaning Service in Westchester",
    phoneSize: 25,
    tabletSize: 35,
    desktopSize: 55
  },
  // Add more pages as needed
};

function generateH1(id) {
  var h1Data = h1Tags[id];
  var h1Element = document.createElement("h1");
  h1Element.textContent = h1Data.text;

  var screenSize = window.innerWidth;
  if (screenSize < 768) {
    h1Element.style.fontSize = h1Data.phoneSize + "px";
  } else if (screenSize >= 768 && screenSize <= 1349) {
    h1Element.style.fontSize = h1Data.tabletSize + "px";
  } else {
    h1Element.style.fontSize = h1Data.desktopSize + "px";
  }

  h1Element.id = id;
  document.getElementById(id).appendChild(h1Element);
}

generateH1("westchester");
