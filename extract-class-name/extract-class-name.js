function extractClassName(sessionTitle) {
  let nArr = [];
  const month = {
    Januar: 1,
    Febraur: 2,
    Maerz: 3,
    März: 3,
    April: 4,
    Mai: 5,
    Juni: 6,
    Juli: 7,
    August: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Dezember: 12,
  };
  if (sessionTitle.includes("Live-Session Class")) {
    nArr = sessionTitle.split(" ");
  } else {
    return null;
  }

  if (nArr[2].length === 4) {
    if (nArr[3] in month) {
      return nArr[2] + "-0" + month[nArr[3]];
    } else {
      return null;
    }
  } else {
    return null;
  }
}


/*
Das months-Objekt enthält die Namen der Monate und ihre entsprechenden Nummern (z.B., "Januar" entspricht "01"). Dieses Objekt wird verwendet, um den Monat im Titel mit seiner Nummer abzugleichen.

Ein leeres Array arr wird initialisiert, in dem wir später Teile des Titels speichern werden.

Die if-Bedingung überprüft, ob der Sitzungstitel den Text "Live-Session Class" enthält. Wenn dies nicht der Fall ist, wird null zurückgegeben, da der Titel nicht dem erwarteten Format entspricht.

Wenn der Titel "Live-Session Class" enthält, wird er mit dem Leerzeichen als Trennzeichen in Wörter aufgeteilt, und die Wörter werden im Array arr gespeichert.

Es wird überprüft, ob das dritte Wort im Array (Index 2) genau vier Zeichen (Jahreszahl) hat. Wenn dies nicht der Fall ist, wird null zurückgegeben, da das Jahr nicht korrekt formatiert ist.

Es wird geprüft, ob das vierte Wort im Array (Index 3) ein gültiger Monatsname ist, indem überprüft wird, ob es im months-Objekt als Schlüssel existiert. Wenn dies der Fall ist, wird der Klassenname im "YYYY-MM"-Format erstellt und zurückgegeben.

Falls das vierte Wort im Titel kein gültiger Monatsname ist oder der Titel nicht dem erwarteten Format entspricht, wird null zurückgegeben.

Zusammengefasst extrahiert diese Funktion das Klassenname-Datum aus einem Sitzungstitel, wenn der Titel das erwartete Format hat, andernfalls wird null zurückgegeben.