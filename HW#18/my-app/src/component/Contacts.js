import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {

state = {
	contacts:  [
			{
			firstName: "Барней",
			lastName: "Стинсовський",
			phone: "+380956319521",
			gender: "male"
	},{
			firstName: "Робін",
			lastName: "Щербатська",
			phone: "+380931460123",
			gender: "female"
	}, {
			firstName: "Анонімний",
			lastName: "Анонімус",
			phone: "+380666666666",
		
	}, {
			firstName: "Лілія",
			lastName: "Олдровна",
			phone: "+380504691254",
			gender: "female"
	}, {
			firstName: "Маршен",
			lastName: "Еріксонян",
			phone: "+380739432123",
			gender: "male"
	}, {
			firstName: "Теодор",
			lastName: "Мотсбес",
			phone: "+380956319521",
			gender: "male"
	}
	],
	
	search: "",
	male: 'male',
	female: 'female',
	others: true
}

handleSearchChange = e => {
	const inputValue = e.target.value;
	this.setState({search: inputValue});	
}

showContacts = () => {
	const contactsArr = this.state.contacts;
	const inputValue = this.state.search;
	
	const filtredByGender = contactsArr.filter((contact) => {
	return	contact.gender === this.state.male ||
	contact.gender === this.state.female ||
		(!contact.gender && this.state.others);
	});

	if (!inputValue) {
		return filtredByGender.map((contact, i) => <Contact props = {contact} key={i}/>);
	}else {
		const filtredContacts = filtredByGender.filter((contact) => {
			return (
				contact.firstName.toLowerCase().includes(inputValue.toLowerCase()) ||
				contact.phone.includes(inputValue.toLowerCase()) ||
				contact.lastName.toLowerCase().includes(inputValue.toLowerCase())
			);
		});

		return filtredContacts.map((contact, i) => <Contact props = {contact} key = {i}/>);
	}
};

filtredByGenderM = (e) => {
	console.log (this.state.male)
	if(e.target.checked){
		
		this.setState({male: e.target.id});
		
	}else {
		this.setState({male: ""});
	}
};

filtredByGenderF = (e) => {
	if(e.target.checked){
		this.setState({female: e.target.id});
	}else {
		this.setState({female: ""});
	}
};

filtredByGenderO = (e) => {
	if(e.target.checked){
		this.setState({others: true});
	}else {
		this.setState({others: ""});
	}
};

render() {
	return(
		<div className = 'holder'>
			<div className="block">
				<div className='input_hold'>
					<input type="text" value={this.state.search} onChange={this.handleSearchChange}></input>
				</div>
				<div className="box_holder">
					<div>
						<input checked={this.state.male} type="checkbox" id="male" 
						onChange={this.filtredByGenderM}/>
						<label>Male</label>
					</div>
					<div>
						<input checked={this.state.female} type="checkbox" id="female" 
						onChange={this.filtredByGenderF}/>
						<label>Female</label>
					</div>
					<div>
						<input checked={this.state.others} type="checkbox" id="others" 
						onChange={this.filtredByGenderO}/>
						<label>Others</label>
					</div>
				</div>
			</div>
			<div className='info_hold'>
			{this.showContacts()}
			</div>
		</div>
	)
}
}