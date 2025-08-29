import { useEffect, useState } from 'react'
import SearchedList from './SearchedList'
import SearchForm from './SearchForm'

export default function SearchCardListLocal() {
  const params = new URLSearchParams(window.location.search)
  const queryName = params.get('name') ?? ''

  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const [searchValue, setSearchValue] = useState(queryName)

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchValue(value)

    const newParams = new URLSearchParams(window.location.search)
    if (value) {
      newParams.set('name', value)
    } else {
      newParams.delete('name')
    }
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${newParams}`,
    )
  }

  useEffect(() => {
    const fetchController = new AbortController()

    setLoading(true)
    setError(null)
    ;(async () => {
      try {
        const res = await fetch('/user-data.json', {
          signal: fetchController.signal,
        })

        if (!res.ok) throw new Error('유저 데이터를 찾을 수 없습니다.')
        const usersData = await res.json()

        const filteredData = queryName
          ? usersData.filter((user) => user.name.includes(queryName))
          : usersData

        setUsers(filteredData)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err)
      } finally {
        setLoading(false)
      }
    })()

    return () => {
      fetchController.abort()
    }
  }, [queryName])

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
