import { NavLink } from "react-router"
import { use } from "react"

const categoryPromise = fetch('/categories.json').then(res => res.json())
export default function LeftBar() {
  const categories = use(categoryPromise)
  return (
    <div>
      <h3 className="font-bold mb-3">Categories({categories.length})</h3>

        <div className="grid grid-cols-1 gap-2">
          {
          categories.map(item => <NavLink className=" btn  bg-base-100 border-none shadow-xs hover:bg-base-200"  key={item.id} to={`categories/${item.id}`}>{item.name}</NavLink>)
        }
        </div>
    </div>
  )
}
