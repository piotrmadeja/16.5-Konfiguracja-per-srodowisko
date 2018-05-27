import React from 'react';
import style from './Title.css';

const Title = (props) => {
	return (
	<div className={style.Title}>
		<h1>{props.title}</h1>
		<p>Liczba zadań: {props.data.length}</p>
	</div>
	);
	
}

export default Title;