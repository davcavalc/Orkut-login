import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
            <div className="flex flex-row bg-footer mx-[127px] mr-[238px] mt-3 justify-center">
              <span>© 2017 Orkut - </span>
              <a href="http://" className='text-blue-600 underline ml-3'>Sobre o Orkut</a>
              <a href="http://" className='text-blue-600 underline ml-3'>Centro de segurança</a>
              <a href="http://" className='text-blue-600 underline ml-3'>Privacidade</a>
              <a href="http://" className='text-blue-600 underline ml-3'>Termos</a>
            </div>
      </>
    )
  }
}
