import axios from "axios";

const BACKEND_URL = 'https://carbooking-5d6cd-default-rtdb.firebaseio.com/'

export async function storeRecievedCall() {
  const response = await axios.post(
    BACKEND_URL + '/recievedCalls.json',
    
  )

}