// Function to return current timestamp in YYYYMMDD_HHMMSS format
// used to for file saving
function getCurrentDateTimeString() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

// Return string of the current date in format like Jan 1, 2025
function getFormattedDateString() {
  const now = new Date();
  let options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }
  return now.toLocaleDateString(undefined, options);
}

// PostIt Plots add caption
function addPostItCaption(name, seed, sca) {
  mySvgFont.drawString('seed: ' + seed, 20, 556, sca * 0.75);
  mySvgFont.drawStringRight(name, 556, 536, sca);
  mySvgFont.drawStringRight(getFormattedDateString(), 556, 556, sca);
}
