import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name': '장성진',
  'birthday': '960315',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '960305',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '951213',
  'gender': '남자',
  'job': '대학생'
}
]

class App extends React.Component {

  render() {
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
        })
      }
      </div>
    );
  }
}

export default App;
