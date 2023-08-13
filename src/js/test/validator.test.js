import validateCardNumber from "../Validator";

test('shoud return false', ()=> {
    const res = validateCardNumber('4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  4')
    expect(res).toBe(false)
})

test('shoud return true', ()=> {
    const res = validateCardNumber('4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7')
    expect(res).toBe(true)
})