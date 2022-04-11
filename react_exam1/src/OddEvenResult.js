// 리렌더 되는 때
// 1. 본인의 state가 바뀔 때
// 2. 나에게 내려오는 props값이 바뀔때
// 3. 부모 요소가 바뀔 때 자식 요소도 같이 render됨
const OddEvenResult = ({count}) => {
    console.log(count)
    return (
        <>{count % 2 === 0 ? "짝수" : "홀수"}</>
    )
}

export default OddEvenResult