import Card from './Card'

export default function SearchedList({ users, error, loading }) {
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <img src="/spinner.svg" alt="로딩 중" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center">
        <h3>{error.name}</h3>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <section>
      <h2 className="sr-only">유저 목록</h2>
      <ul className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        {users?.length === 0 ? (
          <li className="text-center w-full text-2xl">
            검색된 유저가 없습니다.
          </li>
        ) : (
          users?.map((user) => (
            <li key={user.id} className="max-w-[400px]">
              <Card user={user} />
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
