import { useCount} from '../redux/counterRedux'

export const Page2 = () => {
    const counter = useCount()
    console.log(counter)
    console.log("page two is re-rendering based on counter")
    return(
        <div>
            page2
        </div>
    )
}