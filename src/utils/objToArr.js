/**
 * @param {obj} : {key: {key1: value1, ... }}, {key: {key1: value1, ... }}, (...)
 * @param keyname : obj 최상단 key 값의 keyname으로 지정할 값
 * @returns [{keyname: key, key1: value1, ...} , {keyname: key, key1: value1, ...}, (...)]
 */

export default function objToArr(obj, keyname) {
  const arr = [];

  for (const key in obj) {
    const newObj = { [keyname]: key, ...obj[key] };
    arr.push(newObj);
  }

  return arr;
}
