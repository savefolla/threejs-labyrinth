import React, {Component} from 'react';
import * as THREE from 'three';

class App extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.cube = undefined;

    this.animate = this.animate.bind(this);
    this.init = this.init.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.initListeners = this.initListeners.bind(this);
  }

  componentDidMount() {
    this.init();
    this.initListeners();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    const fogColor = new THREE.Color(0x000000);
    this.scene.background = fogColor;
    this.scene.fog = new THREE.Fog(fogColor, 0.0025, 20);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.myRef.current.appendChild(this.renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  initListeners() {
    document.addEventListener('keypress', this.onKeyUp);
  }

  onKeyUp(e) {
    switch (e.key) {
      case 'w':
        this.forward();
        break;
      case 'a':
        this.rotateLeft();
        break;
      case 'd':
        this.rotateRight();
        break;
      default:
        break;
    }
  }

  forward() {
    console.log('forward');
  }

  rotateLeft() {
    console.log('left');
  }

  rotateRight() {
    console.log('right');
  }

  animate() {
    requestAnimationFrame(this.animate);

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div ref={this.myRef}>
      </div>
    );
  }
}

export default App;
