export default function Button({ children, onClick, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={` w-50  text-white bg-gray-800 cursor-pointer hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:ring-gray-600 ${className}`}
        >
            {children}
        </button>
    );
}
