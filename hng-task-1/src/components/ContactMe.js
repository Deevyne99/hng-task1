import React, { useEffect, useState } from 'react'

const ContactMe = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isChecked: false,
  })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
    }
  }, [formErrors])
  const handleChange = (event) => {
    const { name, type, checked, value } = event.target
    setData((prevstate) => {
      return { ...prevstate, [name]: type === 'checkbox' ? checked : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(data))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = ' Please enter your first name'
    }
    if (!values.lastName) {
      errors.lastName = ' Please enter your last Name'
    }
    if (!values.email) {
      errors.email = ' Please enter your email'
    }
    if (!values.message) {
      errors.message = ' Please enter your message'
    }
    return errors
  }
  return (
    <section className='contact-container'>
      <h2>Contact me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className='form' onSubmit={handleSubmit}>
        <div className='input-container'>
          <div className='input-box'>
            <div className='form-control'>
              <label htmlFor='first_name'>first name</label>
              <input
                type='text'
                name='firstName'
                id='first_name'
                className={`input-text ${formErrors.firstName ? 'erros' : ''}`}
                placeholder='enter your last name'
                value={data.firstName}
                onChange={handleChange}
              />
              <small>{formErrors.firstName}</small>
            </div>
            <div className='form-control'>
              <label htmlFor='last_name'>last name</label>
              <input
                className={`input-text ${formErrors.lastName ? 'erros' : ''}`}
                placeholder='enter your first name'
                type='text'
                name='lastName'
                id='last_name'
                value={data.lastName}
                onChange={handleChange}
              />
              <small>{formErrors.lastName}</small>
            </div>
          </div>
          <div className='email-input'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              name='email'
              id='email'
              className={`input-text ${formErrors.email ? 'erros' : ''}`}
              placeholder='enter your email'
              value={data.email}
              onChange={handleChange}
            />
            <small>{formErrors.email}</small>
          </div>
          <div className='textarea'>
            <label htmlFor='message'>message</label>
            <textarea
              className={`text-area ${formErrors.message ? 'erros' : ''}`}
              name='message'
              id='message'
              cols='30'
              rows='6'
              value={data.message}
              onChange={handleChange}
              placeholder={`Send me a message and I'll reply you as soon as possible... `}
            ></textarea>
            <small>{formErrors.message}</small>
          </div>
          <div className='check'>
            <input
              type='checkbox'
              name='isChecked'
              id='agree'
              onChange={handleChange}
              checked={data.isChecked}
            />
            <label htmlFor='agree'>
              You agree to providing your data to {'{name}'} who may contact
              you.
            </label>
          </div>
          <button className='btn' id='btn__submit'>
            Send message
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactMe
