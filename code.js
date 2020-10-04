const app = Vue.createApp({
    data() {
        return {text: "Что бы поделать сегодня такого?",
        todos: [],
        count: 0}
    },
    methods: {
        addDeal() {
            this.count++;
            this.todos.push( [this.count, this.text]);

        },
        deleteItem(e){
            console.log(e.target.parentNode.parentNode.id)
            this.todos.splice(e.target.parentNode.parentNode.id-1, 1);
            console.log(this.todos.length)

        }
    }
})
const vm = app.mount('#root')
