import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import request from 'superagent-bluebird-promise';
import Sidebar from './components/sidebar';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sourceLang: 'en',
      toLang: 'es',
      sourceLangVal: '',
      result:null,
      translations:[],
      fromLanguage:'english',
      toLanguage:'spanish',
      showAdjectives:true,
      showLibraryDropDown:true,
      showModal:false
    }
    this.handleClick = this.handleClick.bind(this);
    this.libraryClick = this.libraryClick.bind(this);
  }

  handleClick() {
    console.log('source lang', this.state.sourceLang)
    console.log('target lang', this.state.toLang)
    console.log('text', this.state.sourceLangVal)
    request.post('http://localhost:3333/api/v1/translate').send(
    {
        sourceLanguageCode: this.state.sourceLang, // en-US
        targetLanguageCode: this.state.toLang, // sr-Latn
        text: this.state.sourceLangVal
    }
).then(res => {
  this.setState({
    result:res.body.translation[0],
    translations: [...this.state.translations, {sourceText: this.state.sourceLangVal, translation:res.body.translation[0]}]
    });
  });
}

  libraryClick() {
    this.setState({
      showLibraryDropDown:!this.state.showLibraryDropDown
    });
  }

  render() {
    console.log(this.state.translations)
    return (
      <React.Fragment>
        <div id="wrapper" class="espanol-page inner-page">
          <Sidebar />
        <div id="page-content">
            <div class="page-header">
                <div class="d-flex justify-content-between">
                    <h1 class="page-title espanol">Espanol</h1>
                    <a href="#" class="toggle-options"><i class="fa fa-bars"></i></a>
                    <div class="options">
                        <div class="form-group">
                            <label>Detect Tense</label>
                            <select class="custom-select">
                                <option value="present">Present</option>
                                <option value="preterit">Preterit</option>
                                <option value="imperfect">Imperfect</option>
                                <option value="future">Future</option>
                                <option value="present_perfect">Present Perfect</option>
                                <option value="conditional_present">Conditional Present</option>
                                <option value="conditional_perfect">Conditional Perfect</option>
                                <option value="subjunctive_present">Subjunctive Present</option>
                                <option value="subjunctive_imperfect">Subjunctive Imperfect</option>
                                <option value="subjunctive_present_perfect">Subjunctive Present Perfect</option>
                                <option value="subjunctive_future">Subjunctive Future</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Gender</label>
                            <div class="checkbox">
                                <input type="checkbox" data-toggle="toggle" data-size="normal"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Text</label>
                            <div class="checkbox">
                                <input type="checkbox" data-toggle="toggle" data-size="normal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="page-content">
                <div class="play-area currently-playing">
                    <div class="icon-play">
                        <a href="#"><i class="fa fa-play"></i></a>
                    </div>
                    <div class="droppable-area">

                        <div class="drop-icon selected">
                            <img src="images/original.png" />
                            <div class="text-on">Dummy Text</div>
                            <span class="geneder-dot-male"></span>
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                            <div class="text-on">Dummy Text</div>
                            <span class="geneder-dot-female"></span>
                        </div>
                        <div class="drop-icon">
                            <img src="images/original.png" />

                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/original.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/original.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/original.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>
                        <div class="drop-icon">
                            <img src="images/2.png" />
                        </div>

                    </div>
                </div>
                <div class="play-area">
                    <div class="icon-play">
                        <a href="#"><i class="fa fa-play"></i></a>
                    </div>
                    <div class="droppable-area">
                    </div>
                </div>
                <div class="play-area">
                    <div class="icon-play">
                        <a href="#"><i class="fa fa-play"></i></a>
                    </div>
                    <div class="droppable-area">
                    </div>
                </div>
                <div class="play-area">
                    <div class="icon-play">
                        <a href="#"><i class="fa fa-play"></i></a>
                    </div>
                    <div class="droppable-area">
                    </div>
                </div>
                <div class="play-area">
                    <div class="icon-play">
                        <a href="#"><i class="fa fa-play"></i></a>
                    </div>
                    <div class="droppable-area">
                    </div>
                </div>
                <div class="text-center m-top m-bottom">
                    <a href="#" class="btn-border">Add a Sentence</a>
                </div>
            </div>
        </div>
    </div>
      </React.Fragment>

     )
  }
}
export default App;
