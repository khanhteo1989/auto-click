document.getElementById('startBtn').addEventListener('click', () => {
  let uptime = parseInt(document.getElementById('uptime').value, 10);
  chrome.runtime.sendMessage({
    action: 'startClick',
    x1: 100,  // Example point 1 (x, y)
    y1: 100,  // Example point 1 (x, y)
    x2: 200,  // Example point 2 (x, y)
    y2: 200,  // Example point 2 (x, y)
    uptime: uptime
  });
});

document.getElementById('stopBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'stopClick'
  });
});
