async function init() {
  let rustApp = null;

  try {
    rustApp = await import('../pkg');
  } catch (error) {
    console.error(error);
    return;
  }
  const input = document.getElementById('upload');
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const file = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    );
    const image = rustApp.grayscale(file);
    document.getElementById('new-img').setAttribute('src', image);
  };

  input.addEventListener('change', () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}
init();
