import Api from '@/services/Api'

export default {
	getWeatherData (coordinats) {
		return Api().post('getWeatherData', coordinats)
	}
}

