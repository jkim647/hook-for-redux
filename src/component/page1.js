import { useCount, inc, add, reset } from '../redux/counterRedux'

export const Page1 = () => {
    const count = useCount()
    console.log("page one is re-rendering based on counter")
    return (
        <div>
            <button onClick={inc}>Increase by 1</button>
            <button onClick={() => add(10)}>Increase by 10</button>
            <button onClick={reset}>Reset</button>
            <p>Welcome to hook for redux</p>
            {count}
        </div>
    )
}