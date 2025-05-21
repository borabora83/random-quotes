function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('Error: key must be a string');
    return;
  }
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

// Удалить значение по ключу
function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

// Очистить всё хранилище
function localStorageClear() {
  localStorage.clear();
}

// Экспортируем все функции
export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
