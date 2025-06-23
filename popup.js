document.getElementById('addCoordBtn').addEventListener('click', () => {
  let x = parseInt(document.getElementById('xCoord').value, 10);
  let y = parseInt(document.getElementById('yCoord').value, 10);
  let interval = parseInt(document.getElementById('interval').value, 10);

  if (!isNaN(x) && !isNaN(y) && !isNaN(interval)) {
    chrome.runtime.sendMessage({
      action: 'addCoordinate',
      x: x,
      y: y,
      interval: interval
    });
  } else {
    alert("Vui lòng nhập tọa độ và thời gian hợp lệ.");
  }
});

document.getElementById('stopBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'stopClicking'
  });
});
