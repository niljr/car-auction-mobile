export default function formatMoney(price) {
    const fomatter = new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'PHP',
    })
    return fomatter.format(price);
}