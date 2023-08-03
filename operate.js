
let fileHandle;

const newFile = () => {
  fileHandle = null;
  setText('');
  setHeader('Untitled.txt');
};

const openFile = async () => {
  fileHandle = await getFileHandle();
  const content = await readFile(fileHandle);
  setText(content);
  setHeader(fileHandle.name);
};

const saveAs = async () => {
  fileHandle = await getNewFileHandle();
  await writeFile(fileHandle, getText());
  setHeader(fileHandle.name);
};

const save = async () => {
  if (!fileHandle) {
    return await saveAs();
  }
  await writeFile(fileHandle, getText());
};
