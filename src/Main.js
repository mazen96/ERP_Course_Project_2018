import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ReportThreats from './Home/Report/report_threats'
import PublicInterest from './What_We_Do/Public_Interest/PublicInterest';
import WhatWeDo from './What_We_Do/WWD_LandingPage/WhatWeDo';
import WhoWeAre from './Who_We_Are/WWA_Landing_Page/WhoWeAre';
import History from './Who_We_Are/History/History'
import HomeBody from './Home/HomeBody/home_body'
import DirectorsSpeech from './Who_We_Are/Directors_Speech/DirectorsSpeech';
import MissionAndValues from './Who_We_Are/Mission_And_Values/MissionAndValues';
import NewsFade from './News/News_Fade/news_fade';
import Accaountability from './What_We_Do/Accaountability/Accaountability';
import Challenges from './What_We_Do/Challenges/Challenges';
import WWD_FAQ from './What_We_Do/WWD_FAQ/wwd_faq';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path='/'                 component={HomeBody}/>
            <Route exact path='/WhoWeAre'         component={WhoWeAre}/>
            <Route exact path='/WhatWeDo'         component={WhatWeDo}/>
            <Route exact path='/PublicInterest'   component={PublicInterest}/>
            <Route exact path='/ReportThreats'    component={ReportThreats}/>
            <Route exact path='/History'          component={History}/>
            <Route exact path='/DirectorsSpeech'  component={DirectorsSpeech}/>
            <Route exact path='/MissionAndValues' component={MissionAndValues}/>
            <Route exact path='/NewsFade'         component={NewsFade}/>
            <Route exact path='/Accaountability'  component={Accaountability}/>
            <Route exact path='/Challenges'       component={Challenges}/>
            <Route exact path='/WWD_FAQ'          component={WWD_FAQ}/>
        </Switch>
    );
  }
}

export default App;