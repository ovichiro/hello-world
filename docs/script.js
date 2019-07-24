// Code goes here
window.onload = function () {
  new Vue({
  el:'#myEl',
  data:{
    newTask:"",
    tasks:[],
  },
  filters:{
    
    inProgress:function(tasks){
      return tasks.filter(function(task){
        return !task.completed;
      })
    }
  },
  computed:{
    completions:function(){
      return this.tasks.filter(function(task){
        return task.completed;
      });
    },
    remaining:function(){
      return this.tasks.filter(function(task){
        return !task.completed;
      });
    }
  },
  methods:{
    addTask:function(e){
      e.preventDefault();
      if(this.newTask.length>0){
      this.tasks.push({body:this.newTask,completed:false});
      this.newTask="";
      }
    },
    removeTask:function(task){
      this.tasks.$remove(task);
    },
    editTask:function(task){
      this.removeTask(task);
      this.newTask = task.body;
     this.$$.newTaskEl.focus();
    },
    completeTask:function(task){
      task.completed=true;
    },
    completeAll:function(){
      this.tasks.forEach(function(task){
        task.completed=true;
      })
    },
    toggleTaskCompletion:function(task){
      task.completed=false;
    },
    clearCompleted:function(){
      this.tasks = this.tasks.filter(function(task){
        return !task.completed;
      });
    }
  }
});
};
