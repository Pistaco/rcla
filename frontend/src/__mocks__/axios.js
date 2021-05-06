
const JEST = {
    get: jest.fn(() => Promise.resolve({data: []}))
}

export default {
    get: () => Promise.resolve({data:[]}),
    post: () => Promise.resolve({data:[]})
}