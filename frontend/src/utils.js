export const tracer = label => value => {
    console.log(`${label} : ${value}`)
    return value
}

export const tracerTable = label => lista => {
    console.log(label)
    console.table(lista)
    return lista
}
