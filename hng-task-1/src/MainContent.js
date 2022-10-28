import React from 'react'
import git from '../src/images/git.png'
import slack from '../src/images/slack.png'
const MainContent = () => {
  const twitter = `https://twitter.com/theZuriTeam`
  const trainig = `https://training.zuri.team`
  const books = `https://books.zuri.team/`
  const python = `https://books.zuri.team/python-for-beginners?ref_id=Anonymous`
  const background = `https://background.zuri.team`
  const design = `https://books.zuri.team/design-rules`
  return (
    <section className='section-links'>
      <div className='links-container'>
        <ul className='links'>
          <li>
            <a className='btn' href={twitter}>
              twitter link
            </a>
          </li>
          <li>
            <a className='btn' href={trainig}>
              Zuri team
            </a>
          </li>
          <li>
            <a className='btn' href={books}>
              Zuri books
            </a>
          </li>
          <li>
            <a className='btn' href={python}>
              python books
            </a>
          </li>
          <li>
            <a className='btn' href={background}>
              Background Check for coders
            </a>
          </li>
          <li>
            <a className='btn' href={design}>
              Design Books
            </a>
          </li>
        </ul>
      </div>
      <div className='image-icons'>
        <img src={git} alt='' />
        <img src={slack} alt='' />
      </div>
    </section>
  )
}
export default MainContent
