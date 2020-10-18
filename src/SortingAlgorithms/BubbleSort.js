
// Bubble Sort
export function getBubbleSortAnimation(array) {
    const animations = [];
    let len = array.length
    let auxiliary = array.slice();
    if (len <= 1){
        return array;
    }
    for (let i=0; i< len - 1; i++){
        for (let j = 0; j < len - i -1; j++){
            animations.push([j,auxiliary[j],j+1,auxiliary[j+1]])
            if (auxiliary[j] > auxiliary[j+1]){
                let temp = auxiliary[j+1];
                auxiliary[j+1] = auxiliary[j];
                auxiliary[j] = temp;
                animations.push([j,auxiliary[j],j+1,auxiliary[j+1]]);
            }
            else {
                animations.push([j,auxiliary[j],j+1,auxiliary[j+1]]);
            }
        }
    }
    return animations;
}