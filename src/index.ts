import app from './app'
import './databases'





app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
})