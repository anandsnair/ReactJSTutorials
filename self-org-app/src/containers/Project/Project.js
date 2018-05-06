import React, {Component} from 'react';
import AddButton from '../../components/AddButton/AddButton';
import Aux from '../../hoc/Aux/Aux';
import Task from '../../components/Task/Task';
import Taskbox from '../../components/Taskbox/Taskbox';
import cssClasses from './Project.css';

class Project extends Component {

    state = {
        tasklist: [],
        task:null,
        taskSelected:null,
        showCard:false,
        currentCard:""
    }
    
    addTodo = (event) => {
        this.setState({task: event.target.value});
        console.log(event.target.value);
        if(event.key == 'Enter') {
            let currentTaskList = this.state.tasklist;
            currentTaskList.push(event.target.value);
            console.log(currentTaskList);
            this.setState({tasklist : currentTaskList});
            console.log(this.state.tasklist);
            console.log("entered");

        }
    }
    
    onRemove=(i)=> {
        console.log("Remove task");
        console.log(i);
    }

    openTaskBox=(i) => {
        console.log("Open Taskbox");
        console.log(i);

        //this.setState({taskSelected:event.target.key});
    }

    render() {
        console.log("rendering");
        console.log(this.state.tasklist);
        let list = null;
        if(this.state.tasklist !== undefined) {
            list= renderItem(this.state.tasklist, this);
        }
        let currentCard = null;
        if(this.state.showCard === true) {
            currentCard = renderCard(this.state.currentCard);
        }

        console.log(currentCard);
        return(<Aux>
            <AddButton onAdd={this.addTodo} 
            addText={this.addText} 
            />
            <ul className={[cssClasses.split, cssClasses.left].join(" ")}>{list}</ul>
            <div className={[cssClasses.split, cssClasses.right].join(" ")}>
                {currentCard}
            </div>
        </Aux>)
        
    }
    
    addText =(text) => {
        let currentTaskList = this.state.tasklist;
        currentTaskList.push(text);
        console.log(currentTaskList);
        this.setState({tasklist : currentTaskList});
    }
    containerClicked =(id) => {
        console.log("Container Clicked");
        console.log(id);
        this.setState({showCard:true, currentCard:id})
    }
}

const renderCard =(id) => {
    return (
        <div>
            <Taskbox currentCardId={id} />;
        </div>);
}

const renderItem = (tasklist, that) => {
    return(
      <ul>
      {tasklist.map((task,i) => 
        <div key={i}><Task task={task} 
        id={i}
        openTaskBox={() => that.openTaskBox(i)}
        onRemove={() => that.onRemove(i)}
        containerClicked={() => that.containerClicked(i)}/></div>
      )}
      </ul>
    ) 
  };


export default Project;