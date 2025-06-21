import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black dark:bg-gray-900 dark:text-white">
            <Navbar />
            <main className="flex-1 flex items-center justify-center">
                {children}
            </main>
        </div>
    )
}

export default Layout