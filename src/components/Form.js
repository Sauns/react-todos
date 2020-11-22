import React, {useState, useContext} from 'react'
import { alertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
	const [value, setvalue] = useState('')
	const alert = useContext(alertContext)
	const firebase = useContext(FirebaseContext)

	const submitHandler = event => {
		event.preventDefault()

		if(value.trim()){
			firebase.addNote(value.trim()).then( () => { 
				alert.show('Заметка была создана', 'success') 
			}).catch((test) => {
				alert.show('Произошла ошибка во время создания записи', 'danger') 
			})
			setvalue('')
		}
		else{
			alert.show('Введите название заметки')
		}
	}

	return(
		<form onSubmit={submitHandler}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Введите название заметки"
					value={value}
					onChange={e => setvalue(e.target.value)}
				/>
			</div>
		</form>
	)
}