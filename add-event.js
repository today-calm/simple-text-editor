const newBtn = document.querySelector('#new');
const openBtn = document.querySelector('#open');
const saveBtn = document.querySelector('#save');
const saveAsBtn = document.querySelector('#saveAs');

newBtn.addEventListener('click', newFile);
openBtn.addEventListener('click', openFile);
saveBtn.addEventListener('click', save);
saveAsBtn.addEventListener('click', saveAs);
