export default function sortArr(inputArr) {
    inputArr.sort((a, b) => {return b.id - a.id});
}