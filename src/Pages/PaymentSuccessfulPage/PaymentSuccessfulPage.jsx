import './PaymentSuccessfulPage.scss'
import PaymentSuccessful from '../../Components/PaymentSuccessful/PaymentSuccessful'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
export default function PaymentSuccessfulPage() {
  return (
    <div>
      <Navbar/>
      <PaymentSuccessful/>
      <Footer/>
    </div>
  )
}
