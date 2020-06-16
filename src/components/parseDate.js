export default function parseDate(input) {
    const yearText = input.slice(0, 4);
    const monthText = input.slice(5, 7);
    const dayText = input.slice(8);
    const id = yearText + monthText + dayText;
    return Number.parseInt(id, 10);
}