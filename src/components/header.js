import React from 'react';


export default class Header extends React.Component {
	render() {
		return (
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
		)
	}
}