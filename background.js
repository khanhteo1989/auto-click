let clickTimers = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'addCoordinate') {
    addCoordinate(message.x, message.y, message.interval);
  } else if (message.action === 'stopClicking') {
    stopClicking();
  }
});

function addCoordinate(x, y, interval) {
  let intervalInMillis = interval * 60000;  // Chuyển đổi phút sang mili giây
  let clickTimer = setInterval(() => {
    clickAtCoordinate(x, y);
  }, intervalInMillis);
  
  clickTimers.push(clickTimer);
}

function clickAtCoordinate(x, y) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        let element = document.elementFromPoint(${x}, ${y});
        if (element) {
          element.click();
        }
      `
    });
  });
}

function stopClicking() {
  clickTimers.forEach(timer => clearInterval(timer));
  clickTimers = [];
}
