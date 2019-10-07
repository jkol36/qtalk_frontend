import React from 'react';



export default class Sidebar extends React.Component {
	render() {
		return (
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
		)
	}
}