import { use } from "react"

export default function LeftBar({categoryPromise}) {
  const categories = use(categoryPromise)
  return (
    <div>

      <h3 className="font-bold mb-3">Categories({categories.length})</h3>
      <ul>
        {
          categories.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}
