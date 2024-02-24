const ErrorComponent = () => {
    return (
        <div className=" p-8 m-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> Something Went Wrong, Please try again after some time.</span>
        </div>
    );
};

export default ErrorComponent;