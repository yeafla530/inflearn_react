//component도 props할수 있음
// component를 component로 감싸기

const Container = ({children}) => {
    console.log(children)
    return (
        <div style={{margin:20, padding: 20, border: "1px solid black"}}>
            {children}
        </div>
    )
}

export default Container