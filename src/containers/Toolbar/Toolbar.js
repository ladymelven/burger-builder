import React from "react";

import menuIconPath from "../../assets/images/menu.png";
import styles from "./Toolbar.module.css";
import Logo from "../../components/UI/Logo/Logo";
import NavigationList from "../../components/Navigation/NavigationList/NavigationList";
import Dropdown from "../../components/Navigation/Dropdown/Dropdown";

class Toolbar extends React.Component {
  state = { showDropdown: false };

  toggleDropdownHandler = () => {
    this.setState(currState => {
      return { showDropdown: !currState.showDropdown };
    });
  };

  render() {
    return (
      <header className={styles.toolbar}>
        <Logo />
        <nav className={styles.desktopNav}>
          <NavigationList />
        </nav>
        <nav className={styles.mobileNav}>
          <div
            className={styles.menuIconContainer}
            onClick={this.toggleDropdownHandler}
          >
            <img src={menuIconPath} alt="" className={styles.menuIcon} />
          </div>
          <Dropdown
            show={this.state.showDropdown}
            toggle={this.toggleDropdownHandler}
          />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
