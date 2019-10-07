import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import request from 'superagent-bluebird-promise';


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
    return (
      <React.Fragment>
        <div id="wrapper" class="espanol-page inner-page">
        <div id="sidebar">
            <a href="#" class="logo">Qtalk Blocks</a>
            <div class="overflow-area">
                <div class="library">
                    <a id="library" href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Library</a>
                    <div id="library-area">
                        <div class="has-dropdown">
                            <a href="#" class="item">Adjectives</a>
                            <div class="items-menu" style={{display:'none'}}>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/original.png" />
                                </div>
                            </div>
                        </div>
                        <div class="has-dropdown">
                            <a href="#" class="item">Adverbs</a>
                            <div class="items-menu" style={{display:'none'}}>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                                <div class="icon">
                                    <img src="images/2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="library lessons">
                    <a id="lessons" href="#"><i class="fa fa-picture-o" aria-hidden="true"></i> Lessons</a>
                    <div id="lessons-area">
                        <div class="has-dropdown">
                            <a href="#" class="item">My Lessons</a>
                            <div class="items-menu" style={{display:'none'}}>
                                <ul>
                                    <li>
                                        <a href="#" class="nobtn">
                                            <i class="fa fa-file"></i> Gender
                                        </a>
                                        <div class="dropdown show">
                                            <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item rename" href="#"><i class="fa fa-pencil"></i>Rename</a>
                                                    <a class="dropdown-item delete" href="#"><i class="fa fa-trash-o"></i>Delete</a>

                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="nobtn">
                                            <i class="fa fa-file"></i> PARA
                                        </a>
                                        <div class="dropdown show">
                                            <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item rename" href="#"><i class="fa fa-pencil"></i>Rename</a>
                                                    <a class="dropdown-item delete" href="#"><i class="fa fa-trash-o"></i>Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div class="has-dropdown">
                            <a href="#" class="item">Qtalk Lessons</a>
                            <div class="items-menu" style={{display:'none'}}>
                                <ul>
                                    <li>
                                        <a href="#" class="nobtn">
                                            <i class="fa fa-file"></i> Gender
                                        </a>
                                        <div class="dropdown show">
                                            <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                    <a class="dropdown-item rename" href="#"><i class="fa fa-pencil"></i>Rename</a>
                                                    <a class="dropdown-item delete" href="#"><i class="fa fa-trash-o"></i>Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#" class="nobtn">
                                            <i class="fa fa-file"></i> PARA
                                        </a>
                                        <div class="dropdown show">
                                            <a class=" dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a class="dropdown-item rename" href="#"><i class="fa fa-pencil"></i>Rename</a>
                                                <a class="dropdown-item delete" href="#"><i class="fa fa-trash-o"></i>Delete</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="user-dropdown">
                <div class="btn-group dropup">
                    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Jon Kolman
                    </button>
                    <div class="dropdown-menu">
                        <h6 class="dropdown-header">Languages</h6>
                        <a class="dropdown-item" href="#">Espanol</a>
                        <a class="dropdown-item" href="#">Francis</a>
                        <a class="dropdown-item" href="#">汉语</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Documentation</a>
                        <a class="dropdown-item" href="#">Refresh Languages</a>
                        <a class="dropdown-item" href="#">Users</a>
                        <a class="dropdown-item" href="#">Documentation</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Account</a>
                        <a class="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </div>
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
