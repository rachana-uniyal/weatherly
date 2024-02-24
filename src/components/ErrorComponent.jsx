
const ErrorComponent = () => {
    return (
        <div className="p-4 md:p-8 m-4 md:m-8 bg-red-100 border border-red-400 text-red-700 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> Something Went Wrong, Please try again after some time.</span>
        </div>
    )
}

export default ErrorComponent;
