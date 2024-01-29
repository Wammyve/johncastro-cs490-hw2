import { Metadata } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
        <h1>Home Page</h1>
        <p>
          This home page is super epic
        </p>
        <ArticlesCell />
    </>
  )
}

export default HomePage
