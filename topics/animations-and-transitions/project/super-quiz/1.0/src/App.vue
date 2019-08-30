<template>
	<div id="app">
		<h1>Super Quiz</h1>
		<Answer v-if='showResult'></Answer>
		<Question v-else :question='this.questions[currentIndex]'> </Question>
	</div>
</template>

<script>
import Question from './components/Question'
import Answer from './components/Result'
export default {
	components: {
		Question,
		Answer
	},
	data() {
		return {
			questions: [{
					text: 'Qual é o coletivo de cães?',
					answers: [
						{ text: 'MATILHA', correct: true },
						{ text: 'REBANHO', correct: false },
						{ text: 'CARDUME', correct: false },
						{ text: 'MANADA', correct: false }
					]
				},
				{
					text: 'Qual é a maior floresta do planeta?',
					answers: [
						{ text: 'NEGRA', correct: false },
						{ text: 'DE SHERWOOD', correct: false },
						{ text: 'DA TIJUCA', correct: false },
						{ text: 'AMAZÔNICA', correct: true }
					]
				},

			],
			currentIndex: 0,
			showResult: false,
		}
	},

}
</script>

<style>
body {
	background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
	font-family: 'Oswald', sans-serif;
	color: #FFF;
	height: 100vh;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}

#app h1 {
	font-weight: 200;
	font-size: 4rem;
}

@keyframes flip-out {
	from {
		transform: rotateY(0deg);
	}
	to {
		transform: rotateY(90deg);
	}
}

@keyframes flip-in {
	from {
		transform: rotateY(90deg);
	}
	to {
		transform: rotateY(0deg);
	}
}

.flip-enter-active {
	animation: flip-in 0.3s ease;
}

.flip-leave-active {
	animation: flip-out 0.3s ease;
}
</style>
