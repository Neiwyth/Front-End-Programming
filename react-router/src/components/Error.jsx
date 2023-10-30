import { useRouteError } from "react-router-dom"

function Error() {

    const error = useRouteError();

    return (

        <div>
            <h1>{error.status} {error.statusText}</h1>
            <p>{error.data}</p>
        </div>
    )
}

export default Error