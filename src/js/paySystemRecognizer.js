export default function paySystemRecognizer(number){
    const clean = number.replace(/\s*/g, '')
    if(clean.match(/^220[2-4]{6,}$/)){return 'mir'}
    else if(clean.match(/^4[0-9]{6,}$/)){return 'visa'}
    else if(clean.match(/^5[1-5][0-9]{5,}|222[1-9][0-9]{3,}|22[3-9][0-9]{4,}|2[3-6][0-9]{5,}|27[01][0-9]{4,}|2720[0-9]{3,}$/)){return 'mastercard'}
    else if(clean.match(/^3[47][0-9]{5,}$/)){return 'americanexpress'}
    else if(clean.match(/^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/)){return 'dinersclub'}
    else if(clean.match(/^6(?:011|5[0-9]{2})[0-9]{3,}$/)){return 'discover'}
    else if(clean.match(/^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/)){return 'jcb'}
}