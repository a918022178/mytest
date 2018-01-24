import React from 'react' 
import cssModules from 'react-css-modules'
import styles from './list.scss'
import axios from 'axios';
import Item from '../item/item'

var mix = {
    change:function(key){
        var that = this ;
        return function(e){
            var obj={};
            obj[key]=e.target.value;
            console.log(obj)
            that.setState(obj)
        }
    }
}

var  list = React.createClass ({
    mixins:[mix],
    // mixins:[React.addons.LinkedStateMixin],
    getInitialState(){
        return{
            text:'1',
            inputnum:'',
            lastnum:''
        }
    },
    componentDidMount(){
        console.log('did')
        // axios.get('https://api.douban.com/v2/movie/in_theaters').then(res=>{
        //     console.log(res)
        // })
    },
    change(e){
        this.setState({
            inputnum:e.target.value,
            lastnum:this.state.inputnum
        })
    },
    render(){
        var aa = this.props.obj.map((v,i)=>{
            return <div key={i}>{v.a}</div>
        })
        var items = []
        for (var i = 0; i < 5; i++) {
            items.push(<Item num={i} choseNum={this.state.inputnum}/>)            
        }
        return(
            <div>
                <div>{aa}</div>
                <div>
                    <p>{this.state.text}</p>
                    <input type="text" onChange={this.change('text')}/>
                    <input onChange={change}/>
                    <Item></Item>
                    {/*<input type="text" valueLink={this.linkState('text')}/>*/}
                </div>
            </div>
        )
    }
})
export default cssModules(list,styles)