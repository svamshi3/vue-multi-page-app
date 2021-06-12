// const InputEl = document.querySelector('input');
// const ButtonEl = document.querySelector('button');
// const ulEl = document.querySelector('ul');

// ButtonEl.addEventListener('click', () => {
//   console.log(InputEl.value);
//   const liEl = document.createElement('li');
//   liEl.textContent = InputEl.value;
//   ulEl.appendChild(liEl)
//   InputEl.value ="";

// });

console.log(Vue);

const vueConfig = {
  data() {
    return {
      enteredValue: '',
      goalsList: []
    }
  },
  methods: {
    handleInput(e) {
      this.enteredValue = e.target.value;
    },
    addGoal() {
      this.goalsList.push(this.enteredValue)
      this.enteredValue = '';
    }
  }
};

Vue.createApp(vueConfig).mount('#app');