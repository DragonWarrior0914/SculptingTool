import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSimpleRange from 'react-simple-range';
import RenderModel from './renderModel';
import FaceModel from './FaceModel'
import './editor.scss';

class Editor extends Component {
  state = {};

  render() {
    return (
      <div className='editor'>
        <div className='editor-sidebar'>
          <div className='user-info'>
            <div className='user-avatar' style={ { backgroundImage: 'url(http://placeimg.com/60/60/people)' } } />
            <div>
              <p>Jams Jasmin JD</p>
              <p>Female</p>
            </div>
          </div>
          <div className='surgery-type'>
            <select>
              <option value='Rhinoplasty'>Rhinoplasty</option>
              <option value='Liposuction'>Liposuction</option>
              <option value='lipsSurgery'>Lips Surgery</option>
            </select>
          </div>
          <ul className='tabs'>
            <li className='tab'>
              <a className='tab-link active' href='#'><span className='icon icon-contoure' />Contoure</a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#'><span className='icon icon-measure' />Measure</a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#'><span className='icon icon-landmark' />Land mark</a>
            </li>
            <li className='tab'>
              <a className='tab-link' href='#'><span className='icon icon-trim' />Trim</a>
            </li>
          </ul>
          <div className='type-list'>
            <span className='type active'>
              <span className='icon icon-nose-1' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-2' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-3' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-4' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-5' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-6' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-7' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-8' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-9' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-10' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-11' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-12' />
            </span>
            <span className='type'>
              <span className='icon icon-nose-13' />
            </span>
            <span className='type'>
              <span className='icon icon-paintbrush' />
            </span>
            <span className='type'>
              <span className='icon icon-free-hand' />
            </span>
          </div>

          <div className='brushes'>
            <h3>Brush</h3>

            <div className='brushes-type'>
              <div className='brush'>
                <span className='icon icon-resureface' />
                <span className='brush-name'>Resureface</span>
              </div>
              <div className='brush'>
                <span className='icon icon-clone' />
                <span className='brush-name'>Clone</span>
              </div>
              <span className='brush'>
                <span className='icon icon-wrinkle' />
                <span className='brush-name'>Wrinkle</span>
              </span>
            </div>

            <div className='brushes-panel'>
              <span className='icon icon-paintbrush' />
              <span className='circle circle-1' />
              <span className='circle circle-2' />
              <span className='circle circle-3 active' />
              <span className='circle circle-4' />
            </div>
            <span className='brushes-panel-name'>Brush size</span>

            <div className='brushes-panel sculpt'>
              <span className='icon icon-arrow-down-thin' />
              <span className='icon icon-arrow-down active' />
              <span className='sculpt-square' />
              <span className='icon icon-arrow-up' />
              <span className='icon icon-arrow-up-thin' />
            </div>
            <span className='brushes-panel-name'>Sculpt</span>

            <div className='bottom-brushes'>
              <div className='brushes-type column'>
                <div className='brush'>
                  <span className='icon icon-fill' />
                  <span className='brush-name'>Fill</span>
                </div>
                <div className='brush'>
                  <span className='icon icon-lipo' />
                  <span className='brush-name'>Lipo</span>
                </div>
                <span className='brush'>
                  <span className='icon icon-smooth' />
                  <span className='brush-name'>Smooth</span>
                </span>
              </div>

              <div className='range-container'>
                <ReactSimpleRange
                  min={ 0 }
                  max={ 80 }
                  defaultValue={ 60 }
                  sliderSize={ 6 }
                  verticalSliderHeight='200px'
                  sliderColor='#ffffff'
                  trackColor='#ffffff'
                  thumbSize={ 19 }
                  thumbColor='#5bc0de'
                  vertical
                />
              </div>
            </div>
          </div>
        </div>

        <div className='editor-body'>

          <div className='top-panel'>
            <div className='left-side'>
              <span className='icon icon-refresh' />
              <span className='icon icon-undo' />
              <span className='icon icon-redo' />
            </div>
            <div className='right-side'>
              <span className='icon icon-edit' />
              <span className='icon icon-add-photo' />
            </div>
          </div>

          <div className='canvas-container'>
            <div className='canvas'>
              <div className='canvas-example'>
                <div className='before' id='before'>
                  <h3>Before</h3>
                  <FaceModel />
                  {/* <img src='/images/example-img.png' alt='' /> */}
                </div>
                <div className='after' id='after'>
                  <h3>After</h3>
                  <FaceModel />
                  
                  {/* <img src='/images/example-img.png' alt='' /> */}
                </div>
              </div>

              <div className='canvas-gallery'>
                <img src='/images/gallery-1.png' className='gallery-img' alt='' />
                <img src='/images/gallery-2.png' className='gallery-img' alt='' />
                <img src='/images/gallery-3.png' className='gallery-img' alt='' />
                <img src='/images/gallery-4.png' className='gallery-img active' alt='' />
                <img src='/images/gallery-5.png' className='gallery-img' alt='' />
                <img src='/images/gallery-6.png' className='gallery-img' alt='' />
                <img src='/images/gallery-7.png' className='gallery-img' alt='' />
              </div>
            </div>

            <div className='canvas-tools'>
              <img src='/images/3dbox.png' className='perspective-img' alt='' />

              <div className='range-tool'>
                <span className='zoom'>
                  <span className='icon icon-zoom-in' />
                </span>
                <ReactSimpleRange
                  min={ 0 }
                  max={ 80 }
                  defaultValue={ 60 }
                  sliderSize={ 6 }
                  verticalSliderHeight='140px'
                  sliderColor='#ffffff'
                  trackColor='#ffffff'
                  thumbSize={ 19 }
                  thumbColor='#8f8f8f'
                  vertical
                />
                <span className='zoom'>
                  <span className='icon icon-zoom-out' />
                </span>
              </div>

              <div className='tools-group'>
                <span className='icon icon-cursor' />
                <span className='icon icon-location' />
              </div>

              <div className='tools-group'>
                <img src='/images/sphere-1.png' className='sphere-img' alt='' />
                <img src='/images/sphere-2.png' className='sphere-img' alt='' />
                <img src='/images/sphere-3.png' className='sphere-img' alt='' />
              </div>

              <div className='tools-group'>
                <span className='square-1' />
                <span className='square-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {};

export default Editor;
