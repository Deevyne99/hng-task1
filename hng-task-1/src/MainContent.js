import React from 'react'
import git from '../src/images/git.png'
import slack from '../src/images/slack.png'
const MainContent = () => {
  const twitter = `https://twitter.com/theZuriTeam`
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
              title='twitter link'
              id='twitter__link'
              className='btn'
              href={twitter}
            >
              twitter link
            </a>
          </li>
          <li>
            <a
              title='zuri team link'
              id='btn__zuri'
              className='btn'
              href={trainig}
            >
              Zuri team
            </a>
          </li>
          <li>
            <a title='books' id='books' className='btn' href={books}>
              Zuri books
            </a>
          </li>
          <li>
            <a
              title='python book'
              id='book__python'
              className='btn'
              href={python}
            >
              python books
            </a>
          </li>
          <li>
            <a title='pitch' id='pitch' className='btn' href={background}>
              Background Check for coders
            </a>
          </li>
          <li>
            <a
              title='design book'
              id='book__design'
              className='btn'
              href={design}
            >
              Design Books
            </a>
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
