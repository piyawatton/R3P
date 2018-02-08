import React from 'react'
import styles from './dashboard.scss'
import ListItem from '../../components/ListItem'

export default class Dashboard extends React.Component {

  doLogout() {
    this.props.history.replace('/logout')
  }

  click(item) {
    alert(`Hello ${item.name}`)
  }

  render() {
    const userList = [
      { name: 'Ton' },
      { name: 'Ma' },
      { name: 'Champ' },
      { name: 'Pee' },
    ]

    return (
      <div id="dashboard" className={styles.container}>
        <div className={styles.inner_container}>
          Dashboard
          <h3>Hello R3P</h3>
          <ListItem dataList={userList} onClickItem={item => this.click(item)} />
          {/* <button onClick={this.doLogout.bind(this)}>
            Log out
          </button> */}
        </div>
      </div>
    )
  }
}
