import {DummyDatabase} from "@/DummyDatabase";
import {getOptions} from "@/utils/getRandomWord";


export default function Dictionary() {
    return (
        <>
            <h1>Hello World</h1>
            {console.log(getOptions())}

        </>
    )
}