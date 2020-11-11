import React, { Component } from 'react';
import Students from './types/StudentsInfo';
import Student from './components/Student';
import { source } from './Source';
import './App.css';
import {
  Header,
  Title,
  Image,
  BodyContainer,
  Body
} from './styles/styled';


interface AppState {
  students: Students[];
}

class App extends Component<{}, AppState>{
  constructor(props: any) {
    super(props);
    this.state = {
      students: source
    }
  }

  render() {
    return (
      <div>
        <Header>
          <Image src='https://hackreactor-restaurant-images.s3-us-west-2.amazonaws.com/static-images/hrlog.png' alt='logo' className='App-logo' />
          <Title>
            Congratulations HRSF130!
          </Title>
        </Header>
        <BodyContainer>
          <Body>
            {
              this.state.students.map((student: Students, index: number) => {
                return (
                  <Student {...student} key={index} />
                )
              })
            }
          </Body>
        </BodyContainer>
      </div>
    )
  }
}


export default App;
