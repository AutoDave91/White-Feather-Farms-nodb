import React, {Component} from 'react';
import './Home.css';
import homePics from './homePics';

// class Home extends Component() {
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         index: 0
//     //     }
//     // }


//     // render(){
//         // let pics = homePics;
//         return (
//             <main className="homeContainer">
//                 <header>
//                     <img src='' alt='full White Feather Farms logo'/>
//                 </header>
//                 <section>
//                     <p>Pics</p>
//                     {/* <img src={pics[this.state.index]} /> */}
//                     {/* <button onClick={()=> {if(this.state.index >0){
//                         this.setState({index: this.state.index -1})
//                     }}}><strong><i className="prev"></i>Previous</strong></button>
//                     <button onClick={()=>{ this.setState({index: this.state.index +1})}}>
//                     <strong>Next<i className="next"></i></strong></button> */}
//                 </section>
//             </main>
//         );
//     }
// }

function Home() {
    return (
        <main className="homeContainer">
        <header>
            <img src='' alt='full White Feather Farms logo'/>
        </header>
        <section>
            <p>Pics</p>
        </section>
    </main>
    );
  }

export default Home;