const cipherModule = (function () {
  let keys = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
  return {
    encrypt: function (text) {
      for (let key in keys) {
        text = text.replaceAll(key, keys[key]);
      }
      return text;
    },
    decrypt: function (text) {
      for (let key in keys) {
        text = text.replaceAll(keys[key], key);
      }
      return text;
    },
  };
})();

export default cipherModule;
