
export const setLocal = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))
}
export const getLocal = (key)=>{
    let _value = localStorage.getItem(key);
    return _value===0?0:(!!_value?JSON.parse(_value):null)
}
export const clearLocal = (key)=>{
    localStorage.removeItem(key);
}
export const setSess = (key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value))
}
export const getSess = (key)=>{
    let _value = sessionStorage.getItem(key);
    return _value===0?0:(!!_value?JSON.parse(_value):null)
}
export const clearSess = (key)=>{
    sessionStorage.removeItem(key);
}

