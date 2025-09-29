import React from 'react'
import Container from '../container/Container'
import BillingDetailsLeft from '../component/BillingDetails/BillingDetailsLeft'
import BillingDetailsRight from '../component/BillingDetails/BillingDetailsRight'
const BillingDetails = () => {
  return (
<section className="w-full">
  <Container>
    <div className="flex flex-row gap-[173px] mt-[80px] mb-[140px]"> {/* flex-row is added here because the layer is declared in global or to make the output smooth */}
      <div className="w-full ">
        <BillingDetailsLeft />
      </div>
      <div className="w-full">
        <BillingDetailsRight />
      </div>
    </div>
  </Container>
</section>

  )
}

export default BillingDetails