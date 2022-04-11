import React, {useState} from 'react'
import OddEvenResult from './OddEvenResult';
// 비구조화 할당
const Counter = ({initialValue}) => {

    // 0에서 출발
    // 1씩 증가하고
    // 1씩 감소하는 
    // count 상태

    // [상태의 값, 상태변화 함수] = useState(인자 = 초기값)
    // count state 값이 바뀔때마다 화면을 다시 그려 Counter함수를 리렌더를 한다

    console.log(initialValue) //{initialValue=5, a=1}
    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    }

    const onDecrease = () => {
        setCount(count - 1);
    }

   

    return (
        <div>  
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count}/>
        </div>
    )
}

// undefined넘어올 때 초기값
// 오류방지
Counter.defaultProps={
    initialValue:5,
}
export default Counter