import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div>
            <h1>Oops</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}