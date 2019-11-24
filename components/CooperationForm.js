import React, { useState } from 'react'
// https://formspree.io/mzbbjnzj
import axios from 'axios'

export default () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: ''
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg }
          })
          setInputs({
            email: '',
            message: ''
          })
        } else {
          setStatus({
            info: { error: true, msg: msg }
          })
        }
    }
    const handleOnChange = e => {
        e.persist()
        setInputs(prev => ({
          ...prev,
          [e.target.id]: e.target.value
        }))
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        })
      }
      const handleOnSubmit = e => {
        e.preventDefault()
        setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
        axios({
          method: 'POST',
          url: 'https://formspree.io/mzbbjnzj',
          data: inputs
        })
          .then(response => {
            document.querySelectorAll(".catalog_image")[1].src = "/img/thx.jpg";
            window.scrollTo(0,0);
            handleServerResponse(
              true,
              null
            )
          })
          .catch(error => {
            handleServerResponse(false, error.response.data.error)
          })
    }
    return(
        <form
        onSubmit={handleOnSubmit}
        >
            <p> Почта:</p>
            <input
                id="email"
                name="email"
                onChange={handleOnChange}
                value={inputs.email}
                required
            />
            <p> Cooбщение:</p>
            <textarea
                id="message"
                name="message"
                onChange={handleOnChange}
                value={inputs.message}
                required
            />
            <button
            type="Отправить" 
            disabled={status.submitting}
            > 
            {!status.submitting
                ? !status.submitted
                ?   'Отправить'
                  : 'Отправлено'
                  : 'Отправляем...'}
            </button>
                
            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}

        </form>
    )
}