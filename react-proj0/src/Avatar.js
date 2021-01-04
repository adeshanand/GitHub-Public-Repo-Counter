import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

// this is a class component
class Avatar extends Component{

    constructor(){
        super();
        this.state = {
            name: 'Subscribe to Avatar World!'
        }
    }

    namechange(){
        this.setState({
            name: 'Welcome to Avatar World!!'
        })
    }

    render() {
        const avatarListArray = [
            { id: 1, name: 'Shanu Sind', work: 'SaaS Developer' },
            { id: 2, name: 'Harry Bond', work: 'BI Engineer' },
            { id: 3, name: 'Pummy Kumar', work: 'Data Scientist' },
            { id: 4, name: 'Allu Venka', work: 'R&D' },
        ];
    
        const avatarCardArray = avatarListArray.map((avatarCard, i) => {
            return <AvatarList key={i} id={avatarListArray[i].id} name={avatarListArray[i].name} work={avatarListArray[i].work} />
        })
    
        return (
            <div className='mainpage'>
                <h1>{this.state.name}</h1>
                {avatarCardArray}
                <button onClick={() => this.namechange()}>Subscribe</button>
            </div>
        )
    }
}


// this is a function component
// const Avatar = () => {

//     const avatarListArray = [
//         { id: 1, name: 'Shanu Sind', work: 'SaaS Developer' },
//         { id: 2, name: 'Harry Bond', work: 'BI Engineer' },
//         { id: 3, name: 'Pummy Kumar', work: 'Data Scientist' },
//         { id: 4, name: 'Allu Venka', work: 'R&D' },
//     ];

//     const avatarCardArray = avatarListArray.map((avatarCard, i) => {
//         return <AvatarList id={avatarListArray[i].id} name={avatarListArray[i].name} work={avatarListArray[i].work} />
//     })

//     return (
//         <div className='mainpage'>
//             <h1>Welcome to Avatar World!</h1>
//             {avatarCardArray}
//             <button>Subscribe</button>
//         </div>
//     )
// }

export default Avatar;