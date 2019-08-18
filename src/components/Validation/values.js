export function validateInput(val) {
    return (val.length > 0 && !isNaN(val));
}