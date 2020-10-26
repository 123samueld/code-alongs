const app = Vue.createApp({
  data() {
    return {
      current: '',
      previous: null,
      operator: null, 
      operatorClicked: false,
    };
  },
  methods: {
    clear(){
      this.current = '';
    },
    
    calculate(){
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
      this.previous = null;
    },
    append(number){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    point(){
      if(this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious(){
      this.previous = this.current;
      this.operatorClicked = true;
    },
    add(){
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    
    subtract(){
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    
    multiply(){
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    
    divide(){
      this.operator = (a, b) => a / b;
      this.setPrevious();
    }
  }
});

app.mount("#calc");
