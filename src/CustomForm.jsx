import React from 'react';
import { useState } from 'react';
import { Mention, MentionsInput } from 'react-mentions';
import styles from './FormInputStyle.module.css';
import mentionsInputStyle from './mentionsInputStyle';
import mentionStyle from './mentionStyle';

const CustomForm = () => {
	const [formState, setFormState] = useState({
		username: '',
		comment: '',
		email: ''
	});

	const [userEmailList, setUserEmailList] = useState([])

	const [comments, setComments] = useState([]);

	const users = [
		{
			id: 'paresh.zambare@zs.com',
			display: 'Paresh Zambare',
			userEmail: 'paresh.zambare@zs.com'
		},
		{
			id: 'kishan.makwana@zs.com',
			display: 'Kishan Makwana',
			userEmail: 'kishan.makwana@zs.com'
		},
		{
			id: 'ansari.ahmad@zs.com',
			display: 'Ansari Ahmad',
			userEmail: 'ansari.ahmad@zs.com'
		},
	];

	const submit = (e) => {
		e.preventDefault();
		if (formState.username === '' || formState.comment === '') {
			alert('Please fill in all fields');
			return;
		}

		setComments((comments) => [
			...comments,
			{
				username: formState.username,
				comment: formState.comment,
				email: formState.email
			},
		]);

		setFormState({
			username: '',
			comment: '',
			email: ''
		});
	};

	const current = new Date();
	const date = `${current.getDate()}/${
		current.getMonth() + 1
	}/${current.getFullYear()}`;

	return (
		<div className={styles.form}>
			<section className={styles.formCard}>
				<h2 className={styles.formTitle}>Comment Form</h2>
				<input
					type="text"
					value={formState.username}
					onChange={(e) =>
						setFormState({ ...formState, username: e.target.value })
					}
					placeholder="Input Your Name"
				/>
				<MentionsInput
					placeholder="Add Comment. Use '@' for mention and '&' for emojis"
					value={formState.comment}
					onChange={(e) =>
						setFormState({ ...formState, comment: e.target.value, email: "paresh@zs.com" })
					}
					style={mentionsInputStyle}
					a11ySuggestionsListLabel={'Suggested mentions'}
				>
					<Mention style={mentionStyle} data={users} onAdd={(id,display)=>{
						// console.log(startPos, "----" ,endPos);
						if(!userEmailList.includes(id)){
							setUserEmailList([...userEmailList, id])
						}
					}}/>
				</MentionsInput>
				<button onClick={submit}>Submit</button>
			</section>

			{comments.length === 0 ? (
				null
			) : (
				<section>
					{comments.map((comment, i) => (
						<div className={styles.commentCard} key={i}>
							<p className={styles.username}>
								{comment.username} on {date}
							</p>
							<h2>{comment.comment}</h2>
							<h3>{comment.email}</h3>
						</div>
					))}
				</section>
			)}

{(userEmailList?.length === 0 && userEmailList[0] !== {}) ? (
	null ) : (
		<>
		{
			userEmailList?.map((item, entry)=>{
				return(
					<h2 key={entry}>{item}</h2>
				)
			})
		}
		</>
	)}
		</div>
	);
};

export default CustomForm;