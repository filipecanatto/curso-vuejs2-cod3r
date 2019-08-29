<template>
    <div class="mt-4 container">
        <b-button variant='secondary' @click="addStudent" class="mb-4 mt-4">Add Student</b-button>
        <transition-group name='slide' tag='div'>
            <b-list-group v-for='(student, i) in students' :key='student'>
                <b-list-group-item @click="removeStudent(i)">{{student}}</b-list-group-item>
            </b-list-group>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            students: ['Robert', 'July', 'Nicholas', 'Anne']
        }
    },
    methods: {
        addStudent() {
            console.log('tst')
            // generate an aleatory string.
            const s = Math.random().toString(36).substring(2)
            this.students.push(s)
        },
        removeStudent(i) {
            this.students.splice(i, 1)
        }
    }
}
</script>

<style>
@keyframes slide-out {
	from {
		transform: translateY(0)
	}
	to {
		transform: translateY(40px)
	}
}

.slide-enter-active {
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
	opacity: 0
}

.slide-move {
	transition: transform 1s
}
</style>