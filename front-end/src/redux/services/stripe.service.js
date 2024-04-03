import http from '../axios'

class StripeServices {

    createCheckout(data){
        return http.post("/stripe/create-checkout-session", data)
    }

}
const stripeServices = new StripeServices()

export default stripeServices;