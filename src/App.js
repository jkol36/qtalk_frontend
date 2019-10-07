import React from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent-bluebird-promise';
import Dropdown from './components/dropdown';
import Modal from './components/modal';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


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
        <div id="wrapper" className="espanol-page inner-page">
        <div id="sidebar">
            <a href="#" className="logo">Qtalk Blocks</a>
            <div className="overflow-area">
                <div className="library">
                    <Dropdown color='default' title={'Library'}> 
                      <Modal open={this.state.showModal} onClick={() => this.setState({showModal:!this.state.showModal})} title='Add to Library'> 
                        <Input value={this.state.sourceLangVal} placeholder='hello world' fullWidth onChange={(e) => this.setState({sourceLangVal: e.target.value})}> </Input>
                      </Modal>
                    </Dropdown>
                </div>
                <div className="library lessons">
                  <Dropdown color='default' title='Lessons'>
                  </Dropdown>
                </div>
            </div>
        </div>
        <div id="page-content">
            <div className="page-header">
                <div className="d-flex justify-content-between">
                    <h1 className="page-title espanol">Espanol</h1>
                    <a href="#" className="toggle-options"><i className="fa fa-bars"></i></a>
                    <div className="options">
                        <div className="form-group">
                            <label>Detect Tense</label>
                            <select className="custom-select">
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
                        <div className="form-group">
                            <label>Gender</label>
                            <div className="checkbox">
                                <input type="checkbox" data-toggle="toggle" data-size="normal"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Text</label>
                            <div className="checkbox">
                                <input type="checkbox" data-toggle="toggle" data-size="normal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="page-content">
                <div className="play-area currently-playing">
                    <div className="icon-play">
                        <a href="#"><i className="fa fa-play"></i></a>
                    </div>
                    <div className="droppable-area">

                    </div>
                </div>
                <div className="text-center m-top m-bottom">
                    <a href="#" className="btn-border">Add a Sentence</a>
                </div>
            </div>
        </div>
    </div>
      </React.Fragment>

     )
  }
}
export default App;
