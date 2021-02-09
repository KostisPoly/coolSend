import axios from 'axios'
import { FETC_USER } from './types'

const fetchUser = () => {
    axios.get('/api/current_user');
}