// Quick Sort

export function getQuickSortAnimation(array){
    const animations = [];
    const len = array.length;
    let auxiliary = array.slice();
    if (len <= 1){
        return animations;
    }
    sortRange(auxiliary,0,len,animations);
    return animations;
}

function sortRange(array,lower,upper,animations){
    if (lower < upper){
        const pivotIndex = partition(array,lower,upper,animations);
        sortRange(array,lower,pivotIndex,animations);
        sortRange(array,pivotIndex+1,upper,animations);
    }
}

function partition(array, lower, upper,animations){
    let pivot = array[upper-1];
    let mid = lower - 1;
    for (let i = lower; i < upper -1; i++){
        animations.push([i,array[i],upper - 1,pivot]);
        if (array[i] <= pivot){
            mid +=1;;
            swap(array,mid,i);
            animations.push([i,array[i],mid,array[mid]]);
        }
        else {
            animations.push([i,array[i],i,array[i]]);
        }
    }
    animations.push([mid+1,array[mid+1],upper-1,array[upper-1]]);
    swap(array,mid+1,upper-1);
    animations.push([mid+1,array[mid+1],upper-1,array[upper-1]]);
    return mid+1;
}

function swap(array,first,second){
    let holder = array[first];
    array[first] = array[second];
    array[second] = holder;
}