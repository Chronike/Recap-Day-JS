function extractClassName(sessionTitle) {
  const month = {
    Januar: "01",
    Febraur: "02",
    Maerz: "03",
    März: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };
  const arr = sessionTitle.split(" ");
  if (
    sessionTitle.includes("Live-Session Class") &&
    arr[2].length === 4 &&
    arr[3] in month
  ) {
    return arr[2] + "-" + month[arr[3]];
  } else {
    return null;
  }
}
