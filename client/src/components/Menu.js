import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dimmer, Loader, List, Segment } from 'semantic-ui-react';
import axios from 'axios';
import DishForm from './DishForm';
class Menu extends Component {
  state = { menu: []}

  componentDidMount() {
    axios.get('api/menus')
    .then( res => {
      this.setState({ menu: res.data })
    }).catch( err => {
      console.log(err)
    })
  }

  displayMenu = () => {
    return this.state.menu.map(menu => {
      return (
        <List.Item as='li'>
          <Link to={`/dish/${menu.id}`}>
            {menu.dish} - ${menu.price}
          </Link>
        </List.Item>
      )
    });
  }

  menusLoader() {
    return(
    <Dimmer active style={styles.dimmer}>
      <Loader>Loading Menu...</Loader>
    </Dimmer>
    )
  }


  render() {
    return(
      <Segment basic>
        <DishForm />
        
        {this.state.menu.length > 0 ?
        <List as='ul'>
          {this.displayMenu()}
        </List> :
          this.menusLoader()
        }
      </Segment>
    )
  }
}

const styles = {
  dimmer: {
    height: '100vh'
  },
}



export default Menu;