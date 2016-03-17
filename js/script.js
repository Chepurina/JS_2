"use strict"
var testObj={
	ancestor: document.body,
	wrapper: '',
	header: '',
	myform: '',
	questions: '',
	question: ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'],
	answers:'',
	answer: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	submit:'',
  

	CreateWrapper: function () {
		this.wrapper=document.createElement('div');
		this.wrapper.classList.add ('wrapper');
		this.ancestor.appendChild(this.wrapper);
	},
	
	CreateHeader: function () {
		this.header=document.createElement('h1');
		this.header.classList.add ('header');
		this.header.innerHTML = 'Тест по программированию';
		this.wrapper.appendChild(this.header);
	},

	CreateForm: function() {
		this.myform=document.createElement('form');
		this.myform.classList.add ('myform');
		this.wrapper.appendChild(this.myform);
    },


	CreateQuestion: function(r) {
		this.questions=document.createElement('ul');
		this.questions.classList.add ('question');
		this.questions.innerHTML+=this.question[r];
		this.myform.appendChild(this.questions);
    },

	CreateAnswer: function(b) {
		this.answers = document.createElement('label');
        this.answers.classList.add('answer');
		this.answers.innerHTML = ' <input type="checkbox">'+this.answer[b];
		this.questions.appendChild(this.answers); 
	},


	CreateSubmit: function () {
		this.submit=document.createElement('input');
		this.submit.classList.add ('button');
		this.submit.setAttribute('type', 'submit');
		this.submit.setAttribute('value', 'Проверить мои результаты');
		this.myform.appendChild(this.submit);
	}
			  
}

testObj.CreateWrapper();
testObj.CreateHeader();
testObj.CreateForm ();

	for (var i=0; i<3;i++) {
		testObj. CreateQuestion(i);
		for (var j=0; j<3;j++) {
			testObj.CreateAnswer(j);
		}
	}

testObj.CreateSubmit ();









