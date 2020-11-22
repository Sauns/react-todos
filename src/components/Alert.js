import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import { alertContext } from '../context/alert/alertContext'

export const Alert = () => {
	const {alert, hide} = useContext(alertContext)

	return (
		<CSSTransition
			in={alert.visible}
			timeout={{
				enter: 500,
				exit: 350
			}}
			classNames={'alert'}
			mountOnEnter
			unmountOnExit
		>
			<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
				<strong>Лена цем, а теперь Внимание! </strong>
				{alert.text}
				<button onClick={hide} type="button" className="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		</CSSTransition>
	)
}