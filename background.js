let clickTimer;
let clickCount = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startClick') {
    startClicking(message.x1, message.y1, message.x2, message.y2, message.uptime);
  } else if (message.action === 'stopClick') {
    stopClicking();
  }
});

function startClicking(x1, y1, x2, y2, uptime) {
  clickCount = 0; // Reset click count each time it starts

  clickTimer = setInterval(() => {
    clickCount++;
    
    if (clickCount % 2 === 1) {
      clickAt(x1, y1);
    } else {
      clickAt(x2, y2);
    }
    
  }, uptime);
}

function clickAt(x, y) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `
        let element = document.elementFromPoint(${x}, ${y});
        if (element) element.click();
      `
    });
  });
}

function stopClicking() {
  if (clickTimer) {
    clearInterval(clickTimer);
  }
}
