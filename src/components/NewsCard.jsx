import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

export default function NewsCard({ news }) {
  // Safe destructuring with fallback values
  const {
    title,
    author,
    total_view,
    rating,
    thumbnail_url,
    details,
    tags,
    others,
  } = news || {};

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden max-w-xl mx-auto my-4">
      
      {/* 1. Header Section: Author Info & Action Buttons */}
      <div className="flex items-center justify-between p-4 bg-base-200/50">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-base-content">
              {author?.name}
            </h4>
            <p className="text-xs text-base-content/60">
              {author?.published_date
                ? new Date(author.published_date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "No date"}
            </p>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 text-base-content/70">
          <button className="btn btn-ghost btn-xs btn-circle hover:text-primary">
            <FaRegBookmark className="text-base" />
          </button>
          <button className="btn btn-ghost btn-xs btn-circle hover:text-primary">
            <FaShareAlt className="text-base" />
          </button>
        </div>
      </div>

      {/* 2. Main Title */}
      <div className="px-5 pt-4">
        <h2 className="card-title text-lg md:text-xl font-bold hover:text-primary transition-colors cursor-pointer">
          {title}
        </h2>
      </div>

      {/* 3. Media & Badges Section */}
      <figure className="px-5 py-3 relative">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full h-56 object-cover"
        />
        
        {/* Dynamic Badges */}
        <div className="absolute top-5 left-7 flex gap-2">
          {others?.is_trending && (
            <span className="badge badge-error text-white font-medium text-xs shadow-sm">
              Trending
            </span>
          )}
          {others?.is_today_pick && (
            <span className="badge badge-primary font-medium text-xs shadow-sm">
              Today's Pick
            </span>
          )}
        </div>
      </figure>

      {/* 4. Details Body & Tags */}
      <div className="px-5 pb-3">
        <p className="text-sm text-base-content/80 line-clamp-3 leading-relaxed">
          {details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium text-primary hover:underline cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="divider my-0 px-5"></div>

      {/* 5. Footer Section: Rating & Total Views */}
      <div className="flex items-center justify-between px-5 py-3 bg-base-100">
        
        {/* Rating */}
        <div className="flex items-center gap-1.5 text-warning">
          <div className="flex text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(rating?.number || 0)
                    ? "text-amber-400"
                    : "text-base-300"
                }
              />
            ))}
          </div>
          <span className="text-xs font-bold text-base-content/80">
            {rating?.number}
          </span>
        </div>

        {/* Total Views */}
        <div className="flex items-center gap-1.5 text-base-content/70 text-xs">
          <FaEye className="text-sm" />
          <span className="font-semibold">{total_view?.toLocaleString()}</span>
        </div>

      </div>
    </div>
  );
}
