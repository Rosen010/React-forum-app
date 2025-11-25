import Categories from "./components/categories/Categories"
import Navigation from "./components/navigation/Navigation"
import Posts from "./components/posts/Posts"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100">

        <Navigation />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Categories />

            <Posts />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
