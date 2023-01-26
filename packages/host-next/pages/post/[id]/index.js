import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header'

export default function PostPage() {
  const router = useRouter()
  const id = router.query.id

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href={`/table/${id}/first-comment`}>First comment</Link>
        </li>
        <li>
          <Link href={`/table/${id}/second-comment`}>Second comment</Link>
        </li>
      </ul>
    </>
  )
}
