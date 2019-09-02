import React from 'react';

const Item = ({item}) => {
	console.log(item);
	console.log(item[0].task);
	return (
		<li>{item[0].task}</li>
		)
}

export default Item;