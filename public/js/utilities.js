const onlyCurrency = (e) => {
    const code = e.keyCode;
    const key = String.fromCharCode(code);
    if (!/[\d.]/.test(key))  e.preventDefault()
    if (key === '.' && e.target.value.includes('.')) e.preventDefault()

}

const onlyNumber = (e) => {
    if (e.keyCode < 48 || e.keyCode > 57)  e.preventDefault()
}
