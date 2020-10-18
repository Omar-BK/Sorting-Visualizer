// Merge Sort
export function getMergeSortAnimation(array) {
    const animations = [];
    if(array.length <=1){
        return array;
    }
    const auxiliaryArray = array.slice();
    MergeSortHelper(array,auxiliaryArray,0,array.length-1,animations);
    return animations;
}

function MergeSortHelper(
    array,
    auxiliaryArray,
    startIdx,
    endIdx,
    animations
    ){
    if (startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx)/2);
    MergeSortHelper(auxiliaryArray,array,startIdx,midIdx,animations);
    MergeSortHelper(auxiliaryArray,array,midIdx+1,endIdx,animations);
    doMerge(array,auxiliaryArray,startIdx,midIdx,endIdx,animations);
}    

function doMerge(
    array,
    auxiliaryArray,
    startIdx,
    midIdx,
    endIdx,
    animations
){
    let k = startIdx;
    let i = startIdx;
    let j = midIdx + 1;
    while (i <= midIdx && j <= endIdx){
        for (let idx = 0; idx < 2; idx++){
        animations.push([i,j]);
        }
        if (auxiliaryArray[i] <= auxiliaryArray[j]){
            animations.push([k,auxiliaryArray[i]]);
            array[k++] = auxiliaryArray[i++];
        }
        else {
            animations.push([k,auxiliaryArray[j]]);
            array[k++] = auxiliaryArray[j++];
        }
    }
    while(i <= midIdx){
        for (let idx = 0; idx < 2; idx++){
            animations.push([i,i]);
        }
        animations.push([k,auxiliaryArray[i]]);
        array[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx){
        for (let idx = 0; idx < 2; idx ++){
            animations.push([j,j]);
        }
        animations.push([k,auxiliaryArray[j]]);
        array[k++] = auxiliaryArray[j++];
    }
}   

