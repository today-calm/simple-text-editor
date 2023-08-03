const getFileHandle = async () => {
  const [handle] = await window.showOpenFilePicker();
  return handle;
};

const getNewFileHandle = async () => {
  const options = {
    types: [
      {
        description: '文本类型',
        accept: {
          'text/plain': ['.txt'],
        },
      },
    ],
  };

  const handle = await window.showSaveFilePicker(options);
  return handle;
};

const readFile = async (handle) => {
  const file = await handle.getFile();
  const content = await file.text();
  return content;
};

const writeFile = async (handle, content) => {
  const stream = await handle.createWritable();
  await stream.write(content);
  await stream.close();
};
