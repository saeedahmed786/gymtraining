import React from 'react'
import Header from '../components/Header/Header'
import AllInOne from '../components/Home/AllInOne/AllInOne'
import CustomisePlans from '../components/Home/CustomisePlans/CustomisePlans'
import Offers from '../components/Home/Offers/Offers'

const index = () => {

  return (
    <div className='home'>
      <Header />
      <AllInOne />
      <CustomisePlans />
      <Offers />
    </div>
  )
}

export default index
