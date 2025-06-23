document.addEventListener('click', (event) => {
  // Bạn có thể thay đổi để click vào các điểm khác nhau nếu cần
  chrome.runtime.sendMessage({
    action: 'startClick',
    x1: event.clientX, 
    y1: event.clientY,
    x2: event.clientX + 100, // Giả sử điểm thứ 2 cách điểm đầu 100px
    y2: event.clientY + 100, // Giả sử điểm thứ 2 cách điểm đầu 100px
    uptime: 2000 // thời gian giữa mỗi lần click (ms)
  });
});
