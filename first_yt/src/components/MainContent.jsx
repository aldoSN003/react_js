import "./../index.css"
export default function MainContent() {
    return (
        <main className="content-container p-6 ml-5 mt-10  ">
            <h1>Fun Facts about React</h1>

            <ul className="mt-4 facts-list ">
                <li>React is a JavaScript library for building user interfaces.</li>
                <li>It was developed by Facebook and is maintained by Facebook and a community of individual
                    developers.
                </li>
                <li>React uses a virtual DOM to optimize rendering performance.</li>
                <li>Components are the building blocks of React applications.</li>
            </ul>

        </main>
    );
}
