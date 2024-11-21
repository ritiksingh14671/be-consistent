import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-gray-500 text-center text-white'>
    <MDBContainer className='p-2 pb-0'>
      <section className='mb-2'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='https://www.facebook.com/shivanshu.mishra.33234/'
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='https://twitter.com/Shivanshu_23'
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href='mailto:mishrashivashu2004@gmail.com'
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='https://www.instagram.com/shivanshu.mishra.23/'
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='https://www.linkedin.com/in/shivanshu-mishra-9baab3229/'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='https://github.com/Shivanshumishra23'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3 gradient1 ' style={{ backgroundColor: 'rgba(255,255,255, 0.5)' }}>
      © 2023 Copyright :
      <a className='text-white' href=''>
       Shivanshu Mishra
      </a>
    </div>
  </MDBFooter>
);
  
}

export default Footer
