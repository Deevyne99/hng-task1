import React from 'react'
import git from '../images/git.png'
import slack from '../images/slack.png'
import { Link } from 'react-router-dom'
const MainContent = () => {
  const twitter = `https://twitter.com/kaluDivine15`
  const trainig = `https://training.zuri.team`
  const books = `https://books.zuri.team/`
  const python = `https://books.zuri.team/python-for-beginners?ref_id=Anonymous911`
  const background = `https://background.zuri.team`
  const design = `https://books.zuri.team/design-rules`
  return (
    <section className='section-links'>
      <div className='links-container'>
        <ul className='links'>
          <li>
            <a
              title='Twitter'
              id='twitter__link'
              className='btn'
              href={twitter}
            >
              twitter link
            </a>
          </li>
          <li>
            <a title='zuri Team' id='btn__zuri' className='btn' href={trainig}>
              Zuri team
            </a>
          </li>
          <li>
            <a title='Books' id='books' className='btn' href={books}>
              Zuri books
            </a>
          </li>
          <li>
            <a
              title='Python book'
              id='book__python'
              className='btn'
              href={python}
            >
              python books
            </a>
          </li>
          <li>
            <a
              title='We Provide the best background check for coders'
              id='pitch'
              className='btn'
              href={background}
            >
              Background Check for coders
            </a>
          </li>
          <li>
            <a
              title='Design Book'
              id='book__design'
              className='btn'
              href={design}
            >
              Design Books
            </a>
          </li>
          <li>
            <Link
              title='Design Book'
              id='contact'
              className='btn'
              to='/contact'
            >
              contact me
            </Link>
          </li>
        </ul>
      </div>
      <div className='image-icons'>
        <img src={git} alt='git logo' />
        <img src={slack} alt='slack logo' />
      </div>
    </section>
  )
}
export default MainContent
