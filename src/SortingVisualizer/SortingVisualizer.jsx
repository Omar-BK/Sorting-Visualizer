import React from 'react';
import './SortingVisualizer.css';
import { getMergeSortAnimation } from '../SortingAlgorithms/MergeSort';
import { getBubbleSortAnimation } from '../SortingAlgorithms/BubbleSort';
import { getQuickSortAnimation } from '../SortingAlgorithms/QuickSort';
import { getHeapSortAnimation } from '../SortingAlgorithms/HeapSort';

let sorted = false;


// Ideal size is 230
const size = 230;

const time = 10;
 
export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        if (sorted){
            const arrayBars = document.getElementsByClassName('array-bar')
            for (let i = 0; i < arrayBars.length;i++ ){
                arrayBars[i].style.backgroundColor = 'turquoise';
            }
        }
        sorted = false;
        const array = [];
        for (let i = 0; i < size; i++){
            array.push(randomInt())
        }
        this.setState({array});
    }

    mergeSort() {
        if (!sorted){
            const animations = getMergeSortAnimation(this.state.array);
            for (let i = 0; i < animations.length; i++){
                const arrayBars = document.getElementsByClassName('array-bar')
                const isColorChange = i%3 !== 2;
                if (isColorChange){
                    const [barOneIdx,barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    const color = i%3 === 0 ? 'red' : 'turquoise';
                    setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;  
                    }, i*time);
                }
                else {
                    setTimeout(() => {
                    const [barOneIdx,newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                    }, i*time);
                }
                if (i === animations.length -1){
                    setTimeout(() => {
                        for (let i = 0; i < arrayBars.length; i++){
                            arrayBars[i].style.backgroundColor = 'purple';
                        }
                        sorted = true;
                        }, i*time);
                }
            }
        }
    }

    bubbleSort() {
        if (!sorted){
            const animations = getBubbleSortAnimation(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar')
            for (let i = 0; i < animations.length; i++){
                    const [barOneIdx,barOneVal,barTwoIdx,barTwoVal] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    if (i%2 === 0){
                        setTimeout(() => {
                            barOneStyle.backgroundColor = 'red';
                            barTwoStyle.backgroundColor = 'red';
                            }, i*time);
                    }
                    else{
                    setTimeout(() => {
                    barOneStyle.height = `${barOneVal}px`;
                    barTwoStyle.height = `${barTwoVal}px`;
                    barOneStyle.backgroundColor = 'turquoise';
                    barTwoStyle.backgroundColor = 'turquoise';  
                    }, i*time);
                    }
                    if (i === animations.length -1){
                        setTimeout(() => {
                            for (let i = 0; i < arrayBars.length; i++){
                                arrayBars[i].style.backgroundColor = 'purple';
                            }
                            sorted = true;
                            }, i*time);
                    }
            }
        }
    }

    quickSort() {
        if (!sorted){
            const animations = getQuickSortAnimation(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar')
            for (let i = 0; i < animations.length; i++){
                    const [barOneIdx,barOneVal,barTwoIdx,barTwoVal] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    if (i%2 === 0){
                        setTimeout(() => {
                            barOneStyle.backgroundColor = 'red';
                            barTwoStyle.backgroundColor = 'red';
                            }, i*time);
                    }
                    else{
                    setTimeout(() => {
                    barOneStyle.height = `${barOneVal}px`;
                    barTwoStyle.height = `${barTwoVal}px`;
                    barOneStyle.backgroundColor = 'turquoise';
                    barTwoStyle.backgroundColor = 'turquoise';  
                    }, i*time);
                    }
                    if (i === animations.length -1){
                        setTimeout(() => {
                            for (let i = 0; i < arrayBars.length; i++){
                                arrayBars[i].style.backgroundColor = 'purple';
                            }
                            sorted = true;
                            }, i*time);
                    }
            }
        }
    }

    heapSort() {
        if (!sorted){
            const [animations,test] = getHeapSortAnimation(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar')
            for (let i = 0; i < animations.length; i++){
                const [barOneIdx,barOneVal,barTwoIdx,barTwoVal] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                if (i%2 === 0){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = 'red';
                        barTwoStyle.backgroundColor = 'red';
                        }, i*time);
                }
                else{
                setTimeout(() => {
                barOneStyle.height = `${barOneVal}px`;
                barTwoStyle.height = `${barTwoVal}px`;
                barOneStyle.backgroundColor = 'turquoise';
                barTwoStyle.backgroundColor = 'turquoise';  
                }, i*time);
                }
                if (i === animations.length -1){
                    setTimeout(() => {
                        this.helper(test);
                        }, i*time);
                }
        }
    }
}

helper(animations){
    const arrayBars = document.getElementsByClassName('array-bar')
    for (let i = 0; i < animations.length; i++){
        const [barOneVal,barOneIdx] = animations[i];
         const barOneStyle = arrayBars[size-1-barOneIdx].style;
        if (i%2 === 0){
            setTimeout(() => {
                barOneStyle.backgroundColor = 'red';
                }, i*time);
        }
        else{
            setTimeout(() => {
            barOneStyle.height = `${barOneVal}px`;
            barOneStyle.backgroundColor = 'turquoise';
            }, i*time);
        }
        if (i === animations.length -1){
            setTimeout(() => {
                for (let i = 0; i < arrayBars.length; i++){
                    arrayBars[i].style.backgroundColor = 'purple';
                }
                sorted = true;
                }, i*time);
        }
    }
}

render () {
    const {array} = this.state;

    return (
        <div className = "array-container">
        {array.map((value, idx) => (
        <div className = "array-bar" 
        key={idx}
        style = {{backgroundColor: 'turquoise',height: `${value}px`,}}></div>
        ))}
        <button onClick = { () => this.resetArray()}>Generate New Array</button>
        <button onClick = { () => this.mergeSort()}>Merge Sort</button>
        <button onClick = { () => this.bubbleSort()}>Bubble Sort</button>
        <button onClick = { () => this.quickSort()}>Quick Sort</button>
        <button onClick = { () => this.heapSort()}>HeapSort</button>
    </div>
    );
        }
}

function randomInt(){
    return Math.floor(Math.random()*720) + 1;
}