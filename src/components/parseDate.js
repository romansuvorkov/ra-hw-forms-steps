export default function parseDate(input) {
    const dayText = input.slice(0, 2);
    const monthText = input.slice(3, 5);
    const yearText = input.slice(6);
    const id = yearText + monthText + dayText;
    return Number.parseInt(id, 10);

}