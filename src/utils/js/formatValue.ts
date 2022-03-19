export type TFormatValue = 'string' | 'number' | 'boolean' | 'date'

export const formatValue = (value: any, type: TFormatValue) => {
    if (type === 'number') {
        let number = value
        let [whole, decimal] = String(number).split('.')
    
        let reversed = whole.split('').reverse().join('')
        let arr = []
        for (let i=0; i < reversed.length; i=i+3) {
            arr.push(reversed.substring(i, i+3).split('').reverse().join(''))
        }
        
        // const valueToReturn = decimal ? arr.reverse().join(' ') + '<span class="bold-comma">,</span>' + decimal : arr.reverse().join(' ') 
        const valueToReturn = decimal ? arr.reverse().join(' ') + ',' + decimal : arr.reverse().join(' ') 
        return valueToReturn 
    } 
    // if (type === 'boolean') return !!value ? 'Да' : 'Нет'

    return value
}