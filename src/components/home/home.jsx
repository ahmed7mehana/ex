import React from 'react'
import logo from '../img/166448bb602550524d906cbdca70189c 1.png'
import image from '../img/Group 216.svg'
import './home.css'


/*هنبدا نتعامل مع التصميم كانه صندوق بداخل صندوق */ 
const Home = () => {
  return (
    <div className='najwa'>
      {/* صندوق الكبير الفيه كل حاجه */}
        <div className="container">
{/* صندوقين هنا واحد باعنوان الفوق والتاني هو الكارت التحت */}
              <div className='up'>

                      <h1>Withdrawal Money</h1>
                            <p>The money will be transferred within the shortest time.
                    Please make sure to enter the data correctly.</p>
                      
              </div>

              <div className="data">
                            <h1>Recipient information</h1>
                            <p>Enter the recipient's information accurately.</p>
                      
                        
                            
                          
                          <div className='contact'>
                            <div className="right">

                            </div>
                            <div className="left">

                            </div>
                          </div>

                          </div>

        </div>

   </div>
  )
}

export default Home