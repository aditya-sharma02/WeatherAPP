const submitBtn = document.getElementById('submitBtn')
const cityname = document.getElementById('cityname')
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp')
const day = document.getElementById('day')
const today_data = document.getElementById('today_data')
const temp_status = document.getElementById('temp_status')
const hum = document.getElementById('hum')
const pre = document.getElementById('pre')
const showtime = document.getElementById('time')
const body = document.getElementsByClassName('body')

const min = new Date().getMinutes()
const hrs = new Date().getHours()
showtime.innerHTML = `${hrs}:${min}`

const month = []
month[0] = 'Jan'
month[1] = 'Feb'
month[2] = 'Mar'
month[3] = 'Apr'
month[4] = 'May'
month[5] = 'Jun'
month[6] = 'Jul'
month[7] = 'Aug'
month[8] = 'Sep'
month[9] = 'Oct'
month[10] = 'Nov'
month[11] = 'Dec'

const arrweek = [];
arrweek[0] = "Monday"
arrweek[1] = "Tuesday"
arrweek[2] = "Wednesday"
arrweek[3] = "Thrusday"
arrweek[4] = "Friday"
arrweek[5] = "Saturday"
arrweek[6] = "Sunday"
const weekday = new Date().getDay()
const date = new Date().getDate();
const mon = new Date().getMonth()
day.innerHTML = arrweek[weekday]
today_data.innerHTML = `${month[mon]} ${date}`
const getinfo = async (event) => {
    event.preventDefault();
    const inp = cityname.value
    if (inp == "") {
        city_name.innerHTML = 'enter the city name'
        temp.innerHTML = ''

    } else {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=79608bc9b655550d0b27e94f833b67d9`
            const response = await fetch(url)
            const data = await response.json()
            const arr = [data]
            console.log(arr[0])
            city_name.innerHTML = arr[0].name
            hum.innerHTML = `Humidity : ${arr[0].main.humidity}%`
            pre.innerHTML = `Pressure : ${arr[0].main.pressure} Pa`
            temp_status.innerHTML = arr[0].weather[0].main
            temp.innerHTML = `<p>${arr[0].main.temp} <sup>o</sup>C</p>`
            const tempstatus = arr[0].weather[0].main
            if (tempstatus == "Sunny") {
                temp_status.innerHTML = `<i class="fa-solid fa-sun"></i>`
                temp_status.style.color = 'yellow'
            }
            else if (tempstatus == "Clouds") {
                temp_status.innerHTML = `<i class="fa-solid fa-clouds"></i></i>`
                temp_status.style.color = 'lightblue'
            }
            else if (tempstatus == "Rainy") {
                temp_status.innerHTML = `<i class="fa-solid fa-rain"></i>`
                temp_status.style.color = 'grey'
            }
            else if (tempstatus == "Clear") {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`
                temp_status.style.color = 'blue'
            }
            else {
                temp_status.innerHTML = `<i class="fa-solid fa-cloud"></i>`
                temp_status.style.color = 'rgb(150, 150, 150)'
            }
            day.innerHTML = arrweek[weekday]
            today_data.innerHTML =  `${month[mon]} ${date}`


        } catch (error) {
            city_name.innerHTML = 'enter the city name properly'
            day.innerHTML = arrweek[weekday]
            today_data.innerHTML = date
            console.log(error)
            day.innerHTML = arrweek[weekday]
            today_data.innerHTML = date
            temp_status.innerHTML = ""
            temp.innerHTML = ""
            hum.innerHTML = ""
            pre.innerHTML = ""
        }


    }

}
submitBtn.addEventListener('click', getinfo)
