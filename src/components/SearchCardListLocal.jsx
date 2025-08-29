import { useEffect, useState } from 'react'
import SearchedList from './SearchedList'
import SearchForm from './SearchForm'

export default function SearchCardListServer() {
  const params = new URLSearchParams(window.location.search).get('name')

  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [searchValue, setSearchValue] = useState(params ?? '')

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const fetchController = new AbortController()

    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/users${searchValue ? `?name_like=${searchValue}` : params ? `?name_like=${params}` : ``}`,
          {
            signal: fetchController.signal,
          },
        )

        if (!res.ok) throw new Error('유저 데이터를 찾을 수 없습니다.')
        const usersData = await res.json()
        setUsers(usersData)
      } catch (error) {
        if (error.name === 'AbortError') return
        setError(error)
        console.error(error)
      } finally {
        setLoading(false)
      }
    })()

    return () => {
      fetchController.abort()
    }
  }, [searchValue, params])

  return (
    <article className="px-10 pt-20 pb-40">
      <h1 className="text-5xl font-bold text-center text-green-400 mb-10">
        #유저 찾기
      </h1>
      <SearchForm searchValue={searchValue} onChange={handleInputChange} />
      <SearchedList users={users} error={error} loading={loading} />
    </article>
  )
}
