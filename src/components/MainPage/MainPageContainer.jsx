import { connect } from "react-redux";
import MainPage from "./MainPage";

const mapStateToProps = (state) => {
  return {
    profileName: state.mainPage.profileName,
    cards: state.mainPage.cards,
  };
};

const MainContainer = connect(mapStateToProps)(MainPage);

export default MainContainer;
