(function () {

    var names = ["Huynh", "Jump", "Jeee", "jos", "Paul", "justin", "Beau", "Victoria"];
  
    names.forEach(function (name) {
      var firstLetter = name.charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker(name);
      } else {
        helloSpeaker(name);
      }
    });
  
  })();
    