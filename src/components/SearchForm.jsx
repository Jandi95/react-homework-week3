export default function SearchForm({ searchValue, onChange }) {
  const searchInputID = crypto.randomUUID()

  return (
    <form method="GET" action="/">
      <h2 className="sr-only">유저 검색 영역</h2>
      <div className="flex items-center rounded-full py-1 px-2 shadow-md focus-within:shadow-lg transition-shadow bg-[#2e2e2e] mb-15 max-w-[460px] mx-auto">
        <label htmlFor={searchInputID} className="sr-only">
          검색어 입력
        </label>
        <input
          id={searchInputID}
          type="text"
          placeholder="유저 이름 검색"
          name="name"
          className="w-full h-12 pl-5 focus:outline-0 text-lg"
          value={searchValue}
          onChange={onChange}
        />
        <button
          type="submit"
          aria-label="검색"
          className={`w-12 aspect-square flex items-center justify-center transition-colors rounded-full shrink ${searchValue ? `bg-green-400` : `bg-[#222222]`}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-6"
          >
            <path
              fill="white"
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}
