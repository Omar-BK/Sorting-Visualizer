// Heap Sort

export function getHeapSortAnimation(array){
    const animations = [];
    const len = array.length;
    let auxiliary = array.slice();
    let pq = [];
    if (len <= 1){
        return animations;
    }
    for (let i = len -1; i >= 0; i--){
        pushHeap(auxiliary[i],pq,animations);
    }
    let test = [];
    let idx = 0;
    for (let i = 0; i< len; i++){
        test.push([dequeue(pq),idx]);
        test.push([test[test.length-1][0],idx]);
        idx++;
    }
    return [animations,test];
}

function pushHeap(elem,pq,animations){
    pq.push(elem);
    let idx = pq.length - 1;
    while (idx !== 0 && pq[Math.floor((idx-1)/2)] < elem){
        animations.push([idx,pq[idx],Math.floor((idx-1)/2),pq[Math.floor((idx-1)/2)]]);
        swap(pq,idx,Math.floor((idx-1)/2));
        animations.push([idx,pq[idx],Math.floor((idx-1)/2),pq[Math.floor((idx-1)/2)]]);
        idx = Math.floor((idx-1)/2);
    }
    return pq;
}

function dequeue(pq){
    const len = pq.length-1;
    swap(pq,len,0);
    const retval = pq.pop();
    let idx = 0; 
    let L = 2*idx + 1;
    let R = 2*idx + 2;
    while (L <= len && (pq[idx] < pq[L] || pq[idx] < pq[R])){
        if (pq[L] < pq[R]){
            swap(pq,R,idx);
            idx = R;
        }
        else {
            swap(pq,L,idx);
            idx = L;
        }
        L = 2*idx + 1;
        R = 2*idx + 2;
    }
    return retval;
}

function swap(array,first,second){
    let holder = array[first];
    array[first] = array[second];
    array[second] = holder;
}
