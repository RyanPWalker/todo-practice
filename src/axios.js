const list = ["butter", "milk", "eggs"];

export default () =>
  new Promise(resolve => setTimeout(() => resolve(list), 1000));
